export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "faculty" | "student";
  description?: string;
  image: string;
  socials?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
  };
}

export const facultyCoordinators: TeamMember[] = [
  {
    id: "kshitij-jain",
    name: "Er. Kshitij Jain",
    role: "ACM Faculty Coordinator",
    category: "faculty",
    image: "/team/kshitij-jain.jpeg",
    description: "Faculty Mentor & Advisor",
    socials: {},
  },
  {
    id: "santosh-joshi",
    name: "Dr. Santosh Joshi",
    role: "Faculty Coordinator",
    category: "faculty",
    image: "/team/santosh-joshi.jpg",
    description: "Academic & Strategic Lead",
    socials: {},
  },
  {
    id: "shivali-pundir",
    name: "Ms. Shivali Pundir",
    role: "Faculty Coordinator",
    category: "faculty",
    image: "/team/shivali.jpeg",
    description: "Program & Operations Coordinator",
    socials: {},
  },
];

export const studentCoordinators: TeamMember[] = [
  {
    id: "rifat-parvez",
    name: "Rifat Parvez",
    role: "Chairperson",
    category: "student",
    image: "/team/rifat.jpeg",
    description: "Overall Festival Lead & Strategy",
    socials: {},
  },
  {
    id: "shivam-kumar",
    name: "Shivam Kumar",
    role: "Vice Chairperson",
    category: "student",
    image: "/team/shivam.jpeg",
    description: "Operations & Team Management",
    socials: {},
  },
  {
    id: "aman-bhardwaj",
    name: "Aman Bhardwaj",
    role: "Treasurer",
    category: "student",
    image: "/team/aman_b.jpeg",
    description: "Finance & Resource Allocation",
    socials: {},
  },
  {
    id: "gaurav-kumar",
    name: "Gaurav Kumar",
    role: "Secretary",
    category: "student",
    image: "/team/gaurav.jpeg",
    description: "Administration & Documentation",
    socials: {},
  },
  {
    id: "kumar-satyam",
    name: "Kumar Satyam",
    role: "Graphic Head",
    category: "student",
    image: "/team/kumar-satyam.jpeg",
    description: "Visual Identity & Creative Lead",
    socials: {},
  },
  {
    id: "himanshu-kumar",
    name: "Himanshu Kumar",
    role: "Media Head",
    category: "student",
    image: "/team/himanshu.jpeg",
    description: "Media Coverage & Broadcasting",
    socials: {},
  },
  {
    id: "priyanjali",
    name: "Priyanjali",
    role: "Vice Media Head",
    category: "student",
    image: "/team/priyanjali.jpeg",
    description: "Outreach & Digital Communications",
    socials: {},
  },
  {
    id: "shubham-shah",
    name: "Shubham Shah",
    role: "ACM Member",
    category: "student",
    image: "/team/shubham.jpeg",
    description: "Technical Support & Coordination",
    socials: {},
  },
  {
    id: "prachi-rawat",
    name: "Prachi Rawat",
    role: "ACM Member",
    category: "student",
    image: "/team/prachi.jpeg",
    description: "Event Execution & Logistics",
    socials: {},
  },
  {
    id: "srishti-raj",
    name: "Srishti Raj",
    role: "ACM Member",
    category: "student",
    image: "/team/srishti.jpeg",
    description: "Event Operations & Hospitality",
    socials: {},
  },
];

export const teamData: TeamMember[] = [
  ...facultyCoordinators,
  ...studentCoordinators,
];
