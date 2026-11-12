import { experiences, type Experience } from './portfolioData'

export interface EngineeringSystemNode {
  id: string
  code: string
  shortLabel: string
  domain: string
  experience: Experience
  summary: string
  architecture: string[]
}

export const engineeringSystems: EngineeringSystemNode[] = [
  {
    id: 'paragon',
    code: 'SYS-01',
    shortLabel: 'Paragon HR Tech',
    domain: 'Enterprise HR Systems',
    experience: experiences[0],
    summary:
      'Refactoring legacy modules and resolving production defects across enterprise human-resources application systems.',
    architecture: ['HR Application Systems', 'Legacy Code Refactoring', 'Production Bug Resolution'],
  },
  {
    id: 'bontang',
    code: 'SYS-02',
    shortLabel: 'DISPERKIMTAN Auth API',
    domain: 'Government & Access Control',
    experience: experiences[3],
    summary:
      'Engineered JWT authentication, role-based access control, admin user impersonation, database audit logging, and REST APIs.',
    architecture: ['JWT Authentication', 'RBAC Authorization', 'Admin Impersonation', 'Laravel Auditor', 'REST API'],
  },
  {
    id: 'lamptip',
    code: 'SYS-03',
    shortLabel: 'LAMPTIP Accreditation',
    domain: 'National Accreditation Portal',
    experience: experiences[2],
    summary:
      'Fullstack development, infrastructure maintenance, legacy code refactoring, and feature delivery for agricultural higher-education accreditation.',
    architecture: ['Fullstack Laravel', 'Portal Infrastructure', 'Performance Refactoring', 'Feature Delivery'],
  },
  {
    id: 'freelance',
    code: 'SYS-04',
    shortLabel: 'Fullstack Client Systems',
    domain: 'Multi-Stack Web Production',
    experience: experiences[1],
    summary:
      'End-to-end delivery of custom web applications for companies and individuals across diverse stacks with hardened security and deployment.',
    architecture: ['Fullstack Architecture', 'Multi-Language Stack', 'Security Hardening', 'Production Deployment'],
  },
  {
    id: 'upt-tik',
    code: 'SYS-05',
    shortLabel: 'UPT TIK UNS Systems',
    domain: 'University Infrastructure',
    experience: experiences[8],
    summary:
      'Co-developed Report-PBJ for university procurement workflows and updated Domain-MS for campus-wide domain management at UNS.',
    architecture: ['Report-PBJ Procurement', 'Domain-MS Management', 'Campus Infrastructure', 'Security Outreach'],
  },
  {
    id: 'meiwa',
    code: 'SYS-06',
    shortLabel: 'Meiwa Internal Systems',
    domain: 'Manufacturing Operations',
    experience: experiences[4],
    summary:
      'Normalized portal database schemas, rebuilt inventory management, created a leave-request system from scratch, and managed LAN/CCTV infrastructure.',
    architecture: ['Inventory Management', 'Leave Request App', 'Database Normalization', 'Portal Modernization'],
  },
  {
    id: 'rapixus',
    code: 'SYS-07',
    shortLabel: 'Rapixus VANS Security',
    domain: 'Vulnerability Operations',
    experience: experiences[5],
    summary:
      'Operated RapixEngine VANS for automated vulnerability scanning, CPE asset inventory management, CVSS monitoring, and patch remediation.',
    architecture: ['RapixEngine VANS', 'CPE Asset Inventory', 'CVSS Risk Monitoring', 'Patch Remediation'],
  },
]

export const selectedResearch = {
  title: 'Dual-View Radiographic Captioning',
  subtitle: 'Chest X-ray frontal and lateral views using DenseNet-LSTM',
  type: 'Undergraduate thesis',
  period: '2024 - 2026',
  institution: 'Universitas Sebelas Maret',
  description:
    'Extracts visual features from paired frontal and lateral chest X-rays using DenseNet and decodes them through an LSTM network into clinical radiology descriptions.',
  tags: ['Computer Vision', 'Deep Learning', 'DenseNet-LSTM', 'Medical Imaging'],
}

export const perspectiveDomains = [
  {
    code: 'ENT',
    name: 'Enterprise & Government Web',
    meta: 'Paragon HR Tech · DISPERKIMTAN Bontang · LAMPTIP · Freelance Fullstack',
    detail: 'Authentication architectures, RBAC, audit logging, and legacy refactoring.',
  },
  {
    code: 'UNI',
    name: 'Academic & AI Research',
    meta: 'Universitas Sebelas Maret (GPA 3.77) · UPT TIK UNS · Bangkit ML · Teaching Assistant',
    detail: 'Medical X-ray captioning, campus procurement/domain apps, and teaching 5 CS courses.',
  },
  {
    code: 'SEC',
    name: 'Cybersecurity & Risk Ops',
    meta: 'Rapixus VANS Platform · ISHC-RG UNS · Web Security Book Author',
    detail: 'CPE asset tracking, CVSS vulnerability remediation, and portal security research.',
  },
  {
    code: 'OPS',
    name: 'Internal & Industrial Tooling',
    meta: 'Meiwa Industry · SPMB UNS · Dinas Pendidikan Karanganyar',
    detail: 'Inventory & leave workflows, database normalization, and high-volume admissions support.',
  },
]

export const chapters = [
  { id: 'hero', label: 'Origin', object: 'Signal Core & Processor' },
  { id: 'work', label: 'Systems', object: 'Multi-Layer Engineering Stack' },
  { id: 'research', label: 'Intelligence', object: 'DenseNet-LSTM Neural Pipeline' },
]
