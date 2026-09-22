export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface FAQEventSection {
  id: string;
  number: string;
  name: string;
  filterLabel: string;
  tagline: string;
  badge: string;
  accent: "crimson" | "blue" | "emerald" | "purple" | "cyan";
  detailRoute: string;
  faqs: FAQItem[];
}

export const faqEventsData: FAQEventSection[] = [
  // =========================================================================
  // 01 — HACKNATION 2.0
  // =========================================================================
  {
    id: "hacknation-2-0",
    number: "01",
    name: "HACKNATION 2.0",
    filterLabel: "HACKNATION 2.0",
    tagline: "30-HOUR INTENSIVE DEVELOPMENT & PROTOTYPING SPRINT",
    badge: "FLAGSHIP HACKATHON",
    accent: "crimson",
    detailRoute: "/events/hacknation-2-0",
    faqs: [
      {
        id: "hn-1",
        number: "01",
        question: "What is HACKNATION 2.0?",
        answer:
          "HACKNATION 2.0 is SHIVA INNOVEX's flagship 30-hour continuous software and hardware hackathon. Interdisciplinary student teams collaborate overnight to transform problem statements into functioning code, hardware integrations, and deployed technological prototypes.",
        highlight: "30-Hour Continuous Sprint",
      },
      {
        id: "hn-2",
        number: "02",
        question: "Who can participate in HACKNATION 2.0?",
        answer:
          "The hackathon is open to students currently enrolled in undergraduate, postgraduate, and diploma programs across colleges and universities nationwide. Teams can be interdisciplinary, combining designers, coders, and hardware engineers.",
        highlight: "All University & College Students",
      },
      {
        id: "hn-3",
        number: "03",
        question: "What is the registration fee for HACKNATION 2.0?",
        answer:
          "The registration fee for HACKNATION 2.0 is ₹250 / MEMBER. Please note that this fee is per individual member, not per team.",
        highlight: "₹250 / MEMBER",
      },
      {
        id: "hn-4",
        number: "04",
        question: "How many members can participate in a team?",
        answer:
          "Each team must consist of 4 to 6 members. Cross-department and interdisciplinary team formations are highly encouraged to tackle comprehensive software and hardware challenges.",
        highlight: "4–6 Members per Team",
      },
      {
        id: "hn-5",
        number: "05",
        question: "What are the prizes and rewards for HACKNATION 2.0?",
        answer:
          "HACKNATION 2.0 features an attractive total prize pool of Up to ₹2,00,000 across multiple technology tracks, along with winner trophies, certificates of excellence, and direct access to industry mentorship networks.",
        highlight: "Up to ₹2,00,000 Prize Pool",
      },
      {
        id: "hn-6",
        number: "06",
        question: "What are the important dates and venue for HACKNATION 2.0?",
        answer:
          "HACKNATION 2.0 will take place on 07–08 October 2026 at C-Block, Shivalik University. The 30-hour development kickoff begins on 7 October at 11:00 AM, continuing through the night until prototype evaluations on the evening of 8 October.",
        highlight: "07–08 October 2026 • C-Block",
      },
      {
        id: "hn-7",
        number: "07",
        question: "How can our team register for HACKNATION 2.0?",
        answer:
          "Official registrations are submitted through the official HACKNATION 2.0 Google Form, accessible directly from the HACKNATION 2.0 event details page.",
        highlight: "Official Google Form",
      },
    ],
  },

  // =========================================================================
  // 02 — IDEATHON
  // =========================================================================
  {
    id: "ideathon",
    number: "02",
    name: "IDEATHON",
    filterLabel: "IDEATHON",
    tagline: "IDENTIFY REAL-WORLD PROBLEMS & DEVELOP INNOVATIVE SOLUTIONS",
    badge: "INCUBATION & PITCH SPRINT",
    accent: "blue",
    detailRoute: "/events/ideathon",
    faqs: [
      {
        id: "id-1",
        number: "01",
        question: "What is IDEATHON?",
        answer:
          "IDEATHON is a premier innovation and entrepreneurship pitching sprint. It challenges student innovators to identify acute societal and industrial bottlenecks and propose sustainable, viable technology-driven solutions.",
        highlight: "Idea-to-Incubation Sprint",
      },
      {
        id: "id-2",
        number: "02",
        question: "Who is eligible to participate in IDEATHON?",
        answer:
          "Students across all engineering, sciences, commerce, design, and management disciplines can participate. Anyone with an innovative concept, proof of concept, or viable business model is encouraged to apply.",
        highlight: "Multidisciplinary Student Innovators",
      },
      {
        id: "id-3",
        number: "03",
        question: "What is the team size for IDEATHON?",
        answer:
          "Teams must comprise 2 to 4 members. Diverse teams with complementary problem-solving, technical, and business presentation skills are strongly advised.",
        highlight: "2–4 Members",
      },
      {
        id: "id-4",
        number: "04",
        question: "What are the prizes and incubation opportunities?",
        answer:
          "Winning teams compete for funding prizes Upto 10 Lakh, and more importantly, gain direct fast-track incubation support with CBII (Centre for Business Innovation & Incubation) at Shivalik University, including seed funding pipelines and founder mentorship.",
        highlight: "Upto 10 Lakh Funding & CBII Incubation",
      },
      {
        id: "id-5",
        number: "05",
        question: "When and where is IDEATHON conducted?",
        answer:
          "IDEATHON takes place on 07–08 October 2026 at the Conference Room, CBII, Shivalik University.",
        highlight: "07–08 October 2026 • CBII Conference Room",
      },
      {
        id: "id-6",
        number: "06",
        question: "How do teams register for IDEATHON?",
        answer:
          "Registration is handled online via the dedicated IDEATHON Google Form linked directly on the official IDEATHON event detail page.",
        highlight: "Direct Online Registration",
      },
    ],
  },

  // =========================================================================
  // 03 — DEPARTMENTAL TECHNICAL EVENTS
  // =========================================================================
  {
    id: "departmental-technical-events",
    number: "03",
    name: "DEPARTMENTAL TECHNICAL EVENTS",
    filterLabel: "DEPARTMENTAL TECHNICAL EVENTS",
    tagline: "DEPARTMENT-WISE DEDICATED TECHNICAL COMPETITIONS",
    badge: "MULTI-DEPARTMENT EXPO",
    accent: "emerald",
    detailRoute: "/events/departmental-technical-events",
    faqs: [
      {
        id: "dept-1",
        number: "01",
        question: "What are the DEPARTMENTAL TECHNICAL EVENTS?",
        answer:
          "DEPARTMENTAL TECHNICAL EVENTS is an expansive multi-department competition featuring 40+ specialized engineering and technical challenges organized across six academic departments at Shivalik University.",
        highlight: "40+ Specialized Challenges",
      },
      {
        id: "dept-2",
        number: "02",
        question: "Which academic departments are hosting technical competitions?",
        answer:
          "Events are organized across six key streams: Mechanical Engineering, Civil Engineering, Computer Science / IT, Electronics & Communication (ECE), Management, and Applied Sciences / Student Clubs.",
        highlight: "6 Academic Streams",
      },
      {
        id: "dept-3",
        number: "03",
        question: "What types of competitions are included?",
        answer:
          "Challenges include CAD 3D Modelling, Circuit Designing, Debugging, Web & Cybersecurity Challenges, Structural Bridge Design, Line Following Bots, Junkyard Innovation, Business Plan Pitches, and Technical Quizzes.",
        highlight: "Coding, CAD, Circuits & Structures",
      },
      {
        id: "dept-4",
        number: "04",
        question: "Who can participate in these departmental events?",
        answer:
          "All diploma, undergraduate, and postgraduate students from engineering and management institutions can register for events matching their stream or participate in open interdisciplinary challenges.",
        highlight: "Open to All Technical Students",
      },
      {
        id: "dept-5",
        number: "05",
        question: "What are the team size requirements?",
        answer:
          "Team structures vary according to individual challenges: several coding and CAD contests are for solo participants, while robotics, structural build, and business plan events welcome teams of 2 to 4 members.",
        highlight: "Individual & Team Formats",
      },
      {
        id: "dept-6",
        number: "06",
        question: "When are the DEPARTMENTAL TECHNICAL EVENTS held?",
        answer:
          "All departmental competitions are scheduled for 09 October 2026 across respective departmental laboratories, workshops, and halls at Shivalik University.",
        highlight: "09 October 2026 • Department Labs",
      },
    ],
  },

  // =========================================================================
  // 04 — QUANTUM DRIFT
  // =========================================================================
  {
    id: "quantum-drift",
    number: "04",
    name: "QUANTUM DRIFT",
    filterLabel: "QUANTUM DRIFT",
    tagline: "THREE PROGRESSIVE KNOCKOUT PHASES • ONE FINAL ROBOTIC CHAMPION",
    badge: "SPECIALIZED ROBOTICS ARENA",
    accent: "cyan",
    detailRoute: "/events/quantum-drift",
    faqs: [
      {
        id: "qd-1",
        number: "01",
        question: "What is Quantum Drift?",
        answer:
          "Quantum Drift is an elite high-octane robotics competition where a single robotic car must battle through three progressive knockout phases—testing ball handling agility, combat resilience, and high-speed drifting.",
        highlight: "3-Phase Robotics Championship",
      },
      {
        id: "qd-2",
        number: "02",
        question: "When and where is Quantum Drift taking place?",
        answer:
          "Quantum Drift takes place on 09 October 2026 at the Main Robotics Arena, Shivalik University.",
        highlight: "09 October 2026 • Main Robotics Arena",
      },
      {
        id: "qd-3",
        number: "03",
        question: "What is the registration fee for Quantum Drift?",
        answer:
          "The registration fee is ₹300 / TEAM. This is a flat rate for the entire squad regardless of whether you have 1, 2, 3, or 4 members—it is NOT charged per member.",
        highlight: "₹300 / TEAM (Flat Team Fee)",
      },
      {
        id: "qd-4",
        number: "04",
        question: "How many members can be in one team?",
        answer:
          "Teams can have 1 to 4 members. You can compete as a solo robotic driver or collaborate as a multi-member squad.",
        highlight: "1–4 Members",
      },
      {
        id: "qd-5",
        number: "05",
        question: "What are the three phases of Quantum Drift?",
        answer:
          "The tournament consists of exactly three sequential knockout phases: Phase 01: ROBO RACE (high-speed championship circuit sprint), Phase 02: ROBO SOCCER (turf maneuvering and goal scoring), and Phase 03: ROBO WAR (head-to-head combat in the hazard ring).",
        highlight: "01 Robo Race → 02 Robo Soccer → 03 Robo War",
      },
      {
        id: "qd-6",
        number: "06",
        question: "What is the prize pool for Quantum Drift?",
        answer:
          "Quantum Drift boasts an official tournament reward pool of UPTO ₹35,000 for top-qualifying robotic teams.",
        highlight: "UPTO ₹35,000",
      },
      {
        id: "qd-7",
        number: "07",
        question: "Can participants use their own self-built robotic car or a purchased car?",
        answer:
          "Yes! Both self-built custom robotic cars and purchased/commercially available robotic chassis are 100% eligible to enter and compete under the exact same arena rules.",
        highlight: "Self-Built or Purchased Cars Eligible",
      },
      {
        id: "qd-8",
        number: "08",
        question: "Where can I find the official Quantum Drift Rulebook?",
        answer:
          "The official certified PDF rulebook can be viewed directly in your browser or downloaded from the dedicated Quantum Drift event page under the Official Rulebook section.",
        highlight: "Official Rulebook PDF on Event Page",
      },
      {
        id: "qd-9",
        number: "09",
        question: "Who are the Quantum Drift event coordinators?",
        answer:
          "You can connect directly with the official event coordinators: Kumar Satyam (Phone: 7060550243) and Srishti Raj.",
        highlight: "Kumar Satyam & Srishti Raj",
      },
      {
        id: "qd-10",
        number: "10",
        question: "How do I register for Quantum Drift?",
        answer:
          "Click the 'Register Now' button on the Quantum Drift page to open the official Google Form and lock in your team's entry.",
        highlight: "Official Google Form",
      },
    ],
  },

  // =========================================================================
  // 05 — FUN ACTIVITIES & GAMES
  // =========================================================================
  {
    id: "fun-activities-and-games",
    number: "05",
    name: "FUN ACTIVITIES & GAMES",
    filterLabel: "FUN ACTIVITIES & GAMES",
    tagline: "CREATIVE WEB OF COLOUR & HIGH-OCTANE BEYBLADE TOURNAMENT",
    badge: "FESTIVAL SPECIAL ARENA",
    accent: "purple",
    detailRoute: "/events/fun-activities-and-games",
    faqs: [
      {
        id: "fa-1",
        number: "01",
        question: "What are the Fun Activities & Games at SHIVA INNOVEX?",
        answer:
          "Fun Activities & Games features two dynamic festival zones: 'Web of Colour' (a creative skin/body painting canvas activity) and the 'Beyblade Tournament' (an action-packed knockout arena competition).",
        highlight: "Web of Colour & Beyblade Tournament",
      },
      {
        id: "fa-2",
        number: "02",
        question: "What is the registration fee for the activities?",
        answer:
          "The registration fee is ₹50 / PER PERSON for each activity. Participants can register easily online or at the activity reporting desk.",
        highlight: "₹50 / PER PERSON",
      },
      {
        id: "fa-3",
        number: "03",
        question: "Who is eligible to participate?",
        answer:
          "All registered attendees, college students, and festival visitors are welcome to join both Web of Colour and the Beyblade Tournament.",
        highlight: "Open to All Festival Participants",
      },
      {
        id: "fa-4",
        number: "04",
        question: "Are skin painting materials provided for Web of Colour?",
        answer:
          "Yes! Safe, certified skin-friendly body paints and application brushes are provided at the activity station.",
        highlight: "Skin-Safe Paints Provided",
      },
      {
        id: "fa-5",
        number: "05",
        question: "How does the Beyblade Tournament work?",
        answer:
          "Participants battle head-to-head in official battle dishes following a fast-paced single-elimination bracket until a festival champion is crowned.",
        highlight: "Knockout Arena Battles",
      },
    ],
  },
];
