import { Injectable, signal } from '@angular/core';
import {
  CONTACT_INFO,
  STATS_DATA,
  SKILLS_DATA,
  ARCHITECTURE_LAYERS,
  EXPERTISE_PILLARS,
  CODE_SNIPPETS,
  PROJECTS_DATA,
  EXPERIENCES_DATA,
  SCHEMA_TABLES,
  TOOLS_DATA
} from '../data/portfolio.data';
import {
  ContactInfo,
  ExperienceItem,
  ExpertisePillar,
  ArchitectureLayer,
  CodeSnippet,
  ProjectItem,
  SchemaTable,
  SkillItem,
  StatItem,
  ToolItem
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Reactive Signals for portfolio state
  readonly contactInfo = signal<ContactInfo>(CONTACT_INFO);
  readonly stats = signal<StatItem[]>(STATS_DATA);
  readonly skills = signal<SkillItem[]>(SKILLS_DATA);
  readonly architectureLayers = signal<ArchitectureLayer[]>(ARCHITECTURE_LAYERS);
  readonly expertisePillars = signal<ExpertisePillar[]>(EXPERTISE_PILLARS);
  readonly codeSnippets = signal<CodeSnippet[]>(CODE_SNIPPETS);
  readonly projects = signal<ProjectItem[]>(PROJECTS_DATA);
  readonly experiences = signal<ExperienceItem[]>(EXPERIENCES_DATA);
  readonly schemaTables = signal<SchemaTable[]>(SCHEMA_TABLES);
  readonly tools = signal<ToolItem[]>(TOOLS_DATA);

  // Active section for navigation highlight
  readonly activeSection = signal<string>('home');

  // Selected project for modal deep dive
  readonly selectedProject = signal<ProjectItem | null>(null);

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }

  openProjectModal(project: ProjectItem): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  downloadResume(): void {
    const resumeContent = `========================================================================
ALEX MERCER — SENIOR SQL DEVELOPER & DATABASE ARCHITECT
========================================================================
Email: ${this.contactInfo().email}
LinkedIn: ${this.contactInfo().linkedin}
GitHub: ${this.contactInfo().github}
Location: ${this.contactInfo().location}
Status: Available for opportunities

PROFESSIONAL SUMMARY
------------------------------------------------------------------------
Specialized SQL Developer & Database Developer with 3+ years of experience
architecting high-throughput relational databases, designing complex stored
procedures, and eliminating performance bottlenecks across enterprise
applications in SQL Server, PostgreSQL, and MySQL. Proven track record
reducing query I/O reads by up to 99%, designing normalized 3NF schemas,
and building bulletproof transactional systems for finance and ERP domains.

CORE TECHNICAL SKILLS
------------------------------------------------------------------------
* Relational Engines: SQL Server (2019/2022), PostgreSQL (15/16), MySQL (8.0)
* Procedural SQL: T-SQL, PL/pgSQL, Stored Procedures, UDFs, Triggers
* Query Tuning: Execution Plans, SARGable Predicates, Index Seeks, Extended Events
* Index Architecture: Clustered, Non-Clustered Covering (INCLUDE), Filtered Indexes
* Advanced SQL: Window Functions (ROW_NUMBER, DENSE_RANK, LEAD, LAG), CTEs, PIVOT
* Concurrency: ACID Transactions, RCSI, Deadlock Graph Analysis, Row-Level Locks
* Tools: SSMS, SSDT, Visual Studio, VS Code, Git, Postman, Profiler

PROFESSIONAL EXPERIENCE
------------------------------------------------------------------------
Apex Data Systems & Enterprise Solutions | Senior SQL & Database Developer
2023 - Present | Chicago, IL
- Architected and tuned mission-critical SQL Server databases handling $25M+ in
  monthly financial transactions with sub-second commit times.
- Formulated 40+ complex stored procedures with Table-Valued Parameters (TVPs).
- Reduced peak-hour query latency by 68% and eliminated 100% of deadlock graph
  conflicts through lock ordering and Read Committed Snapshot Isolation (RCSI).
- Designed indexed views and set-based analytics replacing slow cursor jobs.

CoreMatrix Software Solutions | SQL Developer & Database Engineer
2021 - 2023 | Chicago, IL
- Developed relational schemas and stored procedures for CRM, Lead Management,
  and Academic ERP systems.
- Accelerated student semester grade calculation queries from 45 min to 3.5 min.
- Designed covering non-clustered indexes with INCLUDE lists, eliminating Key Lookups.
- Automated weekly database maintenance: integrity checks, index rebuilds, stats.

FEATURED DATABASE PROJECTS
------------------------------------------------------------------------
1. Financial Management System (SQL Server, T-SQL, Indexed Views)
   - Double-entry accounting database with payment, receipt, and journal vouchers.
   - Enforced atomic transaction rollbacks with XACT_ABORT and TRY...CATCH.

2. Student Management System (SQL Server, PostgreSQL, T-SQL)
   - Academic database handling registrations, prerequisites via recursive CTEs,
     and weighted GPA analytics with DENSE_RANK().

3. Lead Management & CRM System (SQL Server, T-SQL, SSMS)
   - High-conversion sales pipeline tracking, recurring billing automation,
     and revenue dashboards via PIVOT queries.

========================================================================
Generated from Alex Mercer's Portfolio — SQL & Database Developer
========================================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alex_Mercer_SQL_Developer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}
