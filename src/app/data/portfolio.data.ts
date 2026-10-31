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

export const CONTACT_INFO: ContactInfo = {
  name: 'Alex Mercer',
  role: 'SQL Developer & Database Developer',
  email: 'alex.mercer.sqldev@outlook.com',
  linkedin: 'https://linkedin.com/in/alexmercer-sql',
  github: 'https://github.com/alexmercer-db',
  location: 'Chicago, IL (Open to Remote & Hybrid)',
  statusText: 'Available for opportunities',
  availableForHire: true
};

export const STATS_DATA: StatItem[] = [
  {
    value: '3+',
    label: 'Years Experience',
    icon: 'fa-solid fa-clock-rotate-left',
    detail: 'Enterprise Relational DBs & Data Pipelines'
  },
  {
    value: '50+',
    label: 'SQL Procedures',
    icon: 'fa-solid fa-gears',
    detail: 'Complex Business Logic, TVPs & Transactions'
  },
  {
    value: '20+',
    label: 'Database Modules',
    icon: 'fa-solid fa-cubes-stacked',
    detail: 'Finance, ERP, Student & Lead Architectures'
  },
  {
    value: '85%',
    label: 'SQL Performance Gain',
    icon: 'fa-solid fa-bolt',
    detail: 'Average Execution Time & I/O Reduction'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Database
  {
    name: 'SQL Server',
    category: 'database',
    icon: 'fa-solid fa-server',
    badge: 'Primary Engine',
    description: 'Relational engine setup, isolation levels, buffer pools, tempdb configuration, and maintenance plans.',
    keywords: ['MSSQL 2019/2022', 'AlwaysOn', 'SSMS', 'Log Shipping']
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: 'fa-solid fa-database',
    badge: 'Advanced',
    description: 'PL/pgSQL functions, JSONB indexing, VACUUM tuning, EXPLAIN ANALYZE, and connection pooling.',
    keywords: ['PostgreSQL 15/16', 'PL/pgSQL', 'JSONB', 'GIN Indexes']
  },
  {
    name: 'MySQL',
    category: 'database',
    icon: 'fa-solid fa-database',
    badge: 'Production',
    description: 'InnoDB storage engine, foreign keys, slow query log diagnosis, and replication topologies.',
    keywords: ['MySQL 8.0', 'InnoDB', 'Indexes', 'Workbench']
  },
  {
    name: 'SSMS',
    category: 'database',
    icon: 'fa-solid fa-terminal',
    badge: 'Daily Driver',
    description: 'SQL Server Management Studio: Profiler, Activity Monitor, Extended Events, and execution plan dissection.',
    keywords: ['Live Query Stats', 'Extended Events', 'Activity Monitor']
  },
  {
    name: 'Database Design',
    category: 'database',
    icon: 'fa-solid fa-sitemap',
    badge: 'Core Skill',
    description: 'Conceptual, logical, and physical entity-relationship modeling for high transactional throughput.',
    keywords: ['ER Diagrams', 'Data Integrity', 'Cardinality', 'Schema Architecture']
  },
  {
    name: 'Database Normalization',
    category: 'database',
    icon: 'fa-solid fa-filter-circle-dollar',
    badge: 'Architecture',
    description: 'Applying 1NF through BCNF to eliminate data anomalies while strategically denormalizing for reporting read replicas.',
    keywords: ['1NF to 3NF', 'BCNF', 'Anomalies Prevention', 'Denormalization Strategies']
  },

  // SQL Development
  {
    name: 'T-SQL',
    category: 'sql-dev',
    icon: 'fa-solid fa-code',
    badge: 'Expert',
    description: 'Transact-SQL procedural logic, error trapping with TRY...CATCH, SET XACT_ABORT, and cursors elimination.',
    keywords: ['Procedural SQL', 'Error Handling', 'Transaction Blocks']
  },
  {
    name: 'Stored Procedures',
    category: 'sql-dev',
    icon: 'fa-solid fa-microchip',
    badge: 'Heavy Usage',
    description: 'Encapsulating transactional business logic, parameter sniffing mitigation (WITH RECOMPILE / OPTIMIZE FOR).',
    keywords: ['Modular Logic', 'Pre-compiled Plans', 'Output Parameters']
  },
  {
    name: 'Functions & UDFs',
    category: 'sql-dev',
    icon: 'fa-solid fa-calculator',
    badge: 'Core',
    description: 'Inline table-valued functions (iTVFs) for maximum optimizer inlining; avoiding costly scalar cursor-like penalties.',
    keywords: ['Inline TVF', 'Multi-statement TVF', 'Scalar Functions']
  },
  {
    name: 'Views & Indexed Views',
    category: 'sql-dev',
    icon: 'fa-solid fa-eye',
    badge: 'Core',
    description: 'Abstracting complex relations and building clustered indexed views (materialized views) for aggregated reporting.',
    keywords: ['WITH SCHEMABINDING', 'Security Views', 'Indexed Views']
  },
  {
    name: 'Triggers (DML & DDL)',
    category: 'sql-dev',
    icon: 'fa-solid fa-bolt-lightning',
    badge: 'Auditing',
    description: 'AFTER and INSTEAD OF triggers for automated change data capture (CDC), history logging, and constraint enforcement.',
    keywords: ['INSERTED/DELETED', 'Audit Trails', 'INSTEAD OF']
  },
  {
    name: 'CTE (Common Table Expressions)',
    category: 'sql-dev',
    icon: 'fa-solid fa-diagram-project',
    badge: 'Daily',
    description: 'Structuring readable subquery graphs, pagination queries, and intermediate pipeline transformations.',
    keywords: ['WITH clause', 'Readability', 'De-nesting']
  },
  {
    name: 'Temporary Tables & Table Variables',
    category: 'sql-dev',
    icon: 'fa-solid fa-table-list',
    badge: 'Optimization',
    description: 'Leveraging #temp tables with explicit statistics vs @table variables based on row cardinality and recompilation cost.',
    keywords: ['#TempTables', '@TableVariables', 'TempDB Performance']
  },
  {
    name: 'Dynamic SQL',
    category: 'sql-dev',
    icon: 'fa-solid fa-arrow-right-arrow-left',
    badge: 'Secure',
    description: 'Parameterized dynamic queries utilizing sp_executesql to prevent SQL injection and promote execution plan reuse.',
    keywords: ['sp_executesql', 'Parameterization', 'SQL Injection Defense']
  },

  // Performance Optimization
  {
    name: 'Query Optimization',
    category: 'performance',
    icon: 'fa-solid fa-gauge-high',
    badge: 'Specialty',
    description: 'Identifying expensive operators (implicit conversions, Key Lookups, Spills, Hash Matches) and refactoring queries.',
    keywords: ['SARGable Queries', 'Logical Reads', 'CPU Cost Reduction']
  },
  {
    name: 'Execution Plans Analysis',
    category: 'performance',
    icon: 'fa-solid fa-chart-line',
    badge: 'Deep Dive',
    description: 'Reading graphical and XML execution plans, comparing Estimated vs Actual rows to spot stale statistics.',
    keywords: ['Actual vs Estimated', 'Operator Costs', 'Predicate Pushes']
  },
  {
    name: 'Indexing Strategy',
    category: 'performance',
    icon: 'fa-solid fa-layer-group',
    badge: 'Critical',
    description: 'Architecting composite indexes matching the equality-inequality-sort access pattern to turn Scans into Seeks.',
    keywords: ['B-Tree Indexes', 'Fill Factor', 'Index Fragmentation']
  },
  {
    name: 'Clustered Index Architecture',
    category: 'performance',
    icon: 'fa-solid fa-cubes',
    badge: 'Physical Storage',
    description: 'Selecting narrow, unique, increasing clustered keys (e.g., IDENTITY/BIGINT) to minimize leaf page splits.',
    keywords: ['Physical Sort', 'Page Splits', 'Narrow Keys']
  },
  {
    name: 'Non-Clustered & Covering Indexes',
    category: 'performance',
    icon: 'fa-solid fa-shield-halved',
    badge: 'Zero-Lookup',
    description: 'Designing covering indexes with INCLUDE columns to resolve Key Lookups and speed up high-frequency lookups.',
    keywords: ['INCLUDE Columns', 'Filtered Indexes', 'Seek Predicates']
  },
  {
    name: 'Query Performance Analysis',
    category: 'performance',
    icon: 'fa-solid fa-microscope',
    badge: 'Diagnostics',
    description: 'Benchmarking through STATISTICS IO, TIME, sys.dm_exec_query_stats, and Extended Events tracing.',
    keywords: ['STATISTICS IO/TIME', 'DMVs', 'Wait Statistics']
  },
  {
    name: 'Deadlock Analysis',
    category: 'performance',
    icon: 'fa-solid fa-lock',
    badge: 'Concurrency',
    description: 'Investigating XML deadlock graphs, lock escalation, isolation level friction, and adjusting lock order.',
    keywords: ['Deadlock Graphs', 'Lock Escalation', 'READ COMMITTED SNAPSHOT']
  },

  // Advanced SQL
  {
    name: 'Complex Joins',
    category: 'advanced-sql',
    icon: 'fa-solid fa-circle-nodes',
    badge: 'Advanced',
    description: 'Mastery of INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN, and CROSS APPLY / OUTER APPLY for row-by-row TVF joins.',
    keywords: ['CROSS APPLY', 'OUTER APPLY', 'Hash vs Nested Loop']
  },
  {
    name: 'Correlated Subqueries',
    category: 'advanced-sql',
    icon: 'fa-solid fa-brackets-curly',
    badge: 'Advanced',
    description: 'Writing targeted correlated subqueries and refactoring inefficient nested loops into set-based joins.',
    keywords: ['EXISTS vs IN', 'Set-Based Logic', 'Predicate Push']
  },
  {
    name: 'Recursive CTE',
    category: 'advanced-sql',
    icon: 'fa-solid fa-network-wired',
    badge: 'Hierarchy',
    description: 'Building hierarchical graphs: employee org charts, chart of accounts tree structures, and category parent-child traversal.',
    keywords: ['Anchor & Recursive Member', 'MAXRECURSION', 'Tree Traversal']
  },
  {
    name: 'Window Functions (Row & Rank)',
    category: 'advanced-sql',
    icon: 'fa-solid fa-chart-simple',
    badge: 'Analytics',
    description: 'ROW_NUMBER(), RANK(), DENSE_RANK() with OVER(PARTITION BY ... ORDER BY ...) for top-N ranking per category.',
    keywords: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'PARTITION BY']
  },
  {
    name: 'Offset Functions (LEAD & LAG)',
    category: 'advanced-sql',
    icon: 'fa-solid fa-arrow-trend-up',
    badge: 'Time-Series',
    description: 'Period-over-period comparisons, session inactivity detection, and cumulative variance without self-joins.',
    keywords: ['LEAD()', 'LAG()', 'MoM Growth', 'Running Difference']
  },
  {
    name: 'PIVOT & UNPIVOT',
    category: 'advanced-sql',
    icon: 'fa-solid fa-table-cells',
    badge: 'Reporting',
    description: 'Transposing row data into columnar summary matrices for executive KPI dashboards and vice-versa.',
    keywords: ['Dynamic Pivot', 'Cross-Tabulation', 'UNPIVOT Normalization']
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    step: 1,
    name: 'Application Layer',
    role: 'Client & User Interfaces',
    details: 'Web dashboards, mobile apps, and third-party webhooks emitting requests and state updates.',
    icon: 'fa-solid fa-desktop',
    accent: '#00d2ff'
  },
  {
    step: 2,
    name: 'API / Business Layer',
    role: 'Service & Validation Gateway',
    details: 'REST/GraphQL microservices validating payloads, managing security tokens, and orchestrating flows.',
    icon: 'fa-solid fa-network-wired',
    accent: '#3a86ff'
  },
  {
    step: 3,
    name: 'Stored Procedures',
    role: 'Transactional Boundary & Logic',
    details: 'Precompiled procedural T-SQL encapsulating business rules, atomic transactions, and TVP validation.',
    icon: 'fa-solid fa-gears',
    accent: '#00f2fe'
  },
  {
    step: 4,
    name: 'SQL Queries',
    role: 'Optimized Set-Based Engine',
    details: 'SARGable DML statements, window functions, and CTEs engineered to avoid Cartesian overhead.',
    icon: 'fa-solid fa-code',
    accent: '#38ef7d'
  },
  {
    step: 5,
    name: 'Indexes',
    role: 'B-Tree & Covering Data Access',
    details: 'Clustered storage, non-clustered indexes with INCLUDE lists, and filtered predicates for direct seeks.',
    icon: 'fa-solid fa-layer-group',
    accent: '#f59e0b'
  },
  {
    step: 6,
    name: 'Database Engine',
    role: 'ACID Storage & Buffer Pool',
    details: 'Write-Ahead Logging (WAL), memory buffer cache, transaction durability, and multi-tenant isolation.',
    icon: 'fa-solid fa-database',
    accent: '#8b5cf6'
  }
];

