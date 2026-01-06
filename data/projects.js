const items = [
  {
    year: '2024',
    summary:
      'Academic projects demonstrating expertise in data analytics, machine learning, dashboards, and cloud-based AI applications.',
    talks: [
      {
        title: 'Email Engagement Analytics Dashboard',
        cover: '/static/images/email_campaign.png',
        summary:
          'Analyzed alumni campaigns and built dashboards & predictive models to optimize email engagement.',
        technologies: ['Python', 'Tableau', 'A/B Testing', 'Predictive Modeling'],
        metrics: ['~225% CTR lift', '790K+ emails analyzed', '91% prediction accuracy'],
        links: {
          github:
            'https://github.com/rohini-patturaja/Email-Engagement-Analytics-Dashboard',
          tableau:
            'https://public.tableau.com/app/profile/rohini.patturaja/viz/EmailEngagementDashboard/EmailEngagementDashboard',
        },
      },
    ],
  },
  {
    year: '2022',
    summary: 'Real-world analytics and ML projects improving retention and predictions.',
    talks: [
      {
        title: 'E-Commerce User Behavior Retention Analysis',
        cover: '/static/images/customer_retention.jpeg',
        summary:
        'Applied RFM segmentation, cohort analysis, and A/B testing on UK e-commerce data to boost retention and identify high-value customers.',
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'StatsModels', 'Cohort Analysis', 'A/B Testing', 'RFM'],
        metrics: ['£7,948 top segment revenue',
        '50% Month-11 retention',
      '£1,218 peak ARPU'],
        links: {
          github:
            'https://github.com/rohini-patturaja/E-Commerce-User-Behavior-Retention-Analysis',
          tableau: '',
        },
      },
      {
        title: 'Heart Disease Prediction',
        cover: '/static/images/heart_disease.jpeg',
        summary:
          'Predicted heart disease risk using Gradient Boosting ML, highlighting key risk factors for early intervention.',
        technologies: ['Python', 'Pandas', 'scikit-learn', 'Gradient Boosting'],
        metrics: ['91% accuracy', 'High-risk demographics identified'],
        links: {
          github: 'https://github.com/rohini-patturaja/Heart-Analysis-Prediction',
          tableau: '',
        },
      },
      {
        title: 'ClarifyAI',
        cover: '/static/images/clarifyai_bg.png',
        summary:
          'Developed a serverless RAG application with vector search and RBAC for low-latency, citation-backed document responses.',
        technologies: ['Python', 'AWS Lambda', 'Vector Search', 'RBAC'],
        metrics: ['<1s response latency', 'Enterprise-ready'],
        links: {
          github: 'https://github.com/rohini-patturaja/ClarifyAI',
          tableau: '',
        },
      },
      {
  title: 'Los Angeles Crime Dashboard Analysis (2020–Present)',
  cover: '/static/images/LA_crimes.png',
  summary:
    'Analyzed 1.05M+ LAPD crime records to identify crime trends, peak hours, hotspots, and seasonal patterns using an interactive dashboard.',
  technologies: [
    'Python',
    'Pandas',
    'Plotly',
    'Dash',
    'Folium',
    'Facebook Prophet'
  ],
  metrics: [
    'peak crime hour (12 PM)',
     '12-month forecast', '21 LAPD areas'
  ],
  links: {
    github:
      'https://github.com/rohini-patturaja/Los-Angeles-Crime-Data-analysis',
    dashboard: ''
  },
},

    ],
  },
]

export default items
