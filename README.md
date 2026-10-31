# Premium SQL Developer & Database Architect Portfolio (Angular 19)

A modern, high-performance developer dashboard portfolio built specifically for **SQL Developers, Database Developers, and Database Architects**. Built with **Angular 19**, TypeScript, and SCSS, featuring a dark terminal dashboard aesthetic with subtle cyan glowing accents, glassmorphic cards, realistic T-SQL code consoles, and interactive database architecture diagrams.

---

## ⚡ Tech Stack

- **Framework**: Angular 19 (Standalone Components, Signals API)
- **Language**: TypeScript 5.7
- **Styling**: SCSS (CSS Variables, Glassmorphism, Neon glow tokens)
- **Grid & Layout**: Bootstrap 5 + Custom Flexbox/Grid
- **Icons**: FontAwesome 6 Free + SVG Vector Icons
- **Code Highlighting**: PrismJS with SQL syntax support
- **Architecture**: Zero-backend frontend UI (pure client-side SPA)

---

## 🚀 Key Sections & Features

1. **Sticky Top Navigation** (`NavbarComponent`)
   - Brand logo with glowing database icon
   - Section scroll spy tracking active navigation state
   - One-click **Download Resume** button
   - Responsive mobile drawer menu

2. **Hero Section** (`HeroComponent`)
   - Headline: **SQL Developer & Database Developer**
   - Subtitle emphasizing reliability, query optimization, and scalability
   - Technology badges (SQL Server, T-SQL, PostgreSQL, MySQL, Database Design, Stored Procedures, Query Optimization)
   - Live availability indicator (`🟢 Available for opportunities`)
   - **Interactive Database Console**: An SSMS-inspired code editor featuring `SELECT Developer, Database, Performance FROM Portfolio WHERE Expertise = 'SQL';` with a clickable **Execute (F5)** button, simulated sub-millisecond execution time, and real tabular Results Grid & graphical Execution Plan view.

3. **About Me** (`AboutComponent`)
   - Professional narrative focusing on database reliability, ACID integrity, and query performance
   - Editable statistics cards (`3+ Years Experience`, `50+ SQL Procedures`, `20+ Database Modules`, `85% SQL Performance Gain`)
   - Core database engineering pillars (ACID Durability, Execution Plan Surgery, 3NF Relational Architecture, Set-Based Logic)

4. **Technical Skills** (`SkillsComponent`)
   - Filterable categories: **Database & Engines**, **SQL Development**, **Performance Optimization**, and **Advanced SQL & Analytics**
   - 28 granular database skill cards featuring icons, proficiency tags, and keywords (SSMS, Clustered/Non-Clustered Indexes, CTEs, Window Functions, Deadlock Analysis, PIVOT, Dynamic SQL)

5. **SQL Expertise & Flow Visualization** (`SqlExpertiseComponent`)
   - Visual data pipeline flow with animated flowing pulses:
     `Application ➔ API / Business Layer ➔ Stored Procedures ➔ SQL Queries ➔ Indexes ➔ Database Engine`
   - Detailed deep-dive cards for **Query Optimization**, **Database Design**, **Stored Procedures**, and **Performance Tuning** with real production impact benchmarks

6. **SQL Code Showcase** (`CodeShowcaseComponent`)
   - Production code editor with line numbers, copy button, and architectural insights
   - 5 interactive tabs:
     - **Complex Queries**: Multi-table financial running balances with `ROWS BETWEEN` window frames
     - **Stored Procedures**: Atomic voucher posting with `TVP` (Table-Valued Parameters), `SET XACT_ABORT ON`, and `TRY...CATCH`
     - **CTE & Hierarchy**: Recursive chart of accounts tree traversal with depth control
     - **Window Functions**: `DENSE_RANK()`, `LEAD()`, and `LAG()` for executive rankings and salary step-changes
     - **Performance Tuning**: Before vs After removing non-SARGable wrappers and building filtered covering indexes (reducing reads from 48,210 to 6)

