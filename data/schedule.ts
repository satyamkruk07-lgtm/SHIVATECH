export type ScheduleCategory = 
  | "CEREMONY"
  | "HACKATHON"
  | "COMPETITION"
  | "BREAK"
  | "TALK"
  | "WORKSHOP"
  | "AWARDS";

export type ScheduleItem = {
  id: string;
  day: number; // 1 or 2
  time: string;
  title: string;
  subtitle: string;
  description: string;
  venue: string;
  category: ScheduleCategory;
  duration: string;
  icon: "badge" | "mic" | "trophy" | "food" | "bulb" | "talk" | "gear" | "medal" | "code" | "science";
  eventSlug?: string; // Links to /events page if applicable
  registerUrl?: string; // Links to /register page
  featured?: boolean;
};

export type DaySchedule = {
  dayNumber: number;
  dayLabel: string;
  dateStr: string;
  items: ScheduleItem[];
};

export const scheduleData: DaySchedule[] = [
  {
    dayNumber: 1,
    dayLabel: "DAY 01",
    dateStr: "OCTOBER 24, 2026",
    items: [
      {
        id: "d1-01",
        day: 1,
        time: "09:00 AM",
        title: "REGISTRATION",
        subtitle: "Participant Check-in & Kit Distribution",
        description: "Welcome Desk opens! Receive your official badge, welcome kit, event credentials, and access tokens for all venue zones.",
        venue: "MAIN PLAZA ENTRANCE",
        category: "CEREMONY",
        duration: "09:00 AM – 10:00 AM",
        icon: "badge",
      },
      {
        id: "d1-02",
        day: 1,
        time: "10:00 AM",
        title: "INAUGURATION",
        subtitle: "Opening Ceremony & Welcome Address",
        description: "Grand opening keynotes, dignitary speeches, light ceremony, and reveal of the SHIVATECH 2026 flagship trophy.",
        venue: "GRAND AUDITORIUM",
        category: "CEREMONY",
        duration: "10:00 AM – 11:00 AM",
        icon: "mic",
      },
      {
        id: "d1-03",
        day: 1,
        time: "11:00 AM",
        title: "HACKNATION 2.0",
        subtitle: "Innovation Challenge Begins",
        description: "An intense 24-hour innovation-driven challenge where elite dev teams build, experiment, and turn bold ideas into working solutions.",
        venue: "HACKATHON ARENA - HALL A",
        category: "HACKATHON",
        duration: "11:00 AM – 01:00 PM (Phase 1)",
        icon: "trophy",
        eventSlug: "hacknation-2",
        registerUrl: "/register",
        featured: true,
      },
      {
        id: "d1-04",
        day: 1,
        time: "01:00 PM",
        title: "LUNCH BREAK",
        subtitle: "Recharge & Network",
        description: "Complimentary gourmet catering, networking lounges, sponsor booths, and interactive VR experience stalls.",
        venue: "FOOD PLAZA & DECK",
        category: "BREAK",
        duration: "01:00 PM – 02:00 PM",
        icon: "food",
      },
      {
        id: "d1-05",
        day: 1,
        time: "02:00 PM",
        title: "IDEATHON",
        subtitle: "Ideate. Innovate. Implement.",
        description: "Pitch your breakthrough tech solutions, business frameworks, and AI concepts directly to industry leaders & venture mentors.",
        venue: "INNOVATION HUB - HALL B",
        category: "COMPETITION",
        duration: "02:00 PM – 04:00 PM",
        icon: "bulb",
        eventSlug: "ideathon",
        registerUrl: "/register",
        featured: true,
      },
      {
        id: "d1-06",
        day: 1,
        time: "04:00 PM",
        title: "TECH TALKS",
        subtitle: "Expert Sessions & Insights",
        description: "Keynote talks by keynote leaders on Quantum Computing, Autonomous Systems, Next-Gen Web Engines, and Spatial AI.",
        venue: "SEMINAR HALL 1",
        category: "TALK",
        duration: "04:00 PM – 05:30 PM",
        icon: "talk",
      },
      {
        id: "d1-07",
        day: 1,
        time: "05:30 PM",
        title: "WORKSHOPS",
        subtitle: "Hands-on Learning & Collaboration",
        description: "Interactive technical masterclasses covering Full-Stack Motion UI, Edge AI Models, and High-Performance WebGL Shader Development.",
        venue: "LAB ZONE 3",
        category: "WORKSHOP",
        duration: "05:30 PM – 07:00 PM",
        icon: "gear",
      },
      {
        id: "d1-08",
        day: 1,
        time: "07:00 PM",
        title: "VALEDICTORY & AWARDS",
        subtitle: "Celebrating Excellence & Achievements",
        description: "Day 1 closing celebration, live musical laser show, release of leaderboard standings, and prize announcements.",
        venue: "OPEN AIR THEATRE",
        category: "AWARDS",
        duration: "07:00 PM – 09:00 PM",
        icon: "medal",
      },
    ],
  },
  {
    dayNumber: 2,
    dayLabel: "DAY 02",
    dateStr: "OCTOBER 25, 2026",
    items: [
      {
        id: "d2-01",
        day: 2,
        time: "09:00 AM",
        title: "MORNING CHECK-IN",
        subtitle: "Day 2 Briefing & Breakfast",
        description: "Fuel up for Day 2! Morning coffee bar, hackathon status sync, and schedule breakdown for grand finals.",
        venue: "MAIN PLAZA ENTRANCE",
        category: "CEREMONY",
        duration: "09:00 AM – 10:00 AM",
        icon: "badge",
      },
      {
        id: "d2-02",
        day: 2,
        time: "10:00 AM",
        title: "SHIVATECH MAIN",
        subtitle: "Flagship Technical Showcase",
        description: "The crown jewel event of the festival. Battle of autonomous bots, robotics circuit challenges, and cyber security CTF battles.",
        venue: "MAIN ARENA COMPLEX",
        category: "COMPETITION",
        duration: "10:00 AM – 01:00 PM",
        icon: "code",
        eventSlug: "shivatech",
        registerUrl: "/register",
        featured: true,
      },
      {
        id: "d2-03",
        day: 2,
        time: "01:00 PM",
        title: "NETWORKING LUNCH",
        subtitle: "Sponsor & Mentor Meetup",
        description: "Exclusive lunch session with hiring teams, startup founders, and technical mentors.",
        venue: "VIP LOUNGE & DECK",
        category: "BREAK",
        duration: "01:00 PM – 02:00 PM",
        icon: "food",
      },
      {
        id: "d2-04",
        day: 2,
        time: "02:00 PM",
        title: "SCIENCE CHAMPIONSHIP",
        subtitle: "Project Exhibition & Demos",
        description: "Scientific innovations, prototype exhibitions, eco-tech models, and interactive live demonstrations judged by expert panels.",
        venue: "EXHIBITION HALL C",
        category: "COMPETITION",
        duration: "02:00 PM – 04:30 PM",
        icon: "science",
        eventSlug: "science-championship",
        registerUrl: "/register",
        featured: true,
      },
      {
        id: "d2-05",
        day: 2,
        time: "04:30 PM",
        title: "GRAND FINALS",
        subtitle: "Hacknation & Ideathon Pitching",
        description: "Top finalist teams present live pitches on the main stage in front of judges and audience voting.",
        venue: "GRAND AUDITORIUM",
        category: "HACKATHON",
        duration: "04:30 PM – 06:30 PM",
        icon: "trophy",
      },
      {
        id: "d2-06",
        day: 2,
        time: "06:30 PM",
        title: "CLOSING CEREMONY",
        subtitle: "Mega Prize Distribution & Concert",
        description: "Grand prize distribution of ₹5,00,000+ pool, trophy handovers, official fest closing remarks, and celebrity DJ concert.",
        venue: "MAIN ARENA STAGE",
        category: "AWARDS",
        duration: "06:30 PM – 10:00 PM",
        icon: "medal",
      },
    ],
  },
];
