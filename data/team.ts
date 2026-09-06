export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "satyam-kumar",
    name: "SATYAM KUMAR",
    role: "TEAM LEADER",
    description: "Vision | Strategy | Execution",
    image: "/images/team/satyam.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:satyam@shivatech2026.com",
    },
  },
  {
    id: "muskan-kumari",
    name: "MUSKAN KUMARI",
    role: "CO-LEAD",
    description: "Planning | Coordination | Growth",
    image: "/images/team/muskan.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:muskan@shivatech2026.com",
    },
  },
  {
    id: "rishabh-verma",
    name: "RISHABH VERMA",
    role: "TECHNICAL HEAD",
    description: "Code | Build | Innovate",
    image: "/images/team/rishabh.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:rishabh@shivatech2026.com",
    },
  },
  {
    id: "shreya-singh",
    name: "SHREYA SINGH",
    role: "MEDIA HEAD",
    description: "Content | Design | Outreach",
    image: "/images/team/shreya.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:shreya@shivatech2026.com",
    },
  },
  {
    id: "anshul-rawat",
    name: "ANSHUL RAWAT",
    role: "EVENTS HEAD",
    description: "Logistics | Execution | Support",
    image: "/images/team/anshul.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:anshul@shivatech2026.com",
    },
  },
];
