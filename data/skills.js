const categories = [
  {
    name: 'Visualization & BI',
    items: [
      {
        title: 'Tableau',
        description: 'Interactive dashboards, KPI monitoring, executive reporting, heatmaps',
      },
      {
        title: 'Power BI',
        description: 'Advanced dashboards, DAX, automation, KPI tracking, ad-hoc reporting',
      },
      {
        title: 'Advanced Excel',
        description: 'Pivot tables, Power Query, Power Pivot, complex formulas, VBA macros',
      },
      {
        title: 'Cognos BI',
        description: 'Report migration, dashboard automation, SQL optimization',
      },
    ],
  },
  {
    name: 'Programming & Analytics',
    items: [
      {
        title: 'SQL (SQL Server, MySQL, PostgreSQL, Oracle)',
        description: 'Complex queries, window functions, CTEs, indexing, query optimization, stored procedures',
      },
      {
        title: 'Python (Pandas, NumPy, scikit-learn)',
        description: 'Data manipulation, cleaning, statistical analysis, predictive modeling, cohort/funnel analysis',
      },
      {
        title: 'R',
        description: 'Statistical modeling, regression analysis, predictive analytics',
      },
    ],
  },
  {
    name: 'Data Engineering & ETL',
    items: [
      {
        title: 'Informatica PowerCenter',
        description: 'ETL workflows, CDC pipelines, automation, data integration',
      },
      {
        title: 'Data Modeling',
        description: 'Star/Snowflake schema, fact & dimension tables, OLAP models, historical tracking (SCD1/2)',
      },
      {
        title: 'Data Quality & Validation',
        description: 'Pipeline validation, null checks, referential integrity, reconciliation, auditing',
      }
    ],
  },
  {
    name: 'Cloud & Development Tools',
    items: [
      {
        title: 'AWS',
        description: 'S3, Redshift, Lambda, cloud data solutions, ETL migration',
      },
      {
        title: 'Git / Version Control',
        description: 'Code collaboration, branching, version management',
      },
      {
        title: 'Jira & Agile Tools',
        description: 'Sprint planning, task tracking, workflow management, cross-team coordination',
      },
      {
        title: 'ServiceNow / Slack',
        description: 'Incident tracking, communication, collaboration, change requests',
      },
    ],
  },
  {
    name: 'Healthcare Domain Expertise',
    items: [
      {
        title: 'Claims & Utilization Analytics',
        description: 'Claims processing, denials analysis, utilization metrics, population health insights',
      },
      {
        title: 'Member Enrollment & Eligibility',
        description: 'Enrollment tracking, eligibility verification, plan management',
      },
      {
        title: 'Provider Network Analytics',
        description: 'Provider performance, network adequacy, referral patterns',
      },
      {
        title: 'Regulatory Compliance & Reporting',
        description: 'HIPAA, ICD-10, CMS reporting, audit readiness, governance alignment',
      },
      {
        title: 'Member Behavior & Engagement Analysis',
        description: 'Cohort analysis, retention tracking, drop-off identification, engagement KPIs',
      },
    ],
  },
  {
    name: 'Marketing & Fundraising Analytics',
    items: [
      {
        title: 'Email Campaign Analytics',
        description: 'Open rates, CTR, CTOR, A/B testing, segmentation, predictive targeting',
      },
      {
        title: 'Donor & Alumni Data Analysis',
        description: 'Prospect research, engagement tracking, cohort analysis, fundraising insights',
      },
      {
        title: 'KPI Development & Reporting',
        description: 'Marketing and advancement KPIs, dashboard creation, executive insights',
      },
      {
        title: 'Predictive Modeling & Segmentation',
        description: 'Click propensity, regression models, classification, cohort targeting',
      },
    ],
  },
  {
    name: 'Analytics & Optimization',
    items: [
      {
        title: 'Exploratory Data Analysis (EDA)',
        description: 'Trend identification, anomaly detection, root-cause analysis, pattern discovery',
      },
      {
        title: 'A/B Testing & Experimentation',
        description: 'Hypothesis testing, conversion optimization, statistically powered validation',
      },
      {
        title: 'Funnel & Cohort Analysis',
        description: 'User journey tracking, retention metrics, behavior segmentation, drop-off identification',
      },
      {
        title: 'Process Automation',
        description: 'Workflow optimization, ETL automation, script development, manual task reduction',
      },
    ],
  },
  {
    name: 'Professional Skills',
    items: [
      {
        title: 'Data Storytelling',
        description: 'Translating complex analysis into actionable, executive-ready insights',
      },
      {
        title: 'Stakeholder Management',
        description: 'Cross-functional collaboration, requirement gathering, executive communication',
      },
      {
        title: 'Problem Solving & Critical Thinking',
        description: 'Root cause analysis, hypothesis-driven investigation, optimization opportunities',
      },
      {
        title: 'Autonomous Execution',
        description: 'Self-directed project delivery, proactive issue identification, minimal supervision',
      },
      {
        title: 'Project Management',
        description: 'Timeline management, deliverable tracking, reporting updates, agile delivery',
      },
      {
        title: 'Ambiguity Navigation',
        description: 'Defining scope from vague requirements, prioritizing competing needs, adaptable approach',
      },
    ],
  },
]

export default categories
