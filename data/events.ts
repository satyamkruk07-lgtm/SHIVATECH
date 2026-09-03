export type EventArrivalConfig = {
  startFrame: number;
  peakFrame: number;
  endFrame: number;
};

export type EventSequenceData = {
  id: string;
  index: number;
  title: string;
  description: string;
  category: string;
  frameFolder: string;
  framePrefix: string;
  frameExtension: string;
  minFrame: number;
  maxFrame: number;
  frameCount: number;
  cardStartFrame: number;
  cardEndFrame: number;
  arrival: EventArrivalConfig;
  nextEvent: string | null;
  // Alias property requested by specification
  framePath: string;
  videoUrl: string;
};

// Backward-compatible type for old components if referenced elsewhere
export type EventData = {
  id: string;
  title: string;
  category: string;
  description: string;
  date?: string;
  prize?: string;
  teamSize?: string;
  buildingId?: string;
  image?: string;
  position: {
    x: number;
    z: number;
  };
};

export const eventsSequenceData: EventSequenceData[] = [
  {
    id: "hacknation-2",
    index: 1,
    title: "HACKNATION 2.0",
    category: "HACKATHON",
    description: "An intense innovation-driven challenge where teams build, experiment and turn bold ideas into working solutions.",
    frameFolder: "/events/hacknation-2_frames/",
    framePrefix: "frame_",
    frameExtension: ".png",
    minFrame: 1,
    maxFrame: 240,
    frameCount: 240,
    cardStartFrame: 150,
    cardEndFrame: 235,
    arrival: {
      startFrame: 150,
      peakFrame: 195,
      endFrame: 235,
    },
    nextEvent: "IDEATHON",
    framePath: "/events/hacknation-2_frames/frame_001.png",
    videoUrl: "/events/hacknation-2.mp4",
  },
  {
    id: "ideathon",
    index: 2,
    title: "IDEATHON",
    category: "INNOVATION",
    description: "A creative idea-building challenge where participants transform real-world problems into practical and impactful solutions.",
    frameFolder: "/events/Ideathon_frames/",
    framePrefix: "frame_",
    frameExtension: ".png",
    minFrame: 1,
    maxFrame: 85,
    frameCount: 85,
    cardStartFrame: 45,
    cardEndFrame: 82,
    arrival: {
      startFrame: 45,
      peakFrame: 65,
      endFrame: 82,
    },
    nextEvent: "SHIVATECH",
    framePath: "/events/Ideathon_frames/frame_001.png",
    videoUrl: "/events/Ideathon.mp4",
  },
  {
    id: "shivatech",
    index: 3,
    title: "SHIVATECH",
    category: "FLAGSHIP EXPO",
    description: "The flagship SHIVATECH experience celebrating technology, creativity, problem-solving and student innovation.",
    frameFolder: "/events/shivatech_frames/",
    framePrefix: "frame_",
    frameExtension: ".png",
    minFrame: 15,
    maxFrame: 85,
    frameCount: 71,
    cardStartFrame: 45,
    cardEndFrame: 82,
    arrival: {
      startFrame: 45,
      peakFrame: 65,
      endFrame: 82,
    },
    nextEvent: "SCIENCE CHAMPIONSHIP",
    framePath: "/events/shivatech_frames/frame_015.png",
    videoUrl: "/events/shivatech.mp4",
  },
  {
    id: "science-championship",
    index: 4,
    title: "SCIENCE CHAMPIONSHIP",
    category: "COMPETITION",
    description: "A competitive science challenge designed to test knowledge, reasoning, experimentation and scientific thinking.",
    frameFolder: "/events/Science_champion_frames/",
    framePrefix: "frame_",
    frameExtension: ".png",
    minFrame: 1,
    maxFrame: 65,
    frameCount: 65,
    cardStartFrame: 35,
    cardEndFrame: 62,
    arrival: {
      startFrame: 35,
      peakFrame: 50,
      endFrame: 62,
    },
    nextEvent: null,
    framePath: "/events/Science_champion_frames/frame_001.png",
    videoUrl: "/events/Science%20champion.mp4",
  },
];

export const eventsData: EventData[] = eventsSequenceData.map((e) => ({
  id: e.id,
  title: e.title,
  category: e.category,
  description: e.description,
  date: "OCT 12-14, 2026",
  prize: "₹50,000",
  teamSize: "2–4",
  buildingId: `bldg-${e.id}`,
  image: e.framePath,
  position: { x: 0, z: 0 },
}));

// Calculate total frame count across all events
export const TOTAL_GLOBAL_FRAMES = eventsSequenceData.reduce(
  (sum, event) => sum + event.frameCount,
  0
); // 240 + 85 + 71 + 65 = 461 frames

