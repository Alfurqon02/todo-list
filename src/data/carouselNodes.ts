import {
  personalInfo,
  experiences,
  education,
  achievements,
  organizations,
  skills,
  languages,
  type Experience,
  type Education,
  type Achievement,
  type Organization,
  type SkillCategory,
} from './portfolioData'

export type SectorType = 'all' | 'experience' | 'skills' | 'research' | 'education' | 'profile'

export interface CarouselNode {
  id: string
  sector: SectorType
  sectorLabel: string
  badge: string
  title: string
  subtitle: string
  period?: string
  highlights: string[]
  tags?: string[]
  iconType: 'briefcase' | 'cpu' | 'book' | 'graduation' | 'users' | 'user'
  rawRef?: any
}

// 1. Work Experience Nodes (11)
export const experienceNodes: CarouselNode[] = experiences.map((exp, idx) => ({
  id: `exp-${idx}`,
  sector: 'experience',
  sectorLabel: 'WORK EXPERIENCE',
  badge: `EXP_${String(idx + 1).padStart(2, '0')}`,
  title: exp.role,
  subtitle: `@ ${exp.company}`,
  period: exp.period,
  highlights: exp.highlights,
  tags: exp.tags || [],
  iconType: 'briefcase',
  rawRef: exp,
}))

// 2. Technical Skills Nodes (6)
export const skillNodes: CarouselNode[] = skills.map((cat, idx) => ({
  id: `skill-${idx}`,
  sector: 'skills',
  sectorLabel: 'TECH ARSENAL',
  badge: `SKILL_${String(idx + 1).padStart(2, '0')}`,
  title: cat.name,
  subtitle: `${cat.items.length} Tech Stacks Deployed`,
  highlights: [
    `Core Technologies: ${cat.items.slice(0, 4).join(', ')}`,
    `Integrated in enterprise production, microservices, and academic research environments.`,
  ],
  tags: cat.items,
  iconType: 'cpu',
  rawRef: cat,
}))

// 3. Research & Achievements Nodes (2)
export const researchNodes: CarouselNode[] = achievements.map((ach, idx) => ({
  id: `research-${idx}`,
  sector: 'research',
  sectorLabel: 'RESEARCH & AWARDS',
  badge: `PUB_${String(idx + 1).padStart(2, '0')}`,
  title: ach.title,
  subtitle: 'Academic Research & Publications',
  highlights: [ach.description],
  tags: ['Peer Reviewed', 'Research Group', 'Publication'],
  iconType: 'book',
  rawRef: ach,
}))

// 4. Education & Academic Nodes (2)
export const educationItemNodes: CarouselNode[] = education.map((edu, idx) => ({
  id: `edu-${idx}`,
  sector: 'education',
  sectorLabel: 'ACADEMIC RECORD',
  badge: `EDU_${String(idx + 1).padStart(2, '0')}`,
  title: edu.institution,
  subtitle: edu.degree,
  period: edu.period,
  highlights: [
    `Graduation GPA: ${edu.gpa}`,
    'Bachelor of Informatics with specialized research in Software Engineering and Machine Learning.',
  ],
  tags: ['Academic', `GPA: ${edu.gpa}`],
  iconType: 'graduation',
  rawRef: edu,
}))

// 5. Organization & Leadership Nodes (4)
export const organizationNodes: CarouselNode[] = organizations.map((org, idx) => ({
  id: `org-${idx}`,
  sector: 'education',
  sectorLabel: 'LEADERSHIP & COHORTS',
  badge: `ORG_${String(idx + 1).padStart(2, '0')}`,
  title: org.role,
  subtitle: `@ ${org.name}`,
  period: org.period,
  highlights: [org.description],
  tags: ['Leadership', 'Cohort', 'Community'],
  iconType: 'users',
  rawRef: org,
}))

// Combined Education & Organizations (6)
export const educationAndOrgNodes: CarouselNode[] = [
  ...educationItemNodes,
  ...organizationNodes,
]

// 6. Operator Profile Node (1)
export const profileNode: CarouselNode = {
  id: 'profile-0',
  sector: 'profile',
  sectorLabel: 'OPERATOR DOSSIER',
  badge: 'CORE_PROFILE',
  title: personalInfo.name,
  subtitle: personalInfo.title,
  period: 'ACTIVE // AVAILABLE',
  highlights: [
    personalInfo.about,
    `Academic Standing: Universitas Sebelas Maret (GPA: ${education[0].gpa})`,
    `Multilingual Capabilities: Indonesian (Native 100%), English (Proficient 85%), Japanese (Beginner 25%)`,
  ],
  tags: ['Fullstack', 'Machine Learning', 'Cybersecurity', 'HR Tech', 'Japan Tech'],
  iconType: 'user',
  rawRef: personalInfo,
}

// Master Combined Nodes (26)
export const allNodes: CarouselNode[] = [
  profileNode,
  ...experienceNodes,
  ...skillNodes,
  ...researchNodes,
  ...educationAndOrgNodes,
]

export const sectorDefinitions = [
  { key: 'all' as SectorType, label: 'ALL NODES', count: allNodes.length },
  { key: 'experience' as SectorType, label: 'WORK EXP', count: experienceNodes.length },
  { key: 'skills' as SectorType, label: 'TECH ARSENAL', count: skillNodes.length },
  { key: 'research' as SectorType, label: 'RESEARCH & THESIS', count: researchNodes.length },
  { key: 'education' as SectorType, label: 'EDUCATION & ORGS', count: educationAndOrgNodes.length },
  { key: 'profile' as SectorType, label: 'OPERATOR BIO', count: 1 },
]

export function getNodesBySector(sector: SectorType): CarouselNode[] {
  switch (sector) {
    case 'experience':
      return experienceNodes
    case 'skills':
      return skillNodes
    case 'research':
      return researchNodes
    case 'education':
      return educationAndOrgNodes
    case 'profile':
      return [profileNode]
    case 'all':
    default:
      return allNodes
  }
}