export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    id: 'query-optimization',
    title: 'Query Optimization',
    subtitle: 'From Costly Table Scans to Sub-Millisecond Index Seeks',
    icon: 'fa-solid fa-bolt',
    description: 'Specializing in analyzing slow-performing SQL statements, decoding graphical execution plans, and refactoring queries to reduce CPU and I/O footprint.',
    highlights: [
      'Eliminated implicit type conversion causing non-SARGable scans',
      'Refactored scalar cursor-like UDFs into set-based Inline TVFs',
      'Optimized hash join overflows and memory grants'
    ],
    benchmark: 'Reduced 45,000 logical reads down to 18 reads on high-frequency queries'
  },
  {
    id: 'database-design',
    title: 'Database Design & Modeling',
    subtitle: 'Normalized, Scalable & Relational Architectures',
    icon: 'fa-solid fa-sitemap',
    description: 'Crafting 3NF/BCNF relational schemas with strict foreign key constraints, check constraints, default values, and surrogate key conventions.',
    highlights: [
      'Engineered multi-tenant schemas isolating tenant data securely',
      'Balanced normalization for OLTP with star-schema models for OLAP',
      'Enforced audit trails with temporal tables and CDC triggers'
    ],
    benchmark: 'Zero data inconsistency across 20+ interrelated database modules'
  },
  {
    id: 'stored-procedures',
    title: 'Stored Procedures & Logic',
    subtitle: 'High-Throughput Reusable Business Logic',
    icon: 'fa-solid fa-gears',
    description: 'Building robust procedural code encapsulating accounting vouchers, billing cycles, batch payroll, and real-time inventory reconciliations.',
    highlights: [
      'Utilized Table-Valued Parameters (TVP) for bulk insert transactions',
      'Handled errors defensively with TRY...CATCH and XACT_STATE()',
      'Defended against parameter sniffing with OPTIMIZE FOR hints'
    ],
    benchmark: 'Processed 250,000 daily transaction records with sub-second commit times'
  },
  {
    id: 'performance-tuning',
    title: 'Performance Tuning & Indexing',
    subtitle: 'B-Tree Index Design & Deadlock Elimination',
    icon: 'fa-solid fa-gauge-high',
    description: 'Architecting covering non-clustered indexes, filtered indexes for active records, and eliminating index fragmentation and blocking bottlenecks.',
    highlights: [
      'Resolved costly Key Lookups using targeted INCLUDE columns',
      'Configured RCSI (Read Committed Snapshot Isolation) to eliminate reader-writer contention',
      'Resolved deadlock graph cycles through lock ordering standards'
    ],
    benchmark: 'Eliminated 100% of peak-hour deadlock errors on production order pipelines'
  }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'complex-queries',
    tabTitle: 'Complex Queries',
    title: 'Financial Ledger & Running Balance Calculation',
    subtitle: 'High-performance running balance query utilizing window frames (ROWS BETWEEN)',
    engine: 'T-SQL / SQL Server',
    code: `-- Calculate account running balances and month-over-month variance
SELECT
    A.AccountNumber,
    A.AccountTitle,
    T.TransactionDate,
    T.VoucherNumber,
    T.DebitAmount,
    T.CreditAmount,
    -- Running balance computed in single pass over partitioned window
    SUM(T.DebitAmount - T.CreditAmount) OVER (
        PARTITION BY T.AccountId
        ORDER BY T.TransactionDate, T.TransactionId
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS RunningBalance,
    -- Rolling 30-day moving average volume
    AVG(T.DebitAmount + T.CreditAmount) OVER (
        PARTITION BY T.AccountId
        ORDER BY T.TransactionDate
        ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
    ) AS Moving30DayAverage
FROM dbo.Accounts A
INNER JOIN dbo.GeneralLedger T ON A.AccountId = T.AccountId
WHERE A.IsActive = 1
  AND T.TransactionDate >= DATEADD(YEAR, -1, SYSDATETIME());`,
    explanation: [
      'Avoids recursive self-joins by leveraging window frame ROWS BETWEEN UNBOUNDED PRECEDING',
      'Ensures single-pass index scan over (AccountId, TransactionDate, TransactionId)',
      'Computes rolling 30-day cash flow metrics directly on the database engine'
    ],
    metrics: [
      { label: 'Time Complexity', value: 'O(N log N) via Window Sort', badgeClass: 'badge-accent' },
      { label: 'I/O Reduction', value: '92% vs Self-Join', badgeClass: 'badge-success' },
      { label: 'Index Utilized', value: 'IX_GL_AccountId_Date', badgeClass: 'badge-info' }
    ]
  },
  {
    id: 'stored-procedures',
    tabTitle: 'Stored Procedures',
    title: 'Atomic Voucher Posting with TVP & Robust Concurrency',
    subtitle: 'Production-grade stored procedure with XACT_ABORT, error trapping, and TVP bulk insertion',
    engine: 'T-SQL / SQL Server',
    code: `CREATE OR ALTER PROCEDURE dbo.usp_PostFinancialVoucher
    @CompanyId      INT,
    @VoucherTypeId  INT,
    @CreatedBy      INT,
    @VoucherDate    DATE,
    @VoucherItems   dbo.VoucherItemType READONLY, -- Table-Valued Parameter
    @NewVoucherId   BIGINT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON; -- Rollback immediately on run-time error

    DECLARE @DebitSum  DECIMAL(18, 4);
    DECLARE @CreditSum DECIMAL(18, 4);

    -- 1. Validate Double-Entry Accounting Invariant
    SELECT
        @DebitSum  = COALESCE(SUM(Debit), 0.0),
        @CreditSum = COALESCE(SUM(Credit), 0.0)
    FROM @VoucherItems;

    IF (@DebitSum <> @CreditSum) OR (@DebitSum = 0)
    BEGIN
        THROW 50001, 'Voucher debits must equal credits and exceed zero.', 1;
    END;

    BEGIN TRY
        BEGIN TRANSACTION;

        -- 2. Insert Voucher Header with sequential voucher numbering
        INSERT INTO dbo.VoucherHeaders (CompanyId, VoucherTypeId, VoucherDate, TotalAmount, CreatedBy, CreatedAt)
        VALUES (@CompanyId, @VoucherTypeId, @VoucherDate, @DebitSum, @CreatedBy, SYSDATETIME());

        SET @NewVoucherId = SCOPE_IDENTITY();

        -- 3. Bulk insert details from TVP (zero cursor overhead)
        INSERT INTO dbo.VoucherDetails (VoucherId, AccountId, Narration, Debit, Credit)
        SELECT @NewVoucherId, AccountId, Narration, Debit, Credit
        FROM @VoucherItems;

        -- 4. Audit Log
        INSERT INTO dbo.VoucherAuditLog (VoucherId, ActionCode, ExecutedBy, ExecutedAt)
        VALUES (@NewVoucherId, 'POSTED', @CreatedBy, SYSDATETIME());

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF XACT_STATE() <> 0
            ROLLBACK TRANSACTION;

        -- Log & re-throw error for application stack
        EXEC dbo.usp_LogError;
        THROW;
    END CATCH;
END;`,
    explanation: [
      'Guarantees ACID compliance with strict double-entry balance validation before lock acquisition',
      'Accepts TVP (Table-Valued Parameter) to post 1,000+ line items in a single set-based INSERT',
      'Defensive error handling with XACT_STATE() check prevents orphaned uncommitted transactions'
    ],
    metrics: [
      { label: 'Latency', value: '14ms for 500-line Voucher', badgeClass: 'badge-success' },
      { label: 'ACID Level', value: 'Serializable Isolation', badgeClass: 'badge-accent' },
      { label: 'Cursor Elimination', value: '100% Set-Based', badgeClass: 'badge-info' }
    ]
  },
  {
    id: 'cte',
    tabTitle: 'CTE & Hierarchy',
    title: 'Recursive Chart of Accounts / Organizational Hierarchy',
    subtitle: 'Traversing arbitrary multi-level nested parent-child trees using Recursive CTE',
    engine: 'T-SQL / ANSI SQL',
    code: `WITH AccountHierarchyCTE AS
(
    -- Anchor Member: Root top-level accounts (Assets, Liabilities, Equity, etc.)
    SELECT
        AccountId,
        AccountTitle,
        ParentAccountId,
        AccountCode,
        0 AS HierarchyLevel,
        CAST(AccountCode AS VARCHAR(500)) AS TreePath
    FROM dbo.ChartOfAccounts
    WHERE ParentAccountId IS NULL AND IsActive = 1

    UNION ALL

    -- Recursive Member: Traverse all child and sub-ledger levels
    SELECT
        C.AccountId,
        C.AccountTitle,
        C.ParentAccountId,
        C.AccountCode,
        H.HierarchyLevel + 1 AS HierarchyLevel,
        CAST(H.TreePath + ' > ' + C.AccountCode AS VARCHAR(500)) AS TreePath
    FROM dbo.ChartOfAccounts C
    INNER JOIN AccountHierarchyCTE H ON C.ParentAccountId = H.AccountId
    WHERE C.IsActive = 1
)
SELECT
    AccountId,
    REPLICATE('    ', HierarchyLevel) + AccountTitle AS VisualHierarchy,
    AccountCode,
    HierarchyLevel,
    TreePath
FROM AccountHierarchyCTE
ORDER BY TreePath
OPTION (MAXRECURSION 50);`,
    explanation: [
      'Gracefully unpacks n-depth tree hierarchies without fixed procedural looping',
      'Constructs breadcrumb visual path (TreePath) for fast breadcrumb navigation',
      'Guards against cyclic relationship infinite loops via OPTION (MAXRECURSION 50)'
    ],
    metrics: [
      { label: 'Tree Depth', value: 'Supports up to 50 Levels', badgeClass: 'badge-info' },
      { label: 'Memory', value: 'TempDB Worktable Streamed', badgeClass: 'badge-accent' },
      { label: 'Traversal Cost', value: 'Index Seek on ParentAccountId', badgeClass: 'badge-success' }
    ]
  },
  {
    id: 'window-functions',
    tabTitle: 'Window Functions',
    title: 'Top-N Salaries & Period-Over-Period Salary Variance',
    subtitle: 'Using DENSE_RANK(), LEAD(), and LAG() to compute executive rankings and step changes',
    engine: 'T-SQL / PostgreSQL / MySQL',
    code: `WITH EmployeeAnalytics AS
(
    SELECT
        DepartmentId,
        EmployeeId,
        FullName,
        Salary,
        HireDate,
        -- Dense rank without gaps in ties
        DENSE_RANK() OVER (
            PARTITION BY DepartmentId
            ORDER BY Salary DESC
        ) AS SalaryRankInDept,
        -- Salary of the previous hire in the same department
        LAG(Salary, 1) OVER (
            PARTITION BY DepartmentId
            ORDER BY HireDate ASC
        ) AS PriorHireSalary,
        -- Salary difference compared to prior employee
        Salary - LAG(Salary, 1) OVER (
            PARTITION BY DepartmentId
            ORDER BY HireDate ASC
        ) AS SalaryVariance
    FROM dbo.Employees
    WHERE Status = 'Active'
)
SELECT
    DepartmentId,
    EmployeeId,
    FullName,
    Salary,
    SalaryRankInDept,
    PriorHireSalary,
    SalaryVariance
FROM EmployeeAnalytics
WHERE SalaryRankInDept <= 3
ORDER BY DepartmentId, SalaryRankInDept;`,
    explanation: [
      'Extracts Top 3 compensated employees per department cleanly without subquery joins',
      'Uses LAG() to evaluate compensation drift between successive hiring waves',
      'Evaluates all analytic calculations in a single partition pass over indexed columns'
    ],
    metrics: [
      { label: 'Partitions', value: 'Dynamic per DepartmentId', badgeClass: 'badge-accent' },
      { label: 'Eliminates', value: 'Correlated Subqueries', badgeClass: 'badge-success' },
      { label: 'Read Count', value: '1 Clustered Index Seek', badgeClass: 'badge-info' }
    ]
  },
  {
    id: 'performance',
    tabTitle: 'Performance Tuning',
    title: 'Before vs After: Eliminating Key Lookups & Table Scans',
    subtitle: 'Transforming an expensive 48,000-read Clustered Table Scan into a 4-read Covering Seek',
    engine: 'T-SQL Execution Tuning',
    code: `/* ====================================================================
   PROBLEM: Non-SARGable Function Call & Missing Covering Index
   Execution Cost: 48,210 Logical Reads, Duration: 1,840ms (Table Scan)
   ==================================================================== */
-- SLOW VERSION:
-- SELECT InvoiceId, CustomerId, InvoiceTotal, DueDate
-- FROM dbo.Invoices
-- WHERE YEAR(InvoiceDate) = 2024 AND Status = 'PAID';

/* ====================================================================
   SOLUTION:
   1. Refactor WHERE predicate into SARGable date range boundary.
   2. Create targeted Filtered Covering Index with INCLUDE columns.
   ==================================================================== */

-- Step 1: Create the optimal covering index
CREATE NONCLUSTERED INDEX IX_Invoices_Status_InvoiceDate
ON dbo.Invoices (Status, InvoiceDate)
INCLUDE (InvoiceId, CustomerId, InvoiceTotal, DueDate)
WHERE Status = 'PAID'; -- Filtered index saves 70% storage

-- Step 2: Optimized Query (SARGable, zero type conversions)
DECLARE @StartDate DATE = '2024-01-01';
DECLARE @EndDate   DATE = '2024-12-31';

SELECT
    InvoiceId,
    CustomerId,
    InvoiceTotal,
    DueDate
FROM dbo.Invoices WITH (FORCESEEK)
WHERE Status = 'PAID'
  AND InvoiceDate >= @StartDate
  AND InvoiceDate <= @EndDate;

-- RESULT: Logical Reads: 6 | Duration: 2ms | Index Seek (Zero Lookups)`,
    explanation: [
      'Eliminated YEAR() function wrapper on InvoiceDate which forced an engine-wide scan',
      'Constructed a Filtered Index covering only Status = PAID, reducing index footprint by 70%',
      'Covered all SELECT projection columns via INCLUDE list to achieve 0 Key Lookups'
    ],
    metrics: [
      { label: 'Logical Reads', value: '48,210 ➔ 6 (-99.9%)', badgeClass: 'badge-success' },
      { label: 'Query Duration', value: '1,840ms ➔ 2ms', badgeClass: 'badge-accent' },
      { label: 'Operator Type', value: 'Index Seek (Covering)', badgeClass: 'badge-info' }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'financial-management-system',
    name: 'Financial Management System',
    tagline: 'Enterprise Double-Entry Accounting & Ledger Database',
    shortDescription: 'High-performance SQL Server database powering core accounting workflows: payment vouchers, receipt vouchers, journal entries, and real-time trial balances.',
    fullDescription: 'Designed and deployed a mission-critical financial database engine handling millions of transactional voucher entries with strict double-entry integrity. Designed custom Table-Valued Parameters (TVPs) for batch posting, implemented atomic ACID transaction wrappers with XACT_ABORT, and built high-performance indexed views for real-time ledger generation without batch delays.',
    dbEngine: ['SQL Server 2022', 'T-SQL', 'SSMS', 'Indexed Views'],
    responsibilities: [
      'Architected 3NF relational schema enforcing strict debit-credit balancing at transaction boundaries',
      'Engineered stored procedures for Payment, Receipt, and Journal vouchers using Table-Valued Parameters',
      'Designed clustered index strategy on (AccountId, VoucherDate) minimizing page splits on high-volume entries',
      'Implemented automated ledger audit logging through AFTER INSERT/UPDATE triggers capturing previous state',
      'Optimized trial balance and balance sheet queries reducing report generation time from 2 minutes to 1.8 seconds'
    ],
    sqlConcepts: [
      'ACID Transactions',
      'Table-Valued Parameters (TVPs)',
      'TRY...CATCH & XACT_STATE()',
      'Running Balance Windowing',
      'Materialized Indexed Views',
      'Row-Level Locking'
    ],
    schemaHighlights: {
      tablesCount: 28,
      procsCount: 42,
      viewsCount: 14,
      optimizationGain: '96% Query Speedup'
    },
    sampleSqlSnippet: `CREATE PROCEDURE dbo.usp_GenerateGeneralLedger
    @AccountId INT,
    @FromDate  DATE,
    @ToDate    DATE
AS
BEGIN
    SET NOCOUNT ON;
    -- Ledger query with cumulative running balance and opening balance seed
    ;WITH OpeningBal AS (
        SELECT COALESCE(SUM(Debit - Credit), 0.0) AS Balance
        FROM dbo.VoucherDetails D
        JOIN dbo.VoucherHeaders H ON D.VoucherId = H.VoucherId
        WHERE D.AccountId = @AccountId AND H.VoucherDate < @FromDate
    )
    SELECT
        H.VoucherNumber,
        H.VoucherDate,
        D.Narration,
        D.Debit,
        D.Credit,
        (SELECT Balance FROM OpeningBal) +
        SUM(D.Debit - D.Credit) OVER (
            ORDER BY H.VoucherDate, D.DetailId
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS RunningBalance
    FROM dbo.VoucherHeaders H
    JOIN dbo.VoucherDetails D ON H.VoucherId = D.VoucherId
    WHERE D.AccountId = @AccountId AND H.VoucherDate BETWEEN @FromDate AND @ToDate
    ORDER BY H.VoucherDate, D.DetailId;
END;`,
    icon: 'fa-solid fa-file-invoice-dollar',
    color: '#00d2ff'
  },
  {
    id: 'student-management-system',
    name: 'Student Management System',
    tagline: 'Academic Records, Examinations & Fee Accounting Engine',
    shortDescription: 'Scalable educational database supporting student admissions, semester course registrations, GPA transcript calculations, and installment fee management.',
    fullDescription: 'Constructed an end-to-end academic database managing complex student enrollments, exam grading algorithms, and tuition fee schedules. Utilized recursive CTEs for prerequisite course trees, complex window ranking functions for class percentile calculations, and temporal audit tables for immutable transcript integrity.',
    dbEngine: ['SQL Server', 'PostgreSQL', 'T-SQL', 'PL/pgSQL'],
    responsibilities: [
      'Engineered normalized relational tables for Students, Departments, Courses, Prerequisites, and Semesters',
      'Developed stored procedures calculating weighted Grade Point Averages (GPA/CGPA) via window analytics',
      'Built installment fee tracking system tracking pending dues, late fee calculations, and clearance tokens',
      'Tuned examination grading queries across 15,000+ students per semester using covering composite indexes',
      'Integrated dynamic SQL search procedures enabling administrators to query records across 12 flexible filters'
    ],
    sqlConcepts: [
      'Recursive CTE (Prerequisites)',
      'DENSE_RANK() & PERCENT_RANK()',
      'Composite Unique Constraints',
      'Dynamic SQL (sp_executesql)',
      'Temporal History Tables',
      'Deadlock Prevention'
    ],
    schemaHighlights: {
      tablesCount: 22,
      procsCount: 35,
      viewsCount: 11,
      optimizationGain: '88% Faster Grade Generation'
    },
    sampleSqlSnippet: `CREATE PROCEDURE dbo.usp_CalculateSemesterRankings
    @SemesterId INT,
    @DepartmentId INT
AS
BEGIN
    SET NOCOUNT ON;
    WITH StudentGPAs AS (
        SELECT
            E.StudentId,
            S.RollNumber,
            S.FullName,
            SUM(E.ObtainedMarks * C.CreditHours) / NULLIF(SUM(C.CreditHours), 0) AS GPA
        FROM dbo.Enrollments E
        JOIN dbo.Students S ON E.StudentId = S.StudentId
        JOIN dbo.Courses C ON E.CourseId = C.CourseId
        WHERE E.SemesterId = @SemesterId AND S.DepartmentId = @DepartmentId
        GROUP BY E.StudentId, S.RollNumber, S.FullName
    )
    SELECT
        StudentId,
        RollNumber,
        FullName,
        ROUND(GPA, 2) AS SemesterGPA,
        DENSE_RANK() OVER (ORDER BY GPA DESC) AS DepartmentRank,
        PERCENT_RANK() OVER (ORDER BY GPA ASC) * 100 AS PercentileScore
    FROM StudentGPAs
    ORDER BY DepartmentRank;
END;`,
    icon: 'fa-solid fa-graduation-cap',
    color: '#3a86ff'
  },
  {
    id: 'lead-management-system',
    name: 'Lead Management & CRM System',
    tagline: 'High-Conversion Sales Funnel, Recurring Services & Invoicing Engine',
    shortDescription: 'Enterprise CRM database handling lead pipelines, client onboarding, recurring service subscriptions, automated invoice generation, and sales forecasting.',
    fullDescription: 'Designed a high-throughput CRM and revenue database architected for high concurrent read/write throughput. Built automated billing queues that process monthly service charges, track installment payment schedules, and alert account executives to decaying leads using SQL Server scheduled agent workflows.',
    dbEngine: ['SQL Server 2022', 'T-SQL', 'SSMS', 'SQL Agent'],
    responsibilities: [
      'Designed relational schema connecting Leads, Customers, Subscriptions, Payments, and Invoices',
      'Constructed automated stored procedure generating monthly recurring invoices with prorated billing logic',
      'Implemented status transition audit logs with INSTEAD OF triggers to ensure sales compliance and SLA tracking',
      'Built executive revenue KPI queries utilizing PIVOT to compare quarterly sales across product lines',
      'Tuned customer search queries using covering non-clustered indexes and filtered indexes for active accounts'
    ],
    sqlConcepts: [
      'PIVOT & UNPIVOT Aggregations',
      'Filtered Indexes (Active Status)',
      'INSTEAD OF Triggers',
      'Automated Billing Stored Procs',
      'DateMath & Proration Logic',
      'Optimistic Concurrency'
    ],
    schemaHighlights: {
      tablesCount: 25,
      procsCount: 38,
      viewsCount: 16,
      optimizationGain: '79% Reduction in I/O Reads'
    },
    sampleSqlSnippet: `CREATE PROCEDURE dbo.usp_ProcessMonthlyBillingCycle
    @BillingDate DATE
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;
    BEGIN TRANSACTION;

    -- Generate recurring invoices for all active client service subscriptions
    INSERT INTO dbo.Invoices (CustomerId, ServiceId, InvoiceDate, DueDate, Amount, Status)
    SELECT
        S.CustomerId,
        S.ServiceId,
        @BillingDate AS InvoiceDate,
        DATEADD(DAY, 15, @BillingDate) AS DueDate,
        S.MonthlyFee,
        'UNPAID'
    FROM dbo.CustomerServices S
    LEFT JOIN dbo.Invoices I
        ON S.CustomerId = I.CustomerId
        AND S.ServiceId = I.ServiceId
        AND MONTH(I.InvoiceDate) = MONTH(@BillingDate)
        AND YEAR(I.InvoiceDate) = YEAR(@BillingDate)
    WHERE S.IsActive = 1
      AND I.InvoiceId IS NULL; -- Prevent duplicate billing for current period

    COMMIT TRANSACTION;
END;`,
    icon: 'fa-solid fa-users-gear',
    color: '#00f2fe'
  },
  {
    id: 'inventory-warehouse-ledger',
    name: 'High-Throughput Inventory Ledger',
    tagline: 'Concurrency-Safe Stock Reservation & E-Commerce Warehouse Engine',
    shortDescription: 'Deadlock-free relational inventory system handling concurrent order reservations, SKU stock allocations, and supplier replenishment tracking.',
    fullDescription: 'Engineered an ultra-fast inventory management schema resilient to race conditions during viral flash sales. Utilized ROWLOCK with UPDLOCK hints to protect atomic stock decrements, avoiding deadlocks through deterministic lock acquisition ordering and Read Committed Snapshot Isolation (RCSI).',
    dbEngine: ['SQL Server', 'MySQL 8.0', 'T-SQL', 'InnoDB'],
    responsibilities: [
      'Formulated deadlock-free stock decrement algorithms using UPDLOCK, ROWLOCK transaction directives',
      'Configured Read Committed Snapshot Isolation (RCSI) to prevent reporting queries from blocking stock writes',
      'Constructed low-latency inventory availability views queried at 8,000+ requests per minute',
      'Created historical audit log with partitioned tables for multi-year audit compliance and fast archiving'
    ],
    sqlConcepts: [
      'UPDLOCK & ROWLOCK Hints',
      'Read Committed Snapshot (RCSI)',
      'Table Partitioning by Date',
      'Clustered Columnstore Archival',
      'Deterministic Lock Ordering'
    ],
    schemaHighlights: {
      tablesCount: 19,
      procsCount: 26,
      viewsCount: 8,
      optimizationGain: 'Zero Stock Race Conditions'
    },
    sampleSqlSnippet: `CREATE PROCEDURE dbo.usp_ReserveStockForOrder
    @WarehouseId INT,
    @ProductId   INT,
    @Quantity    INT,
    @OrderId     BIGINT
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;
    BEGIN TRANSACTION;

    -- Acquire exclusive row lock deterministically to prevent deadlocks
    DECLARE @AvailableQty INT;

    SELECT @AvailableQty = (QuantityOnHand - QuantityReserved)
    FROM dbo.Inventory WITH (UPDLOCK, ROWLOCK)
    WHERE WarehouseId = @WarehouseId AND ProductId = @ProductId;

    IF @AvailableQty >= @Quantity
    BEGIN
        UPDATE dbo.Inventory
        SET QuantityReserved = QuantityReserved + @Quantity,
            LastModifiedAt = SYSDATETIME()
        WHERE WarehouseId = @WarehouseId AND ProductId = @ProductId;

        INSERT INTO dbo.StockReservations (OrderId, WarehouseId, ProductId, ReservedQty, Status)
        VALUES (@OrderId, @WarehouseId, @ProductId, @Quantity, 'CONFIRMED');

        COMMIT TRANSACTION;
        SELECT 1 AS IsSuccess, 'Stock reserved successfully' AS Message;
    END
    ELSE
    BEGIN
        ROLLBACK TRANSACTION;
        SELECT 0 AS IsSuccess, 'Insufficient inventory available' AS Message;
    END;
END;`,
    icon: 'fa-solid fa-boxes-stacked',
    color: '#38ef7d'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Apex Data Systems & Enterprise Solutions',
    role: 'Senior SQL & Database Developer',
    duration: '2023 - Present',
    location: 'Chicago, IL',
    isCurrent: true,
    responsibilities: [
      'Architect, develop, and maintain high-volume SQL Server 2022 and PostgreSQL database environments for enterprise clients',
      'Formulate complex stored procedures, triggers, views, and functions supporting financial, ERP, and logistics modules',
      'Perform regular execution plan audits and query optimization, identifying missing indexes and non-SARGable code',
      'Implement Read Committed Snapshot Isolation (RCSI) and fine-tuned fill factors to resolve concurrency deadlocks',
      'Collaborate with backend engineering teams to design normalized relational schemas with strict constraint validation',
      'Generate detailed analytical reports and multi-tenant data exports utilizing advanced window functions and dynamic pivots'
    ],
    technologies: ['SQL Server 2022', 'T-SQL', 'PostgreSQL', 'SSMS', 'Query Store', 'Extended Events', 'Git'],
    keyAchievements: [
      'Decreased average execution time of high-frequency reporting queries by 68%',
      'Eliminated 100% of peak-load deadlock incidents across order processing pipelines',
      'Designed and deployed 40+ production stored procedures handling $25M+ in monthly financial transactions'
    ]
  },
  {
    id: 'exp-2',
    company: 'CoreMatrix Software Solutions',
    role: 'SQL Developer & Database Engineer',
    duration: '2021 - 2023',
    location: 'Chicago, IL',
    isCurrent: false,
    responsibilities: [
      'Developed and optimized relational database schemas for CRM, Lead Management, and Student Information Systems',
      'Constructed stored procedures utilizing Table-Valued Parameters (TVPs) for batch inserting 50,000+ daily records',
      'Designed covering non-clustered indexes with INCLUDE lists to resolve costly Key Lookups and buffer pool churn',
      'Created automated database maintenance plans including index reorganization, statistics rebuilds, and integrity checks',
      'Built historical data archiving workflows with partitioned tables to keep active transaction tables slim and responsive',
      'Wrote comprehensive database documentation, ER diagrams, data dictionaries, and naming conventions for developer onboarding'
    ],
    technologies: ['SQL Server 2019', 'T-SQL', 'MySQL', 'SSMS', 'SQL Profiler', 'Visual Studio', 'Postman'],
    keyAchievements: [
      'Accelerated student semester grading generation from 45 minutes down to 3.5 minutes',
      'Refactored legacy cursor routines into set-based T-SQL, achieving an 85% CPU load reduction',
      'Successfully migrated 12 legacy databases to SQL Server 2019 with zero data loss'
    ]
  }
];