/**
 * Returns exact URL for a given event and frame number (1-indexed or relative frame)
 */
export function getFrameUrl(event: EventSequenceData, frameNumber: number): string {
  const clamped = Math.max(event.minFrame, Math.min(event.maxFrame, frameNumber));
  const pad = clamped.toString().padStart(3, "0");
  return `${event.frameFolder}${event.framePrefix}${pad}${event.frameExtension}`;
}

export type GlobalSequenceState = {
  activeEvent: EventSequenceData;
  activeEventIndex: number;
  frameNumber: number;
  eventProgress: number;
  globalProgress: number;
  isArrivalRange: boolean;
  eventArrivalProgress: number;
  frameUrl: string;
};

/**
 * Maps global scroll progress (0.0 to 1.0) into exact event & frame state
 */
export function getGlobalSequenceState(progress: number): GlobalSequenceState {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  // Total global discrete frame index from 0 to (TOTAL_GLOBAL_FRAMES - 1)
  const globalIndex = Math.min(
    TOTAL_GLOBAL_FRAMES - 1,
    Math.floor(clampedProgress * TOTAL_GLOBAL_FRAMES)
  );

  let accumulated = 0;
  let activeEventIndex = 0;
  let activeEvent = eventsSequenceData[0];
  let localFrameIndex = 0;

  for (let i = 0; i < eventsSequenceData.length; i++) {
    const event = eventsSequenceData[i];
    if (globalIndex < accumulated + event.frameCount || i === eventsSequenceData.length - 1) {
      activeEventIndex = i;
      activeEvent = event;
      localFrameIndex = globalIndex - accumulated;
      break;
    }
    accumulated += event.frameCount;
  }

  // Calculate actual frame number inside the folder
  const frameNumber = activeEvent.minFrame + localFrameIndex;
  
  // Calculate event progress (0.0 to 1.0 within active event)
  const eventProgress = activeEvent.frameCount > 1 
    ? localFrameIndex / (activeEvent.frameCount - 1)
    : 1;

  // Check card arrival range
  const isArrivalRange =
    frameNumber >= activeEvent.cardStartFrame &&
    frameNumber <= activeEvent.cardEndFrame;

  const cardRangeLength = activeEvent.cardEndFrame - activeEvent.cardStartFrame;
  const eventArrivalProgress = isArrivalRange && cardRangeLength > 0
    ? (frameNumber - activeEvent.cardStartFrame) / cardRangeLength
    : 0;

  const frameUrl = getFrameUrl(activeEvent, frameNumber);

  return {
    activeEvent,
    activeEventIndex,
    frameNumber,
    eventProgress,
    globalProgress: clampedProgress,
    isArrivalRange,
    eventArrivalProgress,
    frameUrl,
  };
}

export type EventZoomConfig = {
  maxScale: number;
  focalX: number;
  focalY: number;
};

export const eventZoomConfigs: Record<string, EventZoomConfig> = {
  "hacknation-2": {
    maxScale: 1.35,
    focalX: 0.50,
    focalY: 0.38,
  },
  "ideathon": {
    maxScale: 1.65,
    focalX: 0.50,
    focalY: 0.42,
  },
  "shivatech": {
    maxScale: 1.60,
    focalX: 0.50,
    focalY: 0.40,
  },
  "science-championship": {
    maxScale: 1.70,
    focalX: 0.50,
    focalY: 0.38,
  },
};

/**
 * Returns dynamic zoom scale and focal point for building arrival
 */
export function getEventZoomState(
  eventId: string,
  eventProgress: number
): { scale: number; focalX: number; focalY: number } {
  const config = eventZoomConfigs[eventId] || {
    maxScale: 1.5,
    focalX: 0.5,
    focalY: 0.4,
  };

  // Zoom starts accelerating in the final 35% of event scroll progress (0.65 to 1.0)
  if (eventProgress < 0.65) {
    return { scale: 1.0, focalX: 0.5, focalY: 0.5 };
  }

  const zoomFactor = (eventProgress - 0.65) / 0.35; // 0.0 to 1.0
  // Power 2.2 curve: smooth initial camera fly-over, accelerating zoom into building name in final frames
  const easedFactor = Math.pow(zoomFactor, 2.2);

  const scale = 1.0 + (config.maxScale - 1.0) * easedFactor;
  const focalX = 0.5 + (config.focalX - 0.5) * easedFactor;
  const focalY = 0.5 + (config.focalY - 0.5) * easedFactor;

  return { scale, focalX, focalY };
}
