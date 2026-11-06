export const site = {
  name: "Arya Sekhar Roy",
  firstName: "Arya",
  shortName: "Arya S. Roy",
  title: "Developer | Creative Technologist | Problem Solver",
  role: "Software Developer",
  location: "Kolkata, India",
  heroLine: "BUILDING DIGITAL EXPERIENCES.",
  email: "royarya431@gmail.com",
  phone: "+91 98837 50865",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/Arya-s-roy",
  linkedin: "https://www.linkedin.com/in/arya-sekhar-roy-944725251/",
  aboutHeading: "BEYOND THE CODE.",
  contactHeading: "LET'S BUILD SOMETHING EXTRAORDINARY.",
  intro:
    "ECE undergraduate at Heritage Institute of Technology, focused on software, apps, blockchain, and data systems.",
  biography: [
    "I am Arya Sekhar Roy, a B.Tech student in Electronics and Communication Engineering at Heritage Institute of Technology, Kolkata, expected to graduate in 2028.",
    "I build software across doctor-to-patient platforms, civic reporting tools, and blockchain-inspired systems. I care about secure data, clear interfaces, and making technology useful for people.",
    "I am growing as a software and app developer, with interests in blockchain, databases, artificial intelligence, and emerging technology.",
  ],
  philosophy:
    "Solve problems with others. Learn quickly, communicate clearly, and ship work that people can actually use.",
  interests: [
    "Software Development",
    "App Development",
    "Blockchain Technology",
    "Database Systems",
    "Artificial Intelligence & Emerging Technologies",
  ],
  languagesSpoken: ["English", "Bengali", "Hindi"],
  stats: [
    { label: "SGPA", value: 8.72, suffix: "", detail: "Latest SGPA · B.Tech ECE, Heritage Institute of Technology" },
    { label: "Graduation", value: 2028, suffix: "", detail: "Expected graduation year" },
    { label: "Hackathons", value: 6, suffix: "", detail: "Participated in 6 hackathons" },
    { label: "Wins", value: 1, suffix: "", detail: "Winner of 1 hackathon" },
  ],
  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      items: ["C", "C++", "Python", "SQL", "JavaScript"],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      items: ["JavaScript"],
    },
    {
      id: "backend",
      title: "Backend Development",
      items: ["Supabase", "SQL"],
    },
    {
      id: "infra",
      title: "Database & Infrastructure",
      items: ["SQL", "Database Management", "Supabase"],
    },
    {
      id: "ai",
      title: "AI / Machine Learning",
      items: ["Artificial Intelligence", "Emerging Technologies"],
    },
    {
      id: "creative",
      title: "Creative Development",
      items: ["Blockchain Basics", "Android Studio", "Git", "GitHub", "VS Code"],
    },
  ],
  projects: [
    {
      id: "medichain",
      title: "MediChain",
      summary:
        "A blockchain-inspired doctor-to-patient platform focused on secure medical data transactions, with cryptographic concepts and an intuitive UI.",
      stack: ["JavaScript", "Blockchain"],
      github: "https://github.com/Arya-s-roy/MediChain-main",
      live: null,
      accent: "#6d7cff",
    },
    {
      id: "civic-lens",
      title: "Civic Lens",
      summary:
        "A citizen grievance platform connecting users with administrators to report civic issues and improve transparency.",
      stack: ["JavaScript"],
      github: null,
      live: null,
      accent: "#3ee0ff",
    },
  ],
  timelineNote:
    "No internships or professional roles are listed on the resume. This timeline follows education and the hackathon record as written.",
  timeline: [
    {
      id: "heritage",
      kind: "education" as const,
      title: "B.Tech, Electronics and Communication Engineering",
      org: "Heritage Institute of Technology, Kolkata",
      period: "Expected graduation 2028",
      detail: "Latest SGPA: 8.72.",
    },
    {
      id: "hackathons",
      kind: "achievement" as const,
      title: "Hackathon participant",
      org: "Hackathons",
      period: "6 events",
      detail: "Participated in 6 hackathons.",
    },
    {
      id: "hackathon-win",
      kind: "achievement" as const,
      title: "Hackathon winner",
      org: "Hackathons",
      period: "1 win",
      detail: "Winner of 1 hackathon. The resume does not name the event.",
    },
  ],
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export type SiteProject = (typeof site.projects)[number];
export type SiteTimelineItem = (typeof site.timeline)[number];
