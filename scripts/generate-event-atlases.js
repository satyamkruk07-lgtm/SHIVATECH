const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const eventsConfig = [
  {
    id: "hacknation-2",
    folder: "hacknation-2_frames",
    prefix: "frame_",
    minFrame: 1,
    maxFrame: 240,
  },
  {
    id: "ideathon",
    folder: "Ideathon_frames",
    prefix: "frame_",
    minFrame: 1,
    maxFrame: 85,
  },
  {
    id: "shivatech",
    folder: "shivatech_frames",
    prefix: "frame_",
    minFrame: 15,
    maxFrame: 85,
  },
  {
    id: "science-championship",
    folder: "Science_champion_frames",
    prefix: "frame_",
    minFrame: 1,
    maxFrame: 65,
  },
];

const FRAMES_PER_CHUNK = 16; // 4x4 grid per atlas chunk
const COLUMNS = 4;
const ROWS = 4;

async function generateAtlases() {
  console.log("🚀 Starting Texture Atlas Generation...");

  const baseDir = path.join(process.cwd(), 'public', 'events');
  const outputDir = path.join(process.cwd(), 'public', 'event-atlas');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const manifest = {};

  for (const evt of eventsConfig) {
    console.log(`\n📦 Processing event: ${evt.id}`);
    const evtDir = path.join(baseDir, evt.folder);

    if (!fs.existsSync(evtDir)) {
      console.warn(`  ⚠️ Directory not found: ${evtDir}`);
      continue;
    }

    // Read and sort files numerically
    const files = fs.readdirSync(evtDir)
      .filter((f) => f.endsWith('.webp') || f.endsWith('.png'))
      .sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
        const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
        return numA - numB;
      });

    if (files.length === 0) {
      console.warn(`  ⚠️ No frames found in ${evtDir}`);
      continue;
    }

    // Inspect first frame dimensions
    const sampleMeta = await sharp(path.join(evtDir, files[0])).metadata();
    const frameWidth = sampleMeta.width || 1280;
    const frameHeight = sampleMeta.height || 720;

    console.log(`  Frame Size: ${frameWidth}x${frameHeight} | Total Frames: ${files.length}`);

    const chunks = [];
    const totalChunks = Math.ceil(files.length / FRAMES_PER_CHUNK);

    for (let c = 0; c < totalChunks; c++) {
      const chunkFiles = files.slice(c * FRAMES_PER_CHUNK, (c + 1) * FRAMES_PER_CHUNK);
      const chunkIndex = c;
      const startFrameNum = parseInt(chunkFiles[0].replace(/\D/g, ''), 10);
      const endFrameNum = parseInt(chunkFiles[chunkFiles.length - 1].replace(/\D/g, ''), 10);

      const actualRows = Math.ceil(chunkFiles.length / COLUMNS);
      const atlasWidth = COLUMNS * frameWidth;
      const atlasHeight = actualRows * frameHeight;

      // Composite grid images
      const compositeList = [];
      for (let i = 0; i < chunkFiles.length; i++) {
        const col = i % COLUMNS;
        const row = Math.floor(i / COLUMNS);
        const left = col * frameWidth;
        const top = row * frameHeight;

        compositeList.push({
          input: path.join(evtDir, chunkFiles[i]),
          left,
          top,
        });
      }

      const chunkFilename = `${evt.id}-chunk-${String(c).padStart(2, '0')}.webp`;
      const outputPath = path.join(outputDir, chunkFilename);

      await sharp({
        create: {
          width: atlasWidth,
          height: atlasHeight,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        },
      })
        .composite(compositeList)
        .webp({ quality: 85, effort: 4 })
        .toFile(outputPath);

      const stat = fs.statSync(outputPath);
      console.log(`  ✓ Generated chunk ${c + 1}/${totalChunks}: ${chunkFilename} (${(stat.size / 1024).toFixed(1)} KB)`);

      chunks.push({
        chunkIndex,
        file: `/event-atlas/${chunkFilename}`,
        startFrame: startFrameNum,
        endFrame: endFrameNum,
        frameCount: chunkFiles.length,
        columns: COLUMNS,
        rows: actualRows,
        atlasWidth,
        atlasHeight,
      });
    }

    manifest[evt.id] = {
      id: evt.id,
      frameWidth,
      frameHeight,
      frameCount: files.length,
      columns: COLUMNS,
      rows: ROWS,
      framesPerChunk: FRAMES_PER_CHUNK,
      chunks,
    };
  }

  // Write manifest JSON
  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n🎉 Manifest written to ${manifestPath}`);
}

generateAtlases().catch((err) => {
  console.error("❌ Atlas generation failed:", err);
  process.exit(1);
});