7. **Projects Portfolio** (`ProjectsComponent` & `ProjectModalComponent`)
   - **Financial Management System**: Double-entry ledger, vouchers, TVP bulk inserts, and ACID transactions
   - **Student Management System**: Prerequisite trees with recursive CTEs, semester GPA analytics, and exam ranking
   - **Lead Management & CRM System**: Recurring subscription billing cycles, PIVOT sales reports, and filtered indexes
   - **High-Throughput Inventory Ledger**: Concurrency-safe stock reservation using `UPDLOCK, ROWLOCK` and RCSI
   - In-depth **View Details Modal** with schema stats, table counts, responsibilities, and full T-SQL stored procedure code snippets

8. **Experience Timeline** (`ExperienceComponent`)
   - Vertical timeline showcasing roles, companies, durations, and heavily database-centric responsibilities
   - Measurable production achievements (e.g., *68% latency reduction*, *100% deadlock elimination*, *sub-second commits*)

9. **Database Architecture & ER Diagrams** (`ArchitectureComponent`)
   - Interactive schema visualizer for two enterprise domains:
     - **Security & RBAC**: `Users ➔ Roles ➔ Permissions ➔ Modules`
     - **CRM & Billing**: `Customers ➔ Leads, Services, Payments, Invoices`
   - Clickable table inspector showing Primary Keys (PK), Foreign Keys (FK), column datatypes, nullability, and configured B-Tree indexes

10. **Tools Ecosystem** (`ToolsComponent`)
    - Compact cards with icons: SQL Server, SSMS, PostgreSQL, MySQL, Git, Visual Studio, VS Code, Postman, Swagger

11. **Contact Section** (`ContactComponent`)
    - Heading: *Let's Build Better Data Solutions*
    - Direct communication channels (Email, LinkedIn, GitHub, Location)
    - Interactive contact form UI with validation and transmitted feedback banner
    - One-click copy email button

12. **Footer** (`FooterComponent`)
    - Minimal dark design with copyright, social links, quick navigation jumps, and back-to-top button

---

## 🛠️ Project Structure

```text
src/
├── app/
│   ├── models/
│   │   └── portfolio.model.ts      # TypeScript interfaces for all data structures
│   ├── data/
│   │   └── portfolio.data.ts       # Central data file (easy to customize!)
│   ├── services/
│   │   └── portfolio.service.ts    # Reactive state management with Angular Signals
│   ├── components/
│   │   ├── navbar/                 # Sticky navigation & mobile drawer
│   │   ├── hero/                   # Hero section & interactive SQL console
│   │   ├── about/                  # Bio, statistics & engineering principles
│   │   ├── skills/                 # Categorized skills grid with filters
│   │   ├── sql-expertise/          # Data flow pipeline & expertise cards
│   │   ├── code-showcase/          # Tabbed code editor with realistic T-SQL
│   │   ├── projects/               # Database project cards
│   │   ├── project-modal/          # Deep dive project schema modal
│   │   ├── experience/             # Vertical career timeline
│   │   ├── architecture/           # Interactive ER diagram & table inspector
│   │   ├── tools/                  # Developer tools & IDE cards
│   │   ├── contact/                # Contact information & interactive form
│   │   └── footer/                 # Minimal developer footer
│   ├── app.component.ts            # Root component
│   ├── app.component.html
│   └── app.component.scss
├── styles.scss                     # Design system (colors, glassmorphism, terminal theme)
└── index.html                      # HTML5 entry with Inter & JetBrains Mono fonts
```

---

## 🔧 How to Customize Your Portfolio

All data (name, contact info, statistics, projects, experience, SQL snippets, schema tables) is cleanly decoupled into:

👉 [`src/app/data/portfolio.data.ts`](src/app/data/portfolio.data.ts)

Simply open this file and update:
- `CONTACT_INFO`: Your name, email, LinkedIn, GitHub, and location
- `STATS_DATA`: Years of experience, stored procedures count, modules built
- `PROJECTS_DATA`: Your custom project descriptions, schema stats, and SQL snippets
- `EXPERIENCES_DATA`: Your work history, companies, and achievements
- `CODE_SNIPPETS`: Any custom queries you'd like to showcase

---

## 💻 Running Locally

### Prerequisites
- Node.js LTS (v20+ or v22+)
- npm (v10+)

### Start Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser.

### Build Production Bundle
```bash
npm run build
```
Compiled production files will be output to `dist/sql-portfolio/browser`.
