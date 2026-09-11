export interface EvaluationParameter {
  parameter: string;
  weightage: string;
  percentage: number;
}

export interface DepartmentGroup {
  department: string;
  icon: string;
  badge: string;
  events: string[];
}

export interface ScienceChallenge {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  format: string;
  icon: string;
}

export interface EventItem {
  id: string; // Slug & unique ID
  slug: string;
  number: string;
  name: string;
  category: string;
  date: string;
  fullDateSchedule?: string[];
  duration?: string;
  venue: string;
  theme?: string;
  tagline: string;
  description: string;
  purpose?: string[];
  prize?: string;
  teamSize?: string;
  registerUrl: string;
  accentColor: "crimson" | "blue" | "emerald" | "purple";
  badge?: string;
  highlights: string[];
  // Event-specific structured details from PDF
  tracks?: string[];
  tracksTitle?: string;
  structure?: string[];
  structureTitle?: string;
  evaluation?: EvaluationParameter[];
  opportunities?: string[];
  departments?: DepartmentGroup[];
  scienceChallenges?: ScienceChallenge[];
}

export const eventsList: EventItem[] = [
  // =========================================================================
  // 01 — HACKNATION 2.0 (Source: PDF Section 4.3 & 6 - Hackathon)
  // =========================================================================
  {
    id: "hacknation-2-0",
    slug: "hacknation-2-0",
    number: "01",
    name: "HACKNATION 2.0",
    category: "HACKATHON",
    date: "07–09 OCTOBER 2026",
    fullDateSchedule: [
      "7 October 2026 — Hackathon Launch, Problem Statements, Team Formation & Mentoring",
      "8 October 2026 — Hackathon Development & Continuous Mentoring",
      "9 October 2026 — Final Presentation, Prototype Demos, Awards & Valedictory",
    ],
    duration: "24–36 Hours (Proposed)",
    venue: "Main Computing Hub & Applied Innovation Labs",
    theme: "Code. Create. Collaborate. Solve.",
    tagline: "INTENSIVE TECHNOLOGY & PROTOTYPE DEVELOPMENT SPRINT",
    description:
      "The Hackathon will provide an intensive platform where interdisciplinary student teams work continuously on real-world challenges and develop technology-based solutions.",
    purpose: [
      "To provide an intensive platform for interdisciplinary student teams to solve real-world problems.",
      "To transform concepts into functioning code, hardware, and prototypes.",
      "To foster collaboration with industry mentors and technical domain experts.",
      "To encourage innovation in emerging technologies like AI, Robotics, IoT, Drones, and Cybersecurity.",
    ],
    prize: "₹60,000+",
    teamSize: "2–4 Members",
    registerUrl: "/register?event=hacknation-2-0",
    accentColor: "crimson",
    badge: "FLAGSHIP HACKATHON",
    highlights: [
      "24–36 Hours Continuous Development",
      "12 Comprehensive Technology Tracks",
      "Industry Mentorship & Architecture Guidance",
      "Rigorous Multi-Tier Jury Evaluation",
    ],
    tracksTitle: "Proposed Technology Tracks",
    tracks: [
      "AI & Machine Learning",
      "Web & Mobile Applications",
      "Cybersecurity",
      "IoT & Embedded Systems",
      "Robotics & Automation",
      "Drone Technology",
      "Smart Campus",
      "Sustainable Technology",
      "Healthcare Technology",
      "FinTech",
      "AgriTech",
      "Assistive Technology",
    ],
    structureTitle: "Hackathon Execution Structure",
    structure: [
      "Problem Statements",
      "Team Formation",
      "Mentoring",
      "Development",
      "Prototype",
      "Demo",
      "Jury Evaluation",
      "Final Pitch",
    ],
    evaluation: [
      {
        parameter: "Technical Implementation",
        weightage: "25%",
        percentage: 25,
      },
      {
        parameter: "Innovation & Originality",
        weightage: "20%",
        percentage: 20,
      },
      {
        parameter: "Problem Relevance",
        weightage: "15%",
        percentage: 15,
      },
      {
        parameter: "Feasibility & Scalability",
        weightage: "15%",
        percentage: 15,
      },
      {
        parameter: "User Impact",
        weightage: "15%",
        percentage: 15,
      },
      {
        parameter: "Presentation & Pitch",
        weightage: "10%",
        percentage: 10,
      },
    ],
  },

  // =========================================================================
  // 02 — IDEATHON (Source: PDF Section 4.2 & 5 - Ideathon)
  // =========================================================================
  {
    id: "ideathon",
    slug: "ideathon",
    number: "02",
    name: "IDEATHON",
    category: "INNOVATION & ENTREPRENEURSHIP",
    date: "06 OCTOBER 2026",
    fullDateSchedule: [
      "6 October 2026 — Idea Presentations, Pitching Sessions, Expert Evaluation & Workshops",
    ],
    duration: "Full-Day Innovation Sprint",
    venue: "Executive Conference Hall & CBII Innovation Suite",
    theme: "Innovate for a Better Tomorrow",
    tagline: "IDENTIFY REAL-WORLD PROBLEMS & DEVELOP INNOVATIVE SOLUTIONS",
    description:
      "The Ideathon will challenge students to identify real-world problems and develop innovative solutions across multidisciplinary domains.",
    purpose: [
      "To challenge students to uncover pressing societal and industrial bottlenecks.",
      "To cultivate design thinking, problem-solving, and entrepreneurial mindsets.",
      "To connect student innovators directly with CBII incubation, seed funding, and mentors.",
      "To prepare student ventures for national-level innovation competitions.",
    ],
    prize: "₹30,000+",
    teamSize: "1–3 Members",
    registerUrl: "/register?event=ideathon",
    accentColor: "blue",
    badge: "INCUBATION PIPELINE",
    highlights: [
      "18 Suggested Problem Domains",
      "7-Stage Idea-to-Incubation Pipeline",
      "CBII Incubation & Mentorship Opportunities",
      "Seed Funding & Prototype Development Support",
    ],
    tracksTitle: "Suggested Problem Domains",
    tracks: [
      "Artificial Intelligence & Machine Learning",
      "Sustainable Development",
      "Smart Campus",
      "Smart Agriculture",
      "Healthcare Technology",
      "Clean Energy",
      "Electric Mobility",
      "Rural Innovation",
      "FinTech",
      "EdTech",
      "Assistive Technology",
      "Women & Child Safety",
      "Defence & Security",
      "Waste Management",
      "Water Management",
      "Climate & Environment",
      "Smart Cities",
      "Industry 4.0",
    ],
    structureTitle: "Proposed Ideathon Format",
    structure: [
      "Stage 1: Idea Registration",
      "Stage 2: Problem Statement Submission",
      "Stage 3: Idea Screening",
      "Stage 4: Idea Presentation",
      "Stage 5: Expert Evaluation",
      "Stage 6: Final Pitch",
      "Stage 7: Awards / Incubation / Mentorship",
    ],
    opportunities: [
      "CBII incubation at Shivalik University",
      "Dedicated one-on-one mentorship with industry founders",
      "Prototype development support & lab access",
      "Seed funding opportunities & investor connections",
      "Direct industry connect with corporate partners",
      "Further participation in national-level innovation challenges",
    ],
  },

  // =========================================================================
  // 03 — DEPARTMENTAL TECHNICAL EVENTS (Source: PDF Section 4.4 & 7)
  // =========================================================================
  {
    id: "departmental-technical-events",
    slug: "departmental-technical-events",
    number: "03",
    name: "DEPARTMENTAL TECHNICAL EVENTS",
    category: "TECHNICAL COMPETITIONS",
    date: "06 & 08 OCTOBER 2026",
    fullDateSchedule: [
      "6 October 2026 — Technical Competitions, Departmental Workshops & Expert Sessions",
      "8 October 2026 — Departmental Technical Events, Project Demonstrations & Challenges",
    ],
    duration: "Multi-Day Departmental Championships",
    venue: "Academic Department Complexes & Engineering Arenas",
    theme: "Engineering Excellence & Applied Practical Skills",
    tagline: "DEPARTMENT-WISE DEDICATED TECHNICAL COMPETITIONS",
    description:
      "Each academic department will organise dedicated technical competitions and activities to ensure broad student participation.",
    purpose: [
      "To ensure broad, hands-on student participation across all academic departments.",
      "To test practical engineering, design, analysis, and implementation skills.",
      "To showcase specialized departmental talent in robotics, coding, structural design, and business strategy.",
      "To provide interdisciplinary exposure through cross-department challenges and technical quizzes.",
    ],
    prize: "₹50,000+",
    teamSize: "Individual & Teams",
    registerUrl: "/register?event=departmental-technical-events",
    accentColor: "emerald",
    badge: "MULTI-DEPARTMENT EXPO",
    highlights: [
      "6 Academic Department Streams",
      "40+ Specialized Technical Competitions",
      "CAD, Robotics, Coding, Structures & Business",
      "Hands-On Engineering & Interdisciplinary Showdowns",
    ],
    departments: [
      {
        department: "Mechanical Engineering",
        icon: "⚙️",
        badge: "MECHANICAL",
        events: [
          "CAD Modelling Competition",
          "Robo Race",
          "Design Challenge",
          "AutoCAD/SolidWorks Challenge",
          "Bridge/Structure Design",
          "Junkyard Innovation",
          "Mechanical Quiz",
          "3D Design Challenge",
        ],
      },
      {
        department: "Civil Engineering",
        icon: "🏗️",
        badge: "CIVIL",
        events: [
          "Model Making",
          "Structural Design Challenge",
          "AutoCAD Challenge",
          "Surveying Competition",
          "Bridge Design Competition",
          "Civil Engineering Quiz",
        ],
      },
      {
        department: "Computer Science / IT",
        icon: "💻",
        badge: "CSE / IT",
        events: [
          "Coding Competition",
          "Debugging Challenge",
          "Web Development Challenge",
          "Cybersecurity Challenge",
          "AI/ML Challenge",
          "UI/UX Challenge",
          "Tech Quiz",
        ],
      },
      {
        department: "Electronics & Communication",
        icon: "📡",
        badge: "ECE",
        events: [
          "Circuit Designing",
          "Line Following Robot",
          "Embedded Systems Challenge",
          "IoT Challenge",
          "Electronics Quiz",
          "Automation Challenge",
        ],
      },
      {
        department: "Management",
        icon: "📊",
        badge: "MANAGEMENT",
        events: [
          "Business Plan Competition",
          "Marketing Challenge",
          "Business Quiz",
          "Case Study Competition",
          "Ad-Mad Show",
          "Financial Simulation",
        ],
      },
      {
        department: "General / Interdisciplinary Events",
        icon: "🌐",
        badge: "INTERDISCIPLINARY",
        events: [
          "Tech Quiz",
          "Photography",
          "Reel/Short Video Challenge",
          "Innovation Poster Competition",
          "Technical Treasure Hunt",
          "Gaming/E-Sports",
          "Project Exhibition",
        ],
      },
    ],
  },

  // =========================================================================
  // 04 — SCIENCE CHAMPIONSHIP (Preserved verified existing project data)
  // =========================================================================
  {
    id: "science-championship",
    slug: "science-championship",
    number: "04",
    name: "SCIENCE CHAMPIONSHIP",
    category: "SCIENCE & DISCOVERY",
    date: "10 OCTOBER 2026",
    fullDateSchedule: [
      "10 October 2026 — Science Prototypes, Innovation Challenges, Live Demos & Valedictory",
    ],
    duration: "Full-Day Science Showdown",
    venue: "Science & Applied Research Arena / Exhibition Hall C",
    theme: "Discovery, Experimentation & Scientific Thinking",
    tagline: "DISCOVERY, EXPERIMENTATION & SCIENTIFIC THINKING",
    description:
      "Explore scientific thinking, experimentation and innovation through 4 competitive challenges: 2-Hour Innovation Hackathon, Science Exhibition, Idea Pitching (Mini Shark Tank), and 60-Minute Robotics Build Up.",
    purpose: [
      "To celebrate scientific inquiry, reasoning, and practical experimentation.",
      "To host high-tempo rapid challenges alongside project exhibitions and prototype reviews.",
      "To test problem-solving, rapid robotics assembly, and venture-ready pitching.",
      "To inspire future researchers, inventors, and scientific minds.",
    ],
    prize: "₹20,000+",
    teamSize: "2–3 Members",
    registerUrl: "/register?event=science-championship",
    accentColor: "purple",
    badge: "DISCOVERY ARENA",
    highlights: [
      "2-Hour Innovation Challenge (Hackathon)",
      "Science Exhibition (Working Models & Prototypes)",
      "Idea Pitching (Mini Shark Tank)",
      "60-Minute Build Up (Robotics Challenge, etc.)",
    ],
    scienceChallenges: [
      {
        id: "hackathon",
        number: "01",
        title: "2 Hour Innovation Challenge",
        subtitle: "(Hackathon)",
        tag: "RAPID SPRINT",
        description:
          "High-speed 120-minute rapid prototyping and problem-solving hackathon. Teams design and deploy working software prototypes under extreme time pressure.",
        format: "120 Min Sprint • Team 2–4 • Live Evaluation",
        icon: "⚡",
      },
      {
        id: "exhibition",
        number: "02",
        title: "Science Exhibition",
        subtitle: "(Working Models & Prototypes)",
        tag: "LIVE EXPO",
        description:
          "Showcase working scientific models, eco-tech apparatus, physics demonstrations, and research innovations judged by distinguished scientists and faculty panels.",
        format: "Exhibition Arena • Live Demos",
        icon: "🔬",
      },
      {
        id: "pitching",
        number: "03",
        title: "Idea Pitching",
        subtitle: "(Mini Shark Tank)",
        tag: "VENTURE PITCH",
        description:
          "Pitch groundbreaking scientific and technology startup concepts to a live panel of investor judges and mentors. Defend your technical feasibility and business vision.",
        format: "5m Pitch + 3m Q&A • Slide Deck",
        icon: "💡",
      },
      {
        id: "robotics",
        number: "04",
        title: "60 Minute Build Up",
        subtitle: "(Robotics Challenge, etc.)",
        tag: "HARDWARE ARENA",
        description:
          "An on-the-spot hardware engineering and robotics showdown. Assemble, wire, and calibrate your robotic machine in exactly 60 minutes, then navigate the obstacle arena.",
        format: "60-Min Build • Obstacle Arena",
        icon: "🤖",
      },
    ],
  },
];

/**
 * Helper to look up an event by slug (or legacy ID aliases)
 */
export function getEventBySlug(slug: string): EventItem | undefined {
  const normalized = slug.toLowerCase().trim();

  // Backward compatibility aliases
  if (normalized === "hacknation-2" || normalized === "hacknation-2-0") {
    return eventsList.find((e) => e.slug === "hacknation-2-0");
  }
  if (normalized === "shivatech") {
    return eventsList.find((e) => e.slug === "departmental-technical-events");
  }

  return eventsList.find((e) => e.slug === normalized || e.id === normalized);
}
