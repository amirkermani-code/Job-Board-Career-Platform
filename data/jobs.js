const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechFlow",
    location: "Berlin, Germany",
    type: "Full-time",
    experience: "Mid-level",
    salary: "$70k - $95k",
    remote: true,
    posted: "2 days ago",
    category: "Engineering",

    description:
      "We are looking for a Frontend Developer to build fast, accessible, and user-friendly web applications. You will work closely with designers, backend engineers, and product managers to turn ideas into polished digital experiences.",

    responsibilities: [
      "Build and maintain responsive web applications.",
      "Collaborate with designers and backend engineers.",
      "Write clean, reusable, and maintainable frontend code.",
      "Improve application performance and accessibility.",
      "Participate in code reviews and technical discussions.",
    ],

    requirements: [
      "2+ years of frontend development experience.",
      "Strong knowledge of JavaScript and modern web development.",
      "Experience with React and component-based architecture.",
      "Good understanding of HTML, CSS, and responsive design.",
      "Ability to work independently and as part of a team.",
    ],

    benefits: [
      "Flexible remote work options.",
      "Annual learning and development budget.",
      "Modern equipment and development tools.",
      "Paid vacation and public holidays.",
    ],
  },

  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudBase",
    location: "London, UK",
    type: "Full-time",
    experience: "Senior",
    salary: "$90k - $120k",
    remote: true,
    posted: "1 day ago",
    category: "Engineering",

    description:
      "CloudBase is looking for a Senior Backend Engineer to design and develop reliable services that power our cloud-based products. You will work on scalable APIs, data systems, and distributed services used by customers around the world.",

    responsibilities: [
      "Design and develop scalable backend services and APIs.",
      "Build reliable and secure data processing systems.",
      "Monitor application performance and improve system reliability.",
      "Collaborate with frontend engineers and product teams.",
      "Review code and contribute to backend architecture decisions.",
    ],

    requirements: [
      "5+ years of backend development experience.",
      "Strong experience with Node.js, Python, Java, or similar technologies.",
      "Solid understanding of RESTful APIs and databases.",
      "Experience with cloud platforms and distributed systems.",
      "Strong problem-solving and communication skills.",
    ],

    benefits: [
      "Fully remote-friendly environment.",
      "Competitive salary and annual bonus.",
      "Professional development budget.",
      "Flexible working hours.",
    ],
  },

  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "Amsterdam, Netherlands",
    type: "Full-time",
    experience: "Mid-level",
    salary: "$65k - $85k",
    remote: false,
    posted: "3 days ago",
    category: "Design",

    description:
      "PixelCraft is looking for a UI/UX Designer to create intuitive and visually engaging digital experiences. You will work closely with product managers and developers throughout the entire design process.",

    responsibilities: [
      "Design user interfaces for web and digital products.",
      "Create wireframes, prototypes, and high-fidelity designs.",
      "Conduct user research and translate insights into design decisions.",
      "Work closely with developers to ensure accurate implementation.",
      "Maintain and improve the company's design system.",
    ],

    requirements: [
      "2+ years of professional UI/UX design experience.",
      "Strong knowledge of Figma and modern design workflows.",
      "Understanding of user-centered design principles.",
      "Strong visual and interaction design skills.",
      "Ability to communicate design decisions clearly.",
    ],

    benefits: [
      "Creative and collaborative work environment.",
      "Professional design tools and equipment.",
      "Learning and conference budget.",
      "Paid vacation and holidays.",
    ],
  },

  {
    id: 4,
    title: "Junior React Developer",
    company: "Nova Labs",
    location: "Remote",
    type: "Full-time",
    experience: "Entry-level",
    salary: "$45k - $60k",
    remote: true,
    posted: "4 days ago",
    category: "Engineering",

    description:
      "Nova Labs is looking for a Junior React Developer who is passionate about learning and building modern web applications. This role is designed for developers who want to grow their frontend skills while working with an experienced engineering team.",

    responsibilities: [
      "Develop and maintain React components.",
      "Work with senior developers to implement new features.",
      "Fix bugs and improve existing user interfaces.",
      "Write reusable and readable frontend code.",
      "Participate in code reviews and team meetings.",
    ],

    requirements: [
      "Basic understanding of JavaScript and React.",
      "Knowledge of HTML, CSS, and responsive design.",
      "Familiarity with Git and version control.",
      "Strong willingness to learn and improve.",
      "Good communication and teamwork skills.",
    ],

    benefits: [
      "Fully remote position.",
      "Mentorship from experienced developers.",
      "Learning and development budget.",
      "Flexible working hours.",
    ],
  },

  {
    id: 5,
    title: "Product Manager",
    company: "BrightTech",
    location: "Paris, France",
    type: "Full-time",
    experience: "Senior",
    salary: "$85k - $110k",
    remote: false,
    posted: "5 days ago",
    category: "Product",

    description:
      "BrightTech is looking for an experienced Product Manager to lead product initiatives from strategy through delivery. You will work across design, engineering, and business teams to build products that solve real customer problems.",

    responsibilities: [
      "Define product goals, roadmaps, and priorities.",
      "Work with engineering and design teams to deliver product features.",
      "Analyze customer feedback and product performance.",
      "Coordinate product launches and feature releases.",
      "Communicate product strategy to internal stakeholders.",
    ],

    requirements: [
      "4+ years of product management experience.",
      "Strong understanding of product development processes.",
      "Excellent communication and organizational skills.",
      "Experience working with cross-functional teams.",
      "Strong analytical and problem-solving abilities.",
    ],

    benefits: [
      "Collaborative product-focused environment.",
      "Professional development opportunities.",
      "Company-sponsored events and conferences.",
      "Comprehensive vacation policy.",
    ],
  },

  {
    id: 6,
    title: "Data Analyst",
    company: "InsightWorks",
    location: "Munich, Germany",
    type: "Full-time",
    experience: "Mid-level",
    salary: "$60k - $80k",
    remote: true,
    posted: "1 week ago",
    category: "Data",

    description:
      "InsightWorks is looking for a Data Analyst to transform complex datasets into actionable insights. You will work with business and product teams to understand trends, measure performance, and support data-driven decisions.",

    responsibilities: [
      "Analyze large datasets and identify meaningful trends.",
      "Build dashboards and reports for internal teams.",
      "Work with stakeholders to define analytical requirements.",
      "Monitor key performance indicators.",
      "Present findings and recommendations to non-technical teams.",
    ],

    requirements: [
      "2+ years of experience in data analysis or a related field.",
      "Strong SQL skills and experience working with databases.",
      "Experience with data visualization tools.",
      "Strong analytical and problem-solving skills.",
      "Ability to communicate complex findings clearly.",
    ],

    benefits: [
      "Remote-friendly working environment.",
      "Flexible working hours.",
      "Learning and development budget.",
      "Modern data and analytics tools.",
    ],
  },

  {
    id: 7,
    title: "DevOps Engineer",
    company: "ScaleGrid",
    location: "Dublin, Ireland",
    type: "Full-time",
    experience: "Senior",
    salary: "$95k - $125k",
    remote: true,
    posted: "1 week ago",
    category: "Engineering",

    description:
      "ScaleGrid is looking for a Senior DevOps Engineer to improve the reliability, scalability, and automation of our infrastructure. You will work closely with development teams to build efficient and secure deployment workflows.",

    responsibilities: [
      "Design and maintain cloud infrastructure.",
      "Build and improve CI/CD pipelines.",
      "Monitor system performance and reliability.",
      "Automate deployment and infrastructure processes.",
      "Work with engineering teams to improve application scalability.",
    ],

    requirements: [
      "4+ years of DevOps or infrastructure experience.",
      "Strong knowledge of Docker and CI/CD systems.",
      "Experience with cloud platforms such as AWS, Azure, or GCP.",
      "Understanding of Linux systems and networking.",
      "Experience with infrastructure automation and monitoring.",
    ],

    benefits: [
      "Fully remote-friendly position.",
      "Competitive compensation package.",
      "Home office equipment budget.",
      "Professional training and certification support.",
    ],
  },

  {
    id: 8,
    title: "Marketing Specialist",
    company: "GrowthHub",
    location: "Madrid, Spain",
    type: "Part-time",
    experience: "Entry-level",
    salary: "$35k - $50k",
    remote: false,
    posted: "1 week ago",
    category: "Marketing",

    description:
      "GrowthHub is looking for a Marketing Specialist to support campaigns, content initiatives, and digital marketing activities. You will work with the marketing team to grow brand awareness and engage new audiences.",

    responsibilities: [
      "Assist with digital marketing campaigns.",
      "Create and organize marketing content.",
      "Monitor campaign performance and engagement.",
      "Research market trends and competitors.",
      "Support social media and email marketing initiatives.",
    ],

    requirements: [
      "Basic understanding of digital marketing principles.",
      "Strong written and verbal communication skills.",
      "Familiarity with social media platforms.",
      "Basic knowledge of analytics and marketing tools.",
      "Creative mindset and willingness to learn.",
    ],

    benefits: [
      "Part-time flexible schedule.",
      "Marketing mentorship and training.",
      "Opportunities for professional growth.",
      "Collaborative team environment.",
    ],
  },
];

export default jobs;