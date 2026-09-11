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
  teamSize?: string;
  duration?: string;
  highlights?: string[];
}

export interface EventStatItem {
  id: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  customText?: string;
  label: string;
}

export interface ParticipatingState {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
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
  participatingStatesTitle?: string;
  participatingStates?: ParticipatingState[];
  structure?: string[];
  structureTitle?: string;
  evaluation?: EvaluationParameter[];
  opportunities?: string[];
  departments?: DepartmentGroup[];
  scienceChallenges?: ScienceChallenge[];
  eventStatsTitle?: string;
  eventStats?: EventStatItem[];
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
    date: "07–08 OCTOBER 2026",
    fullDateSchedule: [
      "7 October 2026 (11:00 AM) — Hackathon Launch, Problem Statements Reveal & 30-Hour Coding Kickoff",
      "7 October 2026 (Overnight) — Continuous Architecture Development, Mentorship Rounds & Midnight Checkpoint",
      "8 October 2026 (05:00 PM) — Code Freeze, Prototype Demos, Grand Jury Evaluation & Awards Ceremony",
    ],
    duration: "30 Hours",
    venue: "Main Computing Hub & Applied Innovation Labs",
    theme: "Code. Create. Collaborate. Solve.",
    tagline: "30-HOUR INTENSIVE TECHNOLOGY & PROTOTYPE DEVELOPMENT SPRINT",
    description:
      "The Hackathon will provide an intensive 30-hour platform where interdisciplinary student teams work continuously on real-world challenges and develop technology-based solutions.",
    purpose: [
      "To provide an intensive 30-hour platform for interdisciplinary student teams to solve real-world problems.",
      "To transform concepts into functioning code, hardware, and deployed prototypes.",
      "To foster collaboration with industry mentors and technical domain experts.",
      "To encourage innovation in emerging technologies like AI, Robotics, IoT, Drones, and Cybersecurity.",
    ],
    prize: "Up to ₹2,00,000",
    teamSize: "4–6 Members",
    registerUrl: "https://forms.gle/CvYpny3YC5dpdYby7",
    accentColor: "crimson",
    badge: "FLAGSHIP HACKATHON",
    eventStatsTitle: "Previously Participants",
    eventStats: [
      { id: "stat-1", value: 500, suffix: "+", label: "PARTICIPANTS" },
      { id: "stat-2", value: 100, suffix: "+", label: "TEAMS" },
      { id: "stat-3", value: 16, suffix: "+", label: "OTHER STATES" },
    ],
    highlights: [
      "30 Hours Continuous Development Sprint",
      "Up to ₹2,00,000 Total Prize Pool",
      "7 Proposed Technology Tracks",
      "Industry Mentorship & Architecture Guidance",
      "Rigorous Multi-Tier Jury Evaluation",
    ],
    tracksTitle: "Proposed Technology Tracks",
    tracks: [
      "Infrastructure",
      "Clean and Green Technology",
      "Smart Agriculture",
      "Travel and Tourism",
      "Smart Healthcare",
      "AI or Cyber Security",
      "Open Theme",
    ],
    participatingStatesTitle: "Past Participating States",
    participatingStates: [
      {
        id: "state-1",
        description: "Uttarakhand",
        imageUrl: "https://travelogyindia.b-cdn.net/storage/app/upload/mountains-of-uttarakhand.jpg",
        imageHint: "uttarakhand mountains",
      },
      {
        id: "state-2",
        description: "Uttar Pradesh",
        imageUrl: "https://cdn.pixabay.com/photo/2022/06/13/21/06/taj-mahal-7260693_1280.jpg",
        imageHint: "taj mahal",
      },
      {
        id: "state-3",
        description: "Rajasthan",
        imageUrl: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg",
        imageHint: "hawa mahal",
      },
      {
        id: "state-4",
        description: "Delhi",
        imageUrl: "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg",
        imageHint: "delhi landmark",
      },
      {
        id: "state-5",
        description: "Madhya Pradesh",
        imageUrl: "https://cdn.pixabay.com/photo/2023/05/14/13/28/sanchi-7992913_960_720.jpg",
        imageHint: "sanchi stupa",
      },
      {
        id: "state-6",
        description: "Maharashtra",
        imageUrl: "https://cdn.pixabay.com/photo/2014/07/11/23/03/gateway-of-india-390768_1280.jpg",
        imageHint: "gateway india",
      },
      {
        id: "state-7",
        description: "Tamil Nadu",
        imageUrl: "https://thearchitectsdiary.com/wp-content/uploads/2023/11/Gopuram-12-jpg.webp",
        imageHint: "tamil temple",
      },
      {
        id: "state-8",
        description: "Kerala",
        imageUrl: "https://img.freepik.com/premium-photo/boat-with-houseboat-water-palm-trees-background_979520-96612.jpg?w=2000",
        imageHint: "kerala backwaters",
      },
      {
        id: "state-9",
        description: "Haryana",
        imageUrl: "https://cdn.pixabay.com/photo/2024/03/05/09/25/ai-generated-8614213_640.png",
        imageHint: "haryana fields",
      },
      {
        id: "state-10",
        description: "Bihar",
        imageUrl: "https://img.freepik.com/premium-photo/mahabodhi-temple-bodhgaya_78361-2548.jpg?w=2000",
        imageHint: "mahabodhi temple",
      },
      {
        id: "state-11",
        description: "Gujarat",
        imageUrl: "https://img.freepik.com/premium-photo/somnath-temple-facade-gujarat-stock-photo_911060-52643.jpg",
        imageHint: "somnath temple",
      },
      {
        id: "state-12",
        description: "Punjab",
        imageUrl: "https://img.freepik.com/premium-photo/golden-temple-punjab-sacred-sikh-shrine-stunningly-gilded-offering-sanctuary-spiritual_921026-36768.jpg?w=2000",
        imageHint: "golden temple",
      },
      {
        id: "state-13",
        description: "Andhra Pradesh",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP._5V-2uNBkX6KNchbWTuVuQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        imageHint: "andhra coast",
      },
      {
        id: "state-14",
        description: "Tripura",
        imageUrl: "https://img.freepik.com/premium-psd/tribal-thatched-house-isolated-transparent-background_220739-124149.jpg",
        imageHint: "tripura heritage",
      },
      {
        id: "state-15",
        description: "Chandigarh",
        imageUrl: "https://th.bing.com/th/id/R.cda8423a0911aa7275f5bef8ed6e33a9?rik=UTRDNpSAk70fIA&riu=http%3a%2f%2fwww.chandigarhcity.com%2fwp-content%2fuploads%2fsites%2f1%2fnggallery%2fopen-hand-monument%2f2.jpg&ehk=h5agGaWjSSnKA0fAozjhTXqozmv8C6M4ck9SEt3ODVQ%3d&risl=&pid=ImgRaw&r=0",
        imageHint: "chandigarh hand",
      },
      {
        id: "state-16",
        description: "Jammu and Kashmir",
        imageUrl: "https://img.freepik.com/premium-photo/boats-lake-with-mountains-background_865967-232355.jpg",
        imageHint: "kashmir lake",
      },
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
    date: "07 OCTOBER 2026",
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
    teamSize: "2–4 Members",
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
  // 04 — NEXT-GEN HACKATHON (Formerly Science Championship)
  // =========================================================================
  {
    id: "next-gen-hackathon",
    slug: "next-gen-hackathon",
    number: "04",
    name: "NEXT-GEN HACKATHON",
    category: "RAPID HACKATHON & BUILD",
    date: "10 OCTOBER 2026",
    fullDateSchedule: [
      "10 October 2026 — Next-Gen Innovation Challenges, Prototype Builds, Live Demos & Valedictory",
    ],
    duration: "Full-Day Hackathon & Build Challenges",
    venue: "Innovation Hub & Applied Research Arena / Exhibition Hall C",
    theme: "Rapid Prototyping, Discovery & Next-Gen Innovation",
    tagline: "RAPID PROTOTYPING, DISCOVERY & NEXT-GEN INNOVATION",
    description:
      "Explore next-gen innovation, rapid prototyping and scientific thinking through 4 competitive challenges: 2-Hour Innovation Hackathon, Science Exhibition, Idea Pitching (Mini Shark Tank), and 60-Minute Robotics Build Up.",
    purpose: [
      "To celebrate next-gen innovation, rapid prototyping, and practical experimentation.",
      "To host high-tempo rapid challenges alongside project exhibitions and prototype reviews.",
      "To test problem-solving, rapid robotics assembly, and venture-ready pitching.",
      "To inspire future engineers, inventors, and scientific minds.",
    ],
    prize: "₹20,000+",
    teamSize: "2–3 Members",
    registerUrl: "/register?event=next-gen-hackathon",
    accentColor: "purple",
    badge: "NEXT-GEN ARENA",
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
        duration: "120 Minutes (2 Hours)",
        teamSize: "2–4 Members",
        highlights: [
          "Real-World Problem Statements",
          "Rapid Working Software Deployment",
          "Live Jury Code Review & Scoring",
        ],
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
        duration: "Full-Day Exhibition",
        teamSize: "1–3 Members",
        highlights: [
          "Physical Working Models",
          "Eco-Tech & Applied Science Innovations",
          "Direct Defense to Visiting Scientist Panel",
        ],
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
        duration: "5m Pitch + 3m Q&A",
        teamSize: "1–3 Members",
        highlights: [
          "Investor & Mentor Shark Tank Jury",
          "Commercial Viability & Feasibility",
          "Seed Mentorship & Incubation Opportunities",
        ],
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
        duration: "60 Minutes (1 Hour)",
        teamSize: "2–4 Members",
        highlights: [
          "On-The-Spot Hardware Assembly",
          "Sensor Calibration & Wiring Under Clock",
          "Rough-Terrain Obstacle Arena Run",
        ],
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
  if (normalized === "science-championship" || normalized === "next-gen-hackathon") {
    return eventsList.find((e) => e.slug === "next-gen-hackathon" || e.slug === "science-championship");
  }

  return eventsList.find((e) => e.slug === normalized || e.id === normalized);
}

// =========================================================================
// DEPARTMENTAL TECHNICAL COMPETITIONS DIRECTORY
// =========================================================================
export interface DepartmentCompetitionDetail {
  title: string;
  department: string;
  badge: string;
  description: string;
  format: string;
  teamSize: string;
  duration: string;
  highlights: string[];
}

export const departmentCompetitionDetails: Record<string, DepartmentCompetitionDetail> = {
  // Mechanical Engineering
  "CAD Modelling Competition": {
    title: "CAD Modelling Competition",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Design high-precision 3D mechanical components and intricate assemblies under strict time constraints using SolidWorks, CATIA, or Creo.",
    format: "Timed 3D Modeling Round • Real-time Jury Inspection",
    teamSize: "Individual / 1–2 Members",
    duration: "2 Hours",
    highlights: ["Parametric Modeling", "Geometric Dimensioning & Tolerance (GD&T)", "Stress Analysis Check"],
  },
  "Robo Race": {
    title: "Robo Race",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Design, fabricate, and pilot wired or wireless rovers over an obstacle-laden rough-terrain track containing ramps, gravel pits, and hairpin bends.",
    format: "Time-Trial Obstacle Run • Multi-Stage Knockout",
    teamSize: "2–4 Members",
    duration: "1.5–2 Hours",
    highlights: ["Rough-Terrain Navigation", "Chassis Durability", "Controller Precision & Fastest Lap"],
  },
  "Design Challenge": {
    title: "Design Challenge",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Solve pressing industrial and thermal engineering challenges through rapid mechanism prototyping and creative functional design.",
    format: "Problem Statement Release • Design & Pitch",
    teamSize: "2–3 Members",
    duration: "3 Hours",
    highlights: ["Kinematic Feasibility", "Material Selection", "Cost Optimization & Innovation"],
  },
  "AutoCAD/SolidWorks Challenge": {
    title: "AutoCAD/SolidWorks Challenge",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Rapid drafting and 2D-to-3D transformation speed run testing mastery over shortcut macros, dimensional tolerances, and section views.",
    format: "On-the-spot Blueprint Drafting • Speed & Precision",
    teamSize: "Individual",
    duration: "90 Minutes",
    highlights: ["Orthographic Projections", "Assembly Drawing", "Drafting Code Compliance"],
  },
  "Bridge/Structure Design": {
    title: "Bridge/Structure Design",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Construct lightweight truss bridges using standardized wooden splints and adhesive, subjected to progressive destructive load-bearing tests.",
    format: "Hands-on Construction • Hydraulic Weight Destructive Test",
    teamSize: "2–4 Members",
    duration: "2.5 Hours",
    highlights: ["Truss Equilibrium", "Strength-to-Weight Ratio", "Failure Point Analysis"],
  },
  "Junkyard Innovation": {
    title: "Junkyard Innovation",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Engineer working mechanical machines or utilitarian tools utilizing exclusively scrap metal, discarded hardware, and salvaged vehicle components.",
    format: "Scrap Allocation • On-the-spot Fabrication & Demo",
    teamSize: "3–4 Members",
    duration: "3 Hours",
    highlights: ["Zero-Waste Engineering", "Mechanical Advantage", "Working Demonstration"],
  },
  "Mechanical Quiz": {
    title: "Mechanical Quiz",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Multi-round high-tempo buzzer quiz covering thermodynamics, fluid machinery, IC engines, materials science, and automotive breakthroughs.",
    format: "Preliminary Written Round • Final Stage Buzzer Round",
    teamSize: "2 Members",
    duration: "1 Hour",
    highlights: ["Rapid Mental Calculations", "Aviation & Automotive History", "Formula Blitz"],
  },
  "3D Design Challenge": {
    title: "3D Design Challenge",
    department: "Mechanical Engineering",
    badge: "MECHANICAL",
    description: "Additive manufacturing design sprint focusing on topology optimization, lattice infill structures, and 3D print readiness without support overhangs.",
    format: "Digital Slicing & Mesh Optimization Challenge",
    teamSize: "1–2 Members",
    duration: "2 Hours",
    highlights: ["Topology Optimization", "Slicing Simulation", "Additive Manufacturing Feasibility"],
  },

  // Civil Engineering
  "Model Making": {
    title: "Model Making",
    department: "Civil Engineering",
    badge: "CIVIL",
    description: "Showcase physical scale models of earthquake-resistant buildings, futuristic smart city junctions, green infrastructure, or rainwater harvesting networks.",
    format: "Scale Prototype Presentation • Faculty Evaluation",
    teamSize: "2–4 Members",
    duration: "Full-Day Expo",
    highlights: ["Sustainability Factor", "Architectural Precision", "Feasibility & Practicality"],
  },
  "Structural Design Challenge": {
    title: "Structural Design Challenge",
    department: "Civil Engineering",
    badge: "CIVIL",
    description: "Analyze and design multi-storey building frames capable of resisting lateral earthquake shear forces and wind loads using STAAD.Pro or ETABS.",
    format: "Software Simulation & Structural Calculations",
    teamSize: "2–3 Members",
    duration: "2 Hours",
    highlights: ["Bending Moment Analysis", "IS Code 456 / 1893 Standards", "Seismic Resistance"],
  },
  "AutoCAD Challenge": {
    title: "AutoCAD Challenge",
    department: "Civil Engineering",
    badge: "CIVIL",
    description: "Architectural blueprint challenge involving drafting residential or commercial floorplans, elevations, and structural detailing under strict time constraints.",
    format: "Timed Architectural Drafting • Code Compliance",
    teamSize: "Individual",
    duration: "2 Hours",
    highlights: ["Bylaw Compliance", "Layer Management & Detailing", "Speed & Accuracy"],
  },
  "Surveying Competition": {
    title: "Surveying Competition",
    department: "Civil Engineering",
    badge: "CIVIL",
    description: "Field surveying challenge requiring precise angle measurements, benchmark transfers, and closed traverse error adjustments using Total Stations and Auto-levels.",
    format: "Campus Field Run • Precision Leveling & Traversing",
    teamSize: "3–4 Members",
    duration: "2 Hours",
    highlights: ["Total Station Accuracy", "Reduced Level Calculations", "Minimal Permissible Error"],
  },
  "Bridge Design Competition": {
    title: "Bridge Design Competition",
    department: "Civil Engineering",
    badge: "CIVIL",
    description: "Design and build suspension or cable-stayed bridge models evaluated for structural integrity and maximum load carrying capacity.",
    format: "Model Construction • Progressive Weight Loading",
    teamSize: "2–4 Members",
    duration: "2.5 Hours",
    highlights: ["Tensile Cable Distribution", "Aesthetic Symmetry", "Load-to-Self-Weight Ratio"],
  },
  "Civil Engineering Quiz": {
    title: "Civil Engineering Quiz",
    department: "Civil Engineering",
    badge: "CIVIL",
    description: "Fast-paced quiz on soil mechanics, concrete technology, highway engineering, hydraulics, and iconic mega-structures of the world.",
    format: "Written Screening • Grand Stage Finals",
    teamSize: "2 Members",
    duration: "1 Hour",
    highlights: ["Mega Infrastructure Trivia", "Geotechnical Concepts", "Hydraulic Equations"],
  },

  // Computer Science / IT
  "Coding Competition": {
    title: "Coding Competition",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Competitive programming clash solving algorithmic puzzles covering dynamic programming, graph theory, strings, and data structures under strict time and memory limits.",
    format: "Online Automated Judge System • 5 Algorithmic Problems",
    teamSize: "Individual / 1–2 Members",
    duration: "2.5 Hours",
    highlights: ["Algorithm Efficiency", "Corner-Case Precision", "Live Dynamic Leaderboard"],
  },
  "Debugging Challenge": {
    title: "Debugging Challenge",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Identify, reproduce, and fix tricky logical bugs, race conditions, memory leaks, and compilation errors across obfuscated codebases.",
    format: "Time-Attack Bug Bounty • C++, Java, Python Codebases",
    teamSize: "Individual / Duo",
    duration: "90 Minutes",
    highlights: ["Log Analysis", "Zero Regression Fixes", "Rapid Problem Identification"],
  },
  "Web Development Challenge": {
    title: "Web Development Challenge",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Build and deploy a responsive, visually stunning web application adhering to a surprise theme revealed at competition kickoff.",
    format: "Live Coding Sprint • Prototype Deployment",
    teamSize: "1–3 Members",
    duration: "3 Hours",
    highlights: ["Modern Responsive UI", "API Integration", "Clean Architecture & Performance"],
  },
  "Cybersecurity Challenge": {
    title: "Cybersecurity Challenge",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Jeopardy-style Capture The Flag (CTF) tournament covering web security, reverse engineering, cryptography, binary exploitation, and digital forensics.",
    format: "CTF Platform • Point-based Flag Capture",
    teamSize: "1–3 Members",
    duration: "3 Hours",
    highlights: ["Cryptographic Decoding", "Exploit Chaining", "Real-Time Defense & Attack"],
  },
  "AI/ML Challenge": {
    title: "AI/ML Challenge",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Given a noisy real-world dataset, engineer features, select model architectures, and optimize F1-score / accuracy benchmarks on hidden test sets.",
    format: "Kaggle-style Leaderboard Challenge • Jupyter Notebook",
    teamSize: "2–3 Members",
    duration: "3 Hours",
    highlights: ["Feature Engineering", "Ensemble Modeling", "Metric Optimization"],
  },
  "UI/UX Challenge": {
    title: "UI/UX Challenge",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Design intuitive user journeys, high-fidelity Figma components, and smooth interactive prototypes solving complex usability friction points.",
    format: "Design Prompt Release • Figma Prototype Demo",
    teamSize: "1–2 Members",
    duration: "2 Hours",
    highlights: ["User Persona Empathy", "Design System Cohesion", "Micro-Interactions"],
  },
  "Tech Quiz": {
    title: "Tech Quiz",
    department: "Computer Science / IT",
    badge: "CSE / IT",
    description: "Trivia contest exploring Silicon Valley history, open-source revolutions, breakthrough algorithms, operating systems, and developer culture.",
    format: "Buzzer Rounds • Visual Connect • Audio-Visual Questions",
    teamSize: "2 Members",
    duration: "1 Hour",
    highlights: ["Tech History & Lore", "Acronym Blitz", "Code Snippet Identification"],
  },

  // Electronics & Communication
  "Circuit Designing": {
    title: "Circuit Designing",
    department: "Electronics & Communication",
    badge: "ECE",
    description: "Synthesize, simulate on SPICE, and wire working electronic circuits on breadboards meeting rigorous voltage, current, and frequency specifications.",
    format: "Schematic Analysis • Hardware Breadboarding & CRO Testing",
    teamSize: "2 Members",
    duration: "2 Hours",
    highlights: ["Analog & Digital ICs", "Signal Clarity on Oscilloscope", "Minimal Component Usage"],
  },
  "Line Following Robot": {
    title: "Line Following Robot",
    department: "Electronics & Communication",
    badge: "ECE",
    description: "Construct autonomous differential-drive bots using IR sensor arrays and tuned PID control algorithms to traverse curves, 90-degree turns, and track grids.",
    format: "Time-Trial Course Run • Penalty for Track Deviations",
    teamSize: "2–4 Members",
    duration: "2 Hours",
    highlights: ["PID Tuning Precision", "Sensor Calibration", "Fastest Lap Without Loss of Line"],
  },
  "Embedded Systems Challenge": {
    title: "Embedded Systems Challenge",
    department: "Electronics & Communication",
    badge: "ECE",
    description: "Program microcontrollers (STM32, ESP32, Arduino) to interface with complex peripheral sensors, interrupt routines, and communication buses (SPI/I2C/UART).",
    format: "Hardware Interfacing Problem • Real-time Code Execution",
    teamSize: "2–3 Members",
    duration: "2.5 Hours",
    highlights: ["Interrupt Handling", "I2C/SPI Sensor Integration", "Power Efficiency"],
  },
  "IoT Challenge": {
    title: "IoT Challenge",
    department: "Electronics & Communication",
    badge: "ECE",
    description: "Develop an end-to-end connected IoT ecosystem that captures environmental sensor data, transmits via MQTT/HTTP, and triggers automated cloud events.",
    format: "Live Hardware-to-Cloud Integration • Prototype Pitch",
    teamSize: "2–3 Members",
    duration: "3 Hours",
    highlights: ["Cloud Dashboard Deployment", "Actuator Triggering", "Network Fault Tolerance"],
  },
  "Electronics Quiz": {
    title: "Electronics Quiz",
    department: "Electronics & Communication",
    badge: "ECE",
    description: "Buzzer clash on semiconductor physics, RF communication, antenna theory, VLSI fabrication steps, and modern digital signal processors.",
    format: "Speed Buzzer Rounds • Circuit Blueprint Round",
    teamSize: "2 Members",
    duration: "1 Hour",
    highlights: ["VLSI Fundamentals", "RF Propagation Trivia", "Waveform Identification"],
  },
  "Automation Challenge": {
    title: "Automation Challenge",
    department: "Electronics & Communication",
    badge: "ECE",
    description: "Program PLCs, relay logic, and pneumatic cylinders to simulate automated sorting, packaging, or robotic pick-and-place assembly lines.",
    format: "Ladder Logic Simulation & Hardware Actuation",
    teamSize: "2–3 Members",
    duration: "2 Hours",
    highlights: ["Ladder Logic Programming", "Safety Interlocks", "Cycle Time Minimization"],
  },

  // Management
  "Business Plan Competition": {
    title: "Business Plan Competition",
    department: "Management",
    badge: "MANAGEMENT",
    description: "Pitch scalable commercial business plans with clear addressable market calculations, unit economics, customer acquisition funnels, and revenue projections.",
    format: "Pitch Deck Presentation (7m) + Investor Q&A (3m)",
    teamSize: "2–4 Members",
    duration: "2.5 Hours",
    highlights: ["Unit Economics & TAM", "Go-To-Market Execution", "Defensibility & Moat"],
  },
  "Marketing Challenge": {
    title: "Marketing Challenge",
    department: "Management",
    badge: "MANAGEMENT",
    description: "Devise disruptive omnichannel marketing campaigns, guerrilla marketing stunts, and social media growth loops for a surprise product category.",
    format: "Case Prompt • Campaign Strategy Deck & Creative Assets",
    teamSize: "2–3 Members",
    duration: "2 Hours",
    highlights: ["Viral Hook Crafting", "Budget Allocation", "ROI & Conversion Metrics"],
  },
  "Business Quiz": {
    title: "Business Quiz",
    department: "Management",
    badge: "MANAGEMENT",
    description: "High-voltage corporate quiz testing acumen in international trade, brand logos, corporate mergers, fintech innovations, and market titans.",
    format: "Preliminary Elimination • Live Stage Audio-Visual Finale",
    teamSize: "2 Members",
    duration: "1 Hour",
    highlights: ["Brand Mascot ID", "Economic Policies", "Wall Street & Dalal Street History"],
  },
  "Case Study Competition": {
    title: "Case Study Competition",
    department: "Management",
    badge: "MANAGEMENT",
    description: "Deep-dive into Harvard/IIM style business dilemmas to formulate actionable corporate restructuring, ethical navigation, and supply chain turnaround blueprints.",
    format: "Case Study Dissection • Boardroom Presentation",
    teamSize: "2–3 Members",
    duration: "2.5 Hours",
    highlights: ["SWOT & Porter's 5 Forces", "Financial Feasibility", "Crisis Management Strategy"],
  },
  "Ad-Mad Show": {
    title: "Ad-Mad Show",
    department: "Management",
    badge: "MANAGEMENT",
    description: "Bring humor, theatrical flair, and sharp advertising hooks to the stage by creating and acting out live commercials for bizarre, fictional products.",
    format: "Stage Commercial Performance (3–4 mins) • Live Audience & Jury",
    teamSize: "3–5 Members",
    duration: "1.5 Hours",
    highlights: ["Jingle & Slogan Wit", "Stage Presence", "Persuasive Selling Proposition"],
  },
  "Financial Simulation": {
    title: "Financial Simulation",
    department: "Management",
    badge: "MANAGEMENT",
    description: "Compete in a simulated fast-paced stock market environment navigating breaking macroeconomic news, interest rate spikes, earnings reports, and volatility.",
    format: "Real-time Trading Simulation Terminal • Portfolio Optimization",
    teamSize: "1–2 Members",
    duration: "2 Hours",
    highlights: ["Risk Management", "Alpha Generation", "Highest Net Portfolio Value"],
  },

  // General / Interdisciplinary Events
  "Photography": {
    title: "Photography",
    department: "General / Interdisciplinary Events",
    badge: "INTERDISCIPLINARY",
    description: "Capture candid festival moments, high-tech installations, human expressions, and dynamic engineering energy across the Shivalik campus.",
    format: "Theme Release • Campus Field Shoot • Portfolio Submission",
    teamSize: "Individual",
    duration: "Full Festival Day",
    highlights: ["Visual Composition", "Color Grading & Lighting", "Storytelling Impact"],
  },
  "Reel/Short Video Challenge": {
    title: "Reel/Short Video Challenge",
    department: "General / Interdisciplinary Events",
    badge: "INTERDISCIPLINARY",
    description: "Shoot, edit, and score high-energy short-form video reels capturing the excitement, buzz, and innovation of SHIVATECH 2026.",
    format: "Theme-based Video Production • Vertical Video Format (9:16)",
    teamSize: "1–2 Members",
    duration: "Festival Day Submission",
    highlights: ["Dynamic Pacing & Beats", "Viral Engagement Potential", "Creative Sound Design"],
  },
  "Innovation Poster Competition": {
    title: "Innovation Poster Competition",
    department: "General / Interdisciplinary Events",
    badge: "INTERDISCIPLINARY",
    description: "Present visually compelling academic research and invention posters explaining novel technological concepts, patents, or sustainability solutions.",
    format: "Printed A1 Poster Display • Expert Jury Walkthrough",
    teamSize: "1–3 Members",
    duration: "2 Hours",
    highlights: ["Research Methodology", "Visual Clarity & Infographics", "Oral Defense to Jury"],
  },
  "Technical Treasure Hunt": {
    title: "Technical Treasure Hunt",
    department: "General / Interdisciplinary Events",
    badge: "INTERDISCIPLINARY",
    description: "Campus-wide adventure requiring teams to solve cryptographic ciphers, logic puzzles, binary clues, and electronic hints to discover hidden checkpoints.",
    format: "Multi-Clue Campus Race • Checkpoint Verification",
    teamSize: "3–4 Members",
    duration: "2 Hours",
    highlights: ["Cipher Cracking", "Campus Exploration", "Teamwork Under Time Pressure"],
  },
  "Gaming/E-Sports": {
    title: "Gaming/E-Sports",
    department: "General / Interdisciplinary Events",
    badge: "INTERDISCIPLINARY",
    description: "Electrifying LAN tournament in top esports titles featuring bracket knockout stages, live casting, and intense competitive team strategy.",
    format: "Knockout Bracket • Best of 3 Semi-Finals & Finals",
    teamSize: "Squad / 4–5 Members",
    duration: "Multi-Stage Tournament",
    highlights: ["Tactical Strategy", "Split-Second Reflexes", "Live Stream Casting & Cheers"],
  },
  "Project Exhibition": {
    title: "Project Exhibition",
    department: "General / Interdisciplinary Events",
    badge: "INTERDISCIPLINARY",
    description: "Grand showcase where multidisciplinary student innovators demonstrate functioning capstone projects, patented inventions, and applied prototypes.",
    format: "Live Booth Demos • Delegation & Industry Walkthrough",
    teamSize: "2–4 Members",
    duration: "Full-Day Exhibition",
    highlights: ["Working Hardware Prototypes", "Commercial Viability", "Industry Mentor Feedback"],
  },
};

export function getDepartmentCompetitionDetail(
  departmentName: string,
  eventName: string,
  badge: string = "TECHNICAL"
): DepartmentCompetitionDetail {
  if (departmentCompetitionDetails[eventName]) {
    return departmentCompetitionDetails[eventName];
  }

  // Fallback generation for any custom or new event
  return {
    title: eventName,
    department: departmentName,
    badge,
    description: `Official departmental technical competition organized by ${departmentName}. Participants will compete against top collegiate peers in problem-solving, design, and practical execution.`,
    format: "Live Departmental Competition • Faculty & Expert Jury Evaluation",
    teamSize: "Individual / Teams (1–4)",
    duration: "2–3 Hours",
    highlights: ["Hands-On Practical Evaluation", "Certificates & Cash Awards", "Departmental Recognition"],
  };
}

