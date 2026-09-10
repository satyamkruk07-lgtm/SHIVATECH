export type GalleryCategory =
  | "ALL"
  | "SHIVATECH"
  | "EVENTS"
  | "TEAM"
  | "MOMENTS"
  | "BEHIND THE SCENES";

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: GalleryCategory;
  event: string;
  date: string;
  location: string;
  description: string;
  // Wide non-overlapping spatial coordinates relative to central web hub
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
  featured?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "ALL",
  "EVENTS",
  "SHIVATECH",
  "TEAM",
  "MOMENTS",
  "BEHIND THE SCENES",
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-01",
    src: "/gallery/DSC04440.JPG",
    title: "HACKNATION INNOVATION SPRINT",
    category: "EVENTS",
    event: "HACKNATION 2.0",
    date: "07–08 OCTOBER 2026",
    location: "HACKATHON ARENA",
    description: "Developer teams collaborating and building next-generation software prototypes during the intense 36-hour hackathon.",
    x: -360,
    y: -160,
    size: "md",
    featured: true,
  },
  {
    id: "gal-02",
    src: "/gallery/DSC04481.JPG",
    title: "RAPID PROTOTYPING LABS",
    category: "EVENTS",
    event: "HACKNATION 2.0",
    date: "07–08 OCTOBER 2026",
    location: "TECH LAB 1",
    description: "Engineers working through algorithmic challenges, machine learning models, and system architectures under high-intensity competition.",
    x: -110,
    y: -180,
    size: "lg",
    featured: true,
  },
  {
    id: "gal-03",
    src: "/gallery/DSC04484.JPG",
    title: "COLLABORATIVE CODING SESSIONS",
    category: "SHIVATECH",
    event: "SHIVATECH EXPO",
    date: "07–08 OCTOBER 2026",
    location: "COLLABORATION HUB",
    description: "Students collaborating with tech leads and domain mentors to fine-tune production-grade features and software systems.",
    x: 160,
    y: -160,
    size: "md",
  },
  {
    id: "gal-04",
    src: "/gallery/DSC04492.JPG",
    title: "TEAM WORKFLOW & ARCHITECTURE",
    category: "TEAM",
    event: "HACKNATION 2.0",
    date: "07–08 OCTOBER 2026",
    location: "MAIN AUDITORIUM WING",
    description: "Team leads synchronizing sprint milestones, database schemas, and interface designs before the evaluation checkpoints.",
    x: 230,
    y: 0,
    size: "md",
  },
  {
    id: "gal-05",
    src: "/gallery/DSC04530.JPG",
    title: "AI & DEEP TECH EXPLORATION",
    category: "EVENTS",
    event: "SHIVATECH 2026",
    date: "08 OCTOBER 2026",
    location: "RESEARCH WING",
    description: "Participants testing modern AI tools, automated pipelines, and cloud computing architectures to solve real-world problems.",
    x: 170,
    y: 170,
    size: "lg",
    featured: true,
  },
  {
    id: "gal-06",
    src: "/gallery/DSC04607.JPG",
    title: "MENTORSHIP & CODE REVIEWS",
    category: "BEHIND THE SCENES",
    event: "HACKNATION 2.0",
    date: "08 OCTOBER 2026",
    location: "MENTOR LOUNGE",
    description: "Industry mentors providing critical feedback on code structure, algorithmic efficiency, and product viability.",
    x: -80,
    y: 170,
    size: "md",
  },
  {
    id: "gal-07",
    src: "/gallery/DSC04664.JPG",
    title: "PROJECT EVALUATION ARENA",
    category: "MOMENTS",
    event: "SHIVATECH 2026",
    date: "09 OCTOBER 2026",
    location: "EXPO FLOOR",
    description: "Teams presenting live product demonstrations, system demos, and user interaction journeys directly to the jury panel.",
    x: -340,
    y: 160,
    size: "md",
  },
  {
    id: "gal-08",
    src: "/gallery/DSC04722.JPG",
    title: "PITCH STAGE PRESENTATIONS",
    category: "SHIVATECH",
    event: "IDEATHON",
    date: "08 OCTOBER 2026",
    location: "STAGE 1",
    description: "High-impact startup pitch presentations highlighting market viability, technological depth, and scalability potential.",
    x: -450,
    y: 0,
    size: "md",
  },
  {
    id: "gal-09",
    src: "/gallery/DSC04727.JPG",
    title: "KEYNOTE & GUEST SESSIONS",
    category: "BEHIND THE SCENES",
    event: "OPENING CEREMONY",
    date: "07 OCTOBER 2026",
    location: "GRAND AUDITORIUM",
    description: "Distinguished keynote speakers and academic leadership inspiring delegates and students at the festival launch.",
    x: -240,
    y: 0,
    size: "sm",
  },
  {
    id: "gal-10",
    src: "/gallery/DSC04753.JPG",
    title: "AWARDS & CHAMPIONS CELEBRATION",
    category: "MOMENTS",
    event: "VALEDICTORY CEREMONY",
    date: "10 OCTOBER 2026",
    location: "CENTRAL ARENA",
    description: "Celebrating outstanding hackathon winners, cash prize distributions, trophy presentations, and team milestones at SHIVATECH 2026.",
    x: 300,
    y: -160,
    size: "sm",
  },
];
