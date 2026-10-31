export interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
  detail: string;
}

export interface SkillItem {
  name: string;
  category: 'database' | 'sql-dev' | 'performance' | 'advanced-sql';
  icon: string;
  badge?: string;
  description: string;
  keywords: string[];
}

export interface ExpertisePillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  highlights: string[];
  benchmark: string;
}

export interface ArchitectureLayer {
  step: number;
  name: string;
  role: string;
  details: string;
  icon: string;
  accent: string;
}

export interface CodeSnippet {
  id: string;
  tabTitle: string;
  title: string;
  subtitle: string;
  engine: string;
  code: string;
  explanation: string[];
  metrics: {
    label: string;
    value: string;
    badgeClass?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  dbEngine: string[];
  responsibilities: string[];
  sqlConcepts: string[];
  schemaHighlights: {
    tablesCount: number;
    procsCount: number;
    viewsCount: number;
    optimizationGain: string;
  };
  sampleSqlSnippet?: string;
  icon: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
  keyAchievements: string[];
}

export interface SchemaColumn {
  name: string;
  type: string;
  isPk?: boolean;
  isFk?: boolean;
  isNullable?: boolean;
  references?: string;
}

export interface SchemaTable {
  id: string;
  name: string;
  group: 'Security & Auth' | 'CRM & Billing';
  description: string;
  columns: SchemaColumn[];
  indexes: string[];
  rowEstimate: string;
}

export interface ToolItem {
  name: string;
  category: 'RDBMS' | 'GUI & IDE' | 'DevOps & API';
  icon: string;
  description: string;
  proficiency: string;
  tag: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
  statusText: string;
  availableForHire: boolean;
}
