// ============================================
// CENTRALIZED CV & PORTFOLIO DATA
// All content sourced from Mohammad_Al_Furqon_CV.md
// Rule 4.1: No hardcoded data in Vue components
// ============================================

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  website: string
  linkedin: string
  email: string
  about: string
}

export interface Education {
  institution: string
  degree: string
  gpa: string
  period: string
}

export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
  tags?: string[]
}

export interface Achievement {
  title: string
  description: string
  icon: string
}

export interface Organization {
  name: string
  role: string
  period: string
  description: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Language {
  name: string
  level: string
  percentage: number
}

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo: PersonalInfo = {
  name: 'Mohammad Al Furqon',
  title: 'Fullstack Web Developer & Software Engineer',
  tagline: 'Building robust digital experiences with precision and creativity.',
  website: 'lucialf.my.id',
  linkedin: 'linkedin.com/in/lucialf',
  email: 'mohammadalfurqon62@gmail.com',
  about: `A passionate Fullstack Developer and Software Engineer with extensive experience spanning Japanese industry, 
government agencies, academic institutions, and international cybersecurity operations. 
Graduated from Universitas Sebelas Maret in Program Study of Informatics with strong fundamentals in Machine Learning and Software Engineering. 
Skilled in building secure, scalable web applications and contributing to cutting-edge research 
in Machine Learning and Humanized Computing.`,
}

// ============================================
// EDUCATION
// ============================================
export const education: Education[] = [
  {
    institution: 'Universitas Sebelas Maret',
    degree: 'Bachelor of Informatics',
    gpa: '3.77 / 4.00',
    period: 'Aug 2021 — Jan 2026',
  },
  {
    institution: 'SMA Negeri 7 Bengkulu',
    degree: 'Science and Mathematics',
    gpa: '93 / 100',
    period: 'Sept 2018 — May 2021',
  },
]

// ============================================
// WORK EXPERIENCES
// ============================================
export const experiences: Experience[] = [
  {
    company: 'Paragon Technology and Innovation',
    role: 'Software Engineer (HR Technology) Intern',
    period: 'Aug 2026 — Present',
    highlights: [
      'Refactor and fix bugs from legacy codebase in HR application systems',
    ],
    tags: ['HR Tech', 'Software Engineering', 'Refactoring'],
  },
  {
    company: 'Self Employed',
    role: 'Freelance Fullstack Web Developer',
    period: 'Aug 2024 — Present',
    highlights: [
      'Handle various websites for diverse companies and individuals',
      'Manage all requested features from clients and implement into production',
      'Utilize various programming languages based on client requirements',
      'Ensure security, optimization, and seamless deployment of all projects',
    ],
    tags: ['Freelance', 'Fullstack', 'Multi-language'],
  },
  {
    company: 'LAMPTIP',
    role: 'Web Developer — Part Time',
    period: 'Nov 2025 — Present',
    highlights: [
      'Fullstack Developer at Lembaga Akreditasi Mandiri Pendidikan Tinggi Ilmu Pertanian',
      'Maintain and update the main website infrastructure',
      'Identify potential bugs and refactor legacy code for improved performance',
      'Develop new features based on user requirements and feedback',
    ],
    tags: ['Laravel', 'Fullstack', 'Maintenance'],
  },
  {
    company: 'DISPERKIMTAN Bontang City',
    role: 'Web Developer — Contract',
    period: 'Sept 2025 — Feb 2026',
    highlights: [
      'Created user authentication and authorization system using JWT Token',
      'Built role management system for user access control',
      'Implemented admin user impersonation feature',
      'Integrated audit database tracking using Laravel Auditor',
      'Designed REST API system for frontend-backend communication',
    ],
    tags: ['Laravel', 'JWT', 'REST API', 'Security'],
  },
  {
    company: 'Meiwa Industry Japan (明和工業株式会社)',
    role: 'Software Engineer — Internship',
    period: 'June 2024 — June 2025',
    highlights: [
      'Normalized database tables on "Meiwa Portal" web application',
      'Refactored code from bad practices to better practice standards',
      'Recreated complete Inventory Management System',
      'Developed Leave Request Application from scratch',
      'Participated in tech stack modernization of "Meiwa Portal"',
      'Managed CCTV systems and LAN cable infrastructure',
    ],
    tags: ['Japan', 'Database', 'Inventory System', 'Refactoring'],
  },
  {
    company: 'Rapixus Taiwan',
    role: 'VANS Operator',
    period: 'Jan 2024 — March 2024',
    highlights: [
      'Operated RAPIXUS RapixEngine VANS platform for vulnerability scans and risk assessments',
      'Managed IT asset inventories using standardized CPE formats',
      'Monitored CVSS vulnerability scores and deployed system patches',
      'Generated post-installation inspection reports and resolved security loopholes',
    ],
    tags: ['Cybersecurity', 'CVSS', 'Vulnerability Assessment'],
  },
  {
    company: 'SPMB Universitas Sebelas Maret',
    role: 'Helpdesk Seleksi Mandiri',
    period: 'June 2023 — July 2024',
    highlights: [
      'Performed first-line troubleshooting for registration system glitches',
      'Coordinated with Central Admissions Committee and IT team for issue resolution',
    ],
    tags: ['Support', 'Troubleshooting'],
  },
  {
    company: 'Dinas Pendidikan Karanganyar',
    role: 'Helpdesk PPDB',
    period: 'June 2023',
    highlights: [
      'Assisted students and parents with technical admissions inquiries across zonation, academic, affirmative, and transfer tracks',
    ],
    tags: ['Education', 'Support'],
  },
  {
    company: 'UPT TIK UNS',
    role: 'Software Developer — Internship',
    period: 'Jan 2023 — Mar 2024',
    highlights: [
      'Co-developed "Report-PBJ" — web app for managing university procurement workflows',
      'Updated "Domain-MS" — domain management system for Universitas Sebelas Maret',
      'Participated in "SEMANTIK" collaboration event with Indosat and Telkomsel',
      'Led cybersecurity awareness socialization with Karanganyar government',
    ],
    tags: ['Government', 'Web App', 'Procurement'],
  },
  {
    company: 'Assistant Lecturer — S1 Informatika UNS',
    role: 'Teaching Assistant',
    period: 'Aug 2022 — June 2024',
    highlights: [
      'Programming Concepts Course (Aug 2022 — Dec 2023)',
      'Data Structure and Algorithm Course (Feb 2022 — July 2023)',
      'Object Oriented Programming Course (Aug 2023 — Dec 2023)',
      'Database Course (Aug 2023 — Dec 2023)',
      'Web Programming Course (Jan 2024 — June 2024)',
      'Shared knowledge, created materials, and evaluated student assignments',
    ],
    tags: ['Teaching', 'DSA', 'OOP', 'Database', 'Web'],
  },
  {
    company: 'FATISDA UNS',
    role: 'Accreditation Team & ISHC-RG Research Assistant',
    period: 'Aug 2022 — Aug 2023',
    highlights: [
      'Conducted exploratory research in cybersecurity and Humanized Computing',
      'Collected, processed, and analyzed network security data for risk assessments',
      'Documented research methodologies, testing scenarios, and findings',
      'Authored technical reports and academic manuscripts for publication',
    ],
    tags: ['Research', 'Cybersecurity', 'Academic Writing'],
  },
]

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements: Achievement[] = [
  {
    title: 'Book Author',
    description: '"Strategi Membangun Portal Website Aman Dari Serangan Judi Online" with ISHC-RG, Faculty of Informatics and Data Science, Universitas Sebelas Maret.',
    icon: 'book-open',
  },
  {
    title: 'Undergraduate Thesis',
    description: '"Dual-View Radiographic Captioning for Chest X-ray Frontal and Lateral using DenseNet-LSTM" — Undergraduate Publication.',
    icon: 'graduation-cap',
  },
]

// ============================================
// ORGANIZATIONS & VOLUNTEER
// ============================================
export const organizations: Organization[] = [
  {
    name: 'Himpunan Mahasiswa Informatika UNS',
    role: 'PSDM Staff',
    period: 'Mar 2022 — Mar 2023',
    description: 'Helped new students adapt to campus life and participate in organization activities.',
  },
  {
    name: 'PKKMB FATISDA 2022',
    role: 'Head Division of Curriculum',
    period: 'July 2022 — Aug 2022',
    description: 'Managed Curriculum Division — evaluated tasks, organized orientation program for new students.',
  },
  {
    name: 'OSPRODI INFORMATIKA',
    role: 'Head Division of Technology',
    period: 'July 2022 — Aug 2022',
    description: 'Managed ALGORITMARU TASK (web-based) and CODING TASK challenges for new students.',
  },
  {
    name: 'Bangkit Academy Batch 2',
    role: 'Cohort — Machine Learning Path',
    period: 'Aug 2023 — Jan 2024',
    description: 'Studied Machine Learning with Python/JS, TensorFlow, TFD Certification. Capstone: "NutriChive" — ingredient scanning & recipe recommendation app.',
  },
]

// ============================================
// SKILLS
// ============================================
export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['Vue.js', 'React', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Backend',
    items: ['Laravel', 'Node.js', 'Express', 'REST API', 'PHP', 'Python'],
  },
  {
    name: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'DevOps & Tools',
    items: ['Git', 'Docker', 'Linux', 'Nginx', 'CI/CD', 'Google Cloud'],
  },
  {
    name: 'AI & ML',
    items: ['TensorFlow', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
  },
  {
    name: 'Security',
    items: ['JWT', 'OAuth', 'Vulnerability Assessment', 'CVSS', 'Penetration Testing'],
  },
]

// ============================================
// LANGUAGES
// ============================================
export const languages: Language[] = [
  { name: 'Bahasa Indonesia', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Proficient', percentage: 85 },
  { name: 'Japanese', level: 'Beginner', percentage: 25 },
]

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