export const SCHEMA_TABLES: SchemaTable[] = [
  // Security & Auth Group
  {
    id: 'users',
    name: 'dbo.Users',
    group: 'Security & Auth',
    description: 'Core identity entity storing authentication credentials, password salts, and account state.',
    columns: [
      { name: 'user_id', type: 'INT IDENTITY(1,1)', isPk: true },
      { name: 'username', type: 'VARCHAR(50)', isNullable: false },
      { name: 'email_hash', type: 'VARCHAR(128)', isNullable: false },
      { name: 'password_hash', type: 'CHAR(64)', isNullable: false },
      { name: 'is_active', type: 'BIT DEFAULT 1' },
      { name: 'created_at', type: 'DATETIME2 DEFAULT SYSDATETIME()' }
    ],
    indexes: ['PK_Users (user_id)', 'UQ_Users_Email (email_hash)', 'IX_Users_Active (is_active)'],
    rowEstimate: '~250K Rows'
  },
  {
    id: 'roles',
    name: 'dbo.Roles',
    group: 'Security & Auth',
    description: 'Role-Based Access Control (RBAC) tiers assigned to users.',
    columns: [
      { name: 'role_id', type: 'SMALLINT IDENTITY(1,1)', isPk: true },
      { name: 'user_id', type: 'INT', isFk: true, references: 'dbo.Users(user_id)' },
      { name: 'role_name', type: 'VARCHAR(40)', isNullable: false },
      { name: 'access_level', type: 'TINYINT', isNullable: false }
    ],
    indexes: ['PK_Roles (role_id)', 'IX_Roles_UserId (user_id)'],
    rowEstimate: '~25 Tiers'
  },
  {
    id: 'permissions',
    name: 'dbo.Permissions',
    group: 'Security & Auth',
    description: 'Fine-grained action-level authorizations mapped to roles.',
    columns: [
      { name: 'perm_id', type: 'INT IDENTITY(1,1)', isPk: true },
      { name: 'role_id', type: 'SMALLINT', isFk: true, references: 'dbo.Roles(role_id)' },
      { name: 'action_code', type: 'VARCHAR(50)', isNullable: false },
      { name: 'can_execute', type: 'BIT DEFAULT 1' }
    ],
    indexes: ['PK_Permissions (perm_id)', 'IX_Permissions_Role (role_id)'],
    rowEstimate: '~120 Codes'
  },
  {
    id: 'modules',
    name: 'dbo.Modules',
    group: 'Security & Auth',
    description: 'Application functional domain modules protected by security checks.',
    columns: [
      { name: 'module_id', type: 'SMALLINT IDENTITY(1,1)', isPk: true },
      { name: 'module_code', type: 'VARCHAR(30)', isNullable: false },
      { name: 'route_path', type: 'VARCHAR(100)', isNullable: false },
      { name: 'is_enabled', type: 'BIT DEFAULT 1' }
    ],
    indexes: ['PK_Modules (module_id)', 'UQ_Modules_Code (module_code)'],
    rowEstimate: '~40 Modules'
  },

  // CRM & Billing Group
  {
    id: 'customers',
    name: 'dbo.Customers',
    group: 'CRM & Billing',
    description: 'Enterprise business entities maintaining billing information and credit thresholds.',
    columns: [
      { name: 'customer_id', type: 'INT IDENTITY(1,1)', isPk: true },
      { name: 'company_name', type: 'VARCHAR(120)', isNullable: false },
      { name: 'tax_identifier', type: 'VARCHAR(30)' },
      { name: 'status_code', type: 'VARCHAR(20)', isNullable: false },
      { name: 'credit_limit', type: 'DECIMAL(18,2) DEFAULT 0.00' }
    ],
    indexes: ['PK_Customers (customer_id)', 'IX_Customers_Status (status_code)'],
    rowEstimate: '~85K Rows'
  },
  {
    id: 'leads',
    name: 'dbo.Leads',
    group: 'CRM & Billing',
    description: 'Potential customer prospects tracked through the sales conversion pipeline.',
    columns: [
      { name: 'lead_id', type: 'INT IDENTITY(1,1)', isPk: true },
      { name: 'customer_id', type: 'INT', isFk: true, references: 'dbo.Customers(customer_id)' },
      { name: 'pipeline_stage', type: 'VARCHAR(30)', isNullable: false },
      { name: 'estimated_val', type: 'DECIMAL(12,2)' },
      { name: 'lead_source', type: 'VARCHAR(40)' }
    ],
    indexes: ['PK_Leads (lead_id)', 'IX_Leads_Customer_Stage (customer_id, pipeline_stage)'],
    rowEstimate: '~140K Rows'
  },
  {
    id: 'services',
    name: 'dbo.Services',
    group: 'CRM & Billing',
    description: 'Active subscription service agreements and SLA commitments.',
    columns: [
      { name: 'service_id', type: 'INT IDENTITY(1,1)', isPk: true },
      { name: 'customer_id', type: 'INT', isFk: true, references: 'dbo.Customers(customer_id)' },
      { name: 'sla_tier', type: 'VARCHAR(20)', isNullable: false },
      { name: 'renewal_date', type: 'DATE', isNullable: false },
      { name: 'is_active', type: 'BIT DEFAULT 1' }
    ],
    indexes: ['PK_Services (service_id)', 'IX_Services_Active_Renewal (is_active, renewal_date)'],
    rowEstimate: '~65K Subscriptions'
  },
  {
    id: 'payments',
    name: 'dbo.Payments',
    group: 'CRM & Billing',
    description: 'Settled financial cash inflows allocated across invoices.',
    columns: [
      { name: 'payment_id', type: 'BIGINT IDENTITY(1,1)', isPk: true },
      { name: 'customer_id', type: 'INT', isFk: true, references: 'dbo.Customers(customer_id)' },
      { name: 'amount', type: 'DECIMAL(18,2)', isNullable: false },
      { name: 'payment_method', type: 'VARCHAR(30)', isNullable: false },
      { name: 'tx_hash', type: 'VARCHAR(64)', isNullable: false }
    ],
    indexes: ['PK_Payments (payment_id)', 'IX_Payments_Customer_Date (customer_id)'],
    rowEstimate: '~950K Records'
  },
  {
    id: 'invoices',
    name: 'dbo.Invoices',
    group: 'CRM & Billing',
    description: 'Billed accounts receivable records with due dates and outstanding balances.',
    columns: [
      { name: 'invoice_id', type: 'BIGINT IDENTITY(1,1)', isPk: true },
      { name: 'customer_id', type: 'INT', isFk: true, references: 'dbo.Customers(customer_id)' },
      { name: 'invoice_no', type: 'VARCHAR(35)', isNullable: false },
      { name: 'due_date', type: 'DATE', isNullable: false },
      { name: 'total_amount', type: 'DECIMAL(18,2)', isNullable: false },
      { name: 'balance_due', type: 'DECIMAL(18,2)', isNullable: false }
    ],
    indexes: ['PK_Invoices (invoice_id)', 'IX_Invoices_Customer_Balance (customer_id, balance_due)'],
    rowEstimate: '~420K Invoices'
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: 'SQL Server',
    category: 'RDBMS',
    icon: 'fa-solid fa-server',
    description: 'Enterprise relational engine, T-SQL scripting, Query Store, memory-optimized tables, and backup plans.',
    proficiency: 'Production Expert',
    tag: 'Primary Engine'
  },
  {
    name: 'SSMS',
    category: 'GUI & IDE',
    icon: 'fa-solid fa-terminal',
    description: 'SQL Server Management Studio: Graphical execution plans, Live Query Stats, Activity Monitor, and Profiler.',
    proficiency: 'Daily Workspace',
    tag: 'Advanced'
  },
  {
    name: 'PostgreSQL',
    category: 'RDBMS',
    icon: 'fa-solid fa-database',
    description: 'Open-source relational database, PL/pgSQL, EXPLAIN ANALYZE, JSONB indexing, and concurrency tuning.',
    proficiency: 'Advanced',
    tag: 'RDBMS'
  },
  {
    name: 'MySQL',
    category: 'RDBMS',
    icon: 'fa-solid fa-database',
    description: 'InnoDB engine, foreign keys, slow query log profiling, schema design, and replication setup.',
    proficiency: 'Proficient',
    tag: 'RDBMS'
  },
  {
    name: 'Git',
    category: 'DevOps & API',
    icon: 'fa-brands fa-git-alt',
    description: 'Version control for database migration scripts, Flyway/Liquibase schema changes, and team collaboration.',
    proficiency: 'Daily Use',
    tag: 'VCS & CI/CD'
  },
  {
    name: 'Visual Studio',
    category: 'GUI & IDE',
    icon: 'fa-solid fa-laptop-code',
    description: 'SQL Server Data Tools (SSDT), database projects, schema comparisons, and pre/post deployment scripts.',
    proficiency: 'Advanced',
    tag: 'SSDT & Projects'
  },
  {
    name: 'VS Code',
    category: 'GUI & IDE',
    icon: 'fa-solid fa-code',
    description: 'MSSQL extension, PostgreSQL extension, markdown schema specs, and query workbench development.',
    proficiency: 'Daily Workspace',
    tag: 'Lightweight IDE'
  },
  {
    name: 'Postman',
    category: 'DevOps & API',
    icon: 'fa-solid fa-paper-plane',
    description: 'Validating API payloads, testing database-backed endpoints, and verifying HTTP response payloads.',
    proficiency: 'Proficient',
    tag: 'API Testing'
  },
  {
    name: 'Swagger',
    category: 'DevOps & API',
    icon: 'fa-solid fa-file-code',
    description: 'Reviewing API contracts, mapping JSON schemas to relational database columns, and documenting models.',
    proficiency: 'Proficient',
    tag: 'Schema Specs'
  }
];
