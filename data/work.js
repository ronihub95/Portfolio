const items = [
  {
    jobTitle: 'Data Analyst',
    company: 'University of Central Missouri',
    companyUrl: 'https://www.ucmo.com',
    companyLogo: '/static/images/Company/UCM.png',
    startDate: '2024-06-01',
    endDate: '2025-12-12',
    location: 'Warrensburg, Missouri',
    roleType: 'Part-time',
    technologies: [
      'Tableau',
      'Excel (Advanced)',
      'Virtuous CRM',
      'A/B Testing',
      'Predictive Analytics',
      'Statistical Modeling',
      'Data Visualization',
      'Marketing KPIs'
    ],
    highlights: [
      '3.25x CTR lift in email engagement through predictive segmentation and A/B testing',
      'Improved CRM data accuracy by ~25% by cleansing and validating 100K+ records, strengthening donor research and advancement strategy'
    ],
    description: [
      'Cleansed and validated 100K+ CRM records using Excel, improving data accuracy by ~25%.',
      'Performed targeted data research identifying engagement trends for advancement strategies and donor prospecting.',
      'Analyzed 790K+ email campaign records to evaluate engagement performance using core marketing KPIs (delivery rate, open rate, CTR, CTOR, unsubscribe, spam rate), identifying gaps versus industry benchmarks.',
      'Performed time-based and content-based analysis to uncover high-performing email types and optimal send windows, revealing afternoon weekday sends and athletics-related content as key engagement drivers.',
      'Built and evaluated predictive models (Logistic Regression, Random Forest, Gradient Boosting) to estimate user click probability, selecting Gradient Boosting as the best-performing model (ROC AUC ~0.91) for ranking high-intent users.',
      'Designed interactive Tableau dashboards translating complex analyses into actionable insights for stakeholders, enabling campaign comparison, engagement heatmaps, KPI monitoring, and data-driven targeting decisions.'
    ],
  },

  {
    jobTitle: 'Business Intelligence Analyst',
    company: 'Client – Point32Health',
    companyUrl: 'https://p32h.com',
    companyLogo: '/static/images/Company/CGI_logo.jpeg',
    startDate: '2020-06-01',
    endDate: '2023-10-01',
    location: 'Bangalore, India',
    roleType: 'Full-time',
    technologies: [
      'SQL',
      'Python',
      'Tableau',
      'Excel',
      'ETL Automation',
      'KPI Frameworks',
      'Healthcare Analytics',
      'Data Modeling',
      'Data Quality Management',
      'Data Warehousing',
      'Agile/Scrum',
      'Jira',
      'ServiceNow',
      'Slack'
    ],
    highlights: [
      'Delivered $65K in cost savings and 40% efficiency gains through Python automation',
      'Collaborated with clinical, vendor, and business stakeholders to standardize KPIs and reporting.'
    ],
    
     description: [
'Designed, automated, and maintained Python-based ETL validation workflows for the SCoReT regulatory application, executing 50+ complex business-rule checks to ensure data accuracy and readiness for downstream reporting.',
'Reduced regulatory review cycles by 40% by identifying systemic data issues early in the pipeline, minimizing rework, reducing reporting errors, and delivering $65K in annual cost savings.',
'Conducted forecasting and statistical analysis on CAHPS survey data for Medicare Part C & D populations, evaluating CMS quality measures and member experience KPIs to support quality improvement initiatives.',
'Identified a 15% performance improvement opportunity across key CMS measures by analyzing trends, vendor performance, and population-level variations.',
'Developed and optimized SQL-driven production reporting pipelines supporting vendor partners, validating and reconciling 500K+ healthcare records per month across claims, eligibility, and outreach datasets.',
'Built and maintained Tableau dashboards to replace manual bi-weekly reporting, enabling self-service KPI monitoring while maintaining HIPAA-compliant data handling and access controls.',
'Collaborated with clinical and care management teams to design oncology-focused claims data models and extracts, integrating diagnosis, utilization, and treatment data.',
'Processed and analyzed 40K+ oncology claims per quarter to identify high-risk patients and surface $800K in potential care gap opportunities for early intervention.',
'Supported UAT and production releases by validating KPI logic, calculations, and report outputs prior to deployment.',
'Authored technical and business documentation covering data sources, validation rules, dashboards, and KPI definitions to support audit readiness and stakeholder alignment.',
'Mentored 2-3 junior analysts on SQL optimization and BI best practices, improving team accuracy 30%.'
]
  },

  {
    jobTitle: 'Business Intelligence Analyst',
    company: 'Client – Cigna Health Insurance',
    companyUrl: 'https://cigna.com',
    companyLogo: '/static/images/Company/CGI_logo.jpeg',
    startDate: '2019-08-30',
    endDate: '2020-05-01',
    location: 'Hyderabad, India',
    roleType: 'Full-time',
    technologies: [
      'SQL',
      'Python',
      'Machine Learning',
      'Power BI',
      'Excel (Advanced Analytics)',
      'Informatica PowerCenter',
      'Facets Core',
      'Healthcare Data Standards',
      'Data Modeling',
      'Data Governance/Compliance Tools'
    ],
    highlights: [
      'Boosted data accuracy 22% via OLAP integration of claims and member data.',
      'Improved claims efficiency 28% with Power BI dashboards and SQL analysis.'
    ],
     description: [
'Integrated Facets claims, eligibility, and member data into SQL-based OLAP models, implementing SCD Type 1 and Type 2 methodologies for historical tracking, improving data accuracy by 22% and standardizing KPI reporting.',
'Conducted exploratory data analysis (EDA) and applied logistic regression to investigate claims denial root causes, enhancing claims processing efficiency by ~28%.',
'Developed and delivered ad-hoc Power BI dashboards with advanced DAX measures for C-level executives and VPs, enabling data-driven pricing strategies across HMO, PPO, Medicare, and Medicaid lines.',
'Designed raw, staging, and curated data layers using star and snowflake schema–based data models, improving cross-source data consistency by 40% and enabling standardized healthcare analytics.',
'Conducted data profiling, validation, and root-cause analysis to ensure data accuracy, consistency, and adherence to governance standards.',
'Applied advanced SQL techniques joins, CTEs, window functions, indexing, and partitioning—to improve query performance and data integrity across systems.',
'Governed regulatory compliance across the SDLC by enforcing HIPAA, ICD-10, CMS, and internal governance protocols; implemented audit checkpoints and documentation controls that reduced compliance findings.' 
]
  },

  {
    jobTitle: 'Data Specialist',
    company: 'Client – Oncor Electric Delivery',
    companyLogo: '/static/images/Company/IBM_logo.png',
    companyUrl: 'https://www.ibm.com/us-en',
    startDate: '2017-02-06',
    endDate: '2019-07-30',
    location: 'Pune, India',
    roleType: 'Full-time',
    technologies: [
      'Informatica PowerCenter',
      'SQL (Oracle)',
      'Oracle Database',
      'IBM Cognos Analytics',
      'Unix/Linux Shell Scripting',
      'Python',
      'ETL Architecture',
      'Data Warehousing',
      'Performance Tuning',
      'Utility Industry Data Models',
      'Production Support',
    ],
    highlights: [
      'Streamlined 50M+ meter ETL pipelines, cutting latency and errors.',
      'Optimized Maximo-to-Cognos reports, slashing runtime 87%.'
    ],
     description: [
'Designed and built ERCOT-compliant CDC ETL pipelines using Informatica, processing 50M+ smart meter events (MDM/OMS → Oracle DW), achieving <20 min data latency, 99.8% SLA adherence, and a 35% reduction in billing discrepancies.',
'Migrated and optimized 23+ Maximo reports to Cognos BI, tuning SQL queries and data models to reduce report runtime from 15 → 2 minutes (87% faster), and automated monthly dashboards for 200+ asset management users.',
'Led cross-functional ETL release management in Agile environments, coordinating UAT and production deployments, reducing release disruptions by 83% and maintaining 95%+ stakeholder satisfaction.',
'Implemented automated data quality and validation rules for meter, billing, and asset datasets, ensuring 99% accuracy for ERCOT/PUC reporting and compliance.',
'Developed SQL-driven monitoring and reconciliation processes to track pipeline performance, quickly identify anomalies, and maintain high data integrity across enterprise systems.',      
'Collaborated with business and technical teams to define KPIs, standardize reporting, and document data flows, enabling actionable insights for operational and billing efficiency.'
],
  },
]

export default items
