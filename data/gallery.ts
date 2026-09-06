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
  // Organic coordinates relative to central hub (in pixels for desktop viewport)
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
  featured?: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  "ALL",
  "SHIVATECH",
  "EVENTS",
  "TEAM",
  "MOMENTS",
  "BEHIND THE SCENES",
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-01",
    src: "/gallery/gallery_inauguration.jpg",
    title: "INAUGURATION CEREMONY",
    category: "SHIVATECH",
    event: "SHIVATECH 2026",
    date: "OCTOBER 24, 2026",
    location: "GRAND AUDITORIUM",
    description: "Grand opening keynotes, dignitary speeches, holographic light lasers, and reveal of the SHIVATECH 2026 flagship trophy.",
    x: -320,
    y: -180,
    size: "lg",
    featured: true,
  },
  {
    id: "gal-02",
    src: "/images/events/event_hackathon.jpg",
    title: "HACKNATION 2.0 KICKOFF",
    category: "EVENTS",
    event: "HACKNATION 2.0",
    date: "OCTOBER 24, 2026",
    location: "HACKATHON ARENA - HALL A",
    description: "Elite developer teams diving into 24 hours of non-stop code, AI experimentation, and rapid prototyping.",
    x: 0,
    y: -260,
    size: "lg",
    featured: true,
  },
  {
    id: "gal-03",
    src: "/images/events/event_ai.jpg",
    title: "NEURAL NETWORK LABS",
    category: "EVENTS",
    event: "TECH TALKS",
    date: "OCTOBER 24, 2026",
    location: "SEMINAR HALL 1",
    description: "Hands-on deep dive into edge computing models, real-time spatial vision, and autonomous neural agents.",
    x: 320,
    y: -180,
    size: "md",
  },
  {
    id: "gal-04",
    src: "/images/events/event_innovation.jpg",
    title: "IDEATHON PITCH ARENA",
    category: "EVENTS",
    event: "IDEATHON",
    date: "OCTOBER 24, 2026",
    location: "INNOVATION HUB - HALL B",
    description: "Founders pitching game-changing tech frameworks and venture ideas directly to startup mentors and investors.",
    x: 420,
    y: 0,
    size: "md",
  },
  {
    id: "gal-05",
    src: "/gallery/gallery_awards.jpg",
    title: "VALEDICTORY & CHAMPIONS",
    category: "MOMENTS",
    event: "CLOSING CEREMONY",
    date: "OCTOBER 25, 2026",
    location: "MAIN ARENA STAGE",
    description: "Grand prize distribution of ₹5,00,000+ pool, trophy handovers, confetti explosion, and team celebrations.",
    x: 320,
    y: 180,
    size: "lg",
    featured: true,
  },
  {
    id: "gal-06",
    src: "/images/events/event_robotics.jpg",
    title: "AUTONOMOUS BOTS ARENA",
    category: "EVENTS",
    event: "SHIVATECH MAIN",
    date: "OCTOBER 25, 2026",
    location: "MAIN ARENA COMPLEX",
    description: "High-octane robotics battle circuit featuring custom autonomous bots, obstacle traversal, and precision kinetic tasks.",
    x: 0,
    y: 260,
    size: "md",
  },
  {
    id: "gal-07",
    src: "/images/events/event_codewars.jpg",
    title: "CODEWARS SPEED RUN",
    category: "EVENTS",
    event: "COMPETITIONS",
    date: "OCTOBER 24, 2026",
    location: "LAB ZONE 1",
    description: "Competitive algotrading, data structure sprints, and real-time debugging challenges under strict time pressure.",
    x: -320,
    y: 180,
    size: "md",
  },
  {
    id: "gal-08",
    src: "/images/events/event_gaming.jpg",
    title: "ESPORTS ARENA FINALS",
    category: "MOMENTS",
    event: "CYBER ARENA",
    date: "OCTOBER 24, 2026",
    location: "GAMING LOUNGE",
    description: "Pro gaming showdown with live shoutcasting, high-fps tournament stages, and cheering crowds.",
    x: -420,
    y: 0,
    size: "md",
  },
  {
    id: "gal-09",
    src: "/images/events/event_uiux.jpg",
    title: "SPATIAL UI DESIGN LAB",
    category: "BEHIND THE SCENES",
    event: "WORKSHOPS",
    date: "OCTOBER 24, 2026",
    location: "LAB ZONE 3",
    description: "Design masterclass exploring glassmorphic shaders, micro-interactions, and 3D web animation pipelines.",
    x: -200,
    y: -320,
    size: "sm",
  },
  {
    id: "gal-10",
    src: "/images/events/event_quiz.jpg",
    title: "TECH TRIVIA BATTLE",
    category: "MOMENTS",
    event: "COMPETITIONS",
    date: "OCTOBER 25, 2026",
    location: "SEMINAR HALL 2",
    description: "Fast-paced tech history, trivia, and rapid-fire buzzer rounds testing deep computing knowledge.",
    x: 200,
    y: -320,
    size: "sm",
  },
  {
    id: "gal-11",
    src: "/schedule/photorealistic_spider_hand.jpg",
    title: "CORE FESTIVAL CREW",
    category: "TEAM",
    event: "ORGANIZING COMMITTEE",
    date: "OCTOBER 25, 2026",
    location: "SHIVATECH HQ",
    description: "The dedicated organizers, student coordinators, and technical leads who brought SHIVATECH 2026 to life.",
    x: 200,
    y: 320,
    size: "sm",
  },
  {
    id: "gal-12",
    src: "/gallery/gallery_inauguration.jpg",
    title: "NIGHT LIGHT SPECTACLE",
    category: "BEHIND THE SCENES",
    event: "OPEN AIR SHOW",
    date: "OCTOBER 24, 2026",
    location: "MAIN PLAZA",
    description: "Midnight laser canopy, ambient synthwave beats, and illuminated web structures across the plaza deck.",
    x: -200,
    y: 320,
    size: "sm",
  },
];
