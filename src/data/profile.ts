/* Author: DA Nguyen */
// Personal profile data. Edit this file to update the identity, summary,
// links and skills shown across the site. Never add a phone number,
// street address or referee details here: this file is published.

export interface ProfileLink {
  label: string;
  /** Short handle or identifier shown next to the label. */
  handle: string;
  url: string;
}

/** Short professional summary (Home, CV profile, meta description). */
const summary =
  'Software engineer building open research data infrastructure, currently at the Westerdijk Fungal Biodiversity Institute (KNAW). I bring 8+ years of designing and running ERP/BI data systems, from database architecture to web-based reporting platforms, and a PhD in AutoML from Leiden University with published open-source Python packages.';

export const profile = {
  name: 'Duc Anh Nguyen',
  /** Short form used for authorship metadata. */
  shortName: 'DA Nguyen',
  title: 'Dr.',
  headline: 'Software Engineer | Data Scientist',
  focus: 'ML systems, data infrastructure & backend development',
  /** Current position, shown in the Home hero and used for JSON-LD. */
  currentRole: {
    title: 'Software Engineer',
    organization: 'Westerdijk Fungal Biodiversity Institute (KNAW)',
    location: 'Utrecht, The Netherlands',
  },
  summary,
  /** One-line value statement for the home page hero. */
  valueStatement:
    'I build data-intensive systems end-to-end — from database architecture and BI platforms to ML pipelines and open research data infrastructure.',
  /** The "What I build" strip on the home page, in career order. */
  whatIBuild: [
    {
      period: '2009–2018',
      title: 'ERP/BI data platforms',
      text: 'Eight years designing databases, ERP and web-based BI reporting platforms that integrate data across departments.',
      href: '/cv/#experience',
      linkLabel: 'Experience',
    },
    {
      period: '2018–2024',
      title: 'AutoML research',
      text: 'PhD at Leiden University on efficient tuning of ML pipelines, applied with Honda, NEC and Tata Steel.',
      href: '/publications/',
      linkLabel: 'Publications',
    },
    {
      period: '2024–present',
      title: 'Open research software',
      text: 'Open-source Python packages (DACOpt, BO4ML), the xAutoML platform, and open science data infrastructure.',
      href: '/projects/',
      linkLabel: 'Projects',
    },
  ],
  about: [
    summary,
    'Experienced in international, multidisciplinary teams (Honda, NEC, Tata Steel). Keen interest in Open Science, FAIR data principles, research data infrastructure, and applying ML/LLMs to make scientific data more discoverable and reusable.',
  ],
  location: 'Leiden, The Netherlands',
  citizenship: 'Dutch (EU) & Vietnamese',
  /** Split so the full address never appears verbatim in the HTML source. */
  email: { user: 'anh.LEIDEN', domain: 'gmail.com' },
  links: {
    github: { label: 'GitHub', handle: 'anh05', url: 'https://github.com/anh05' },
    linkedin: { label: 'LinkedIn', handle: 'anh05', url: 'https://www.linkedin.com/in/anh05' },
    scholar: {
      label: 'Google Scholar',
      handle: 'IE9UpFIAAAAJ',
      url: 'https://scholar.google.com/citations?user=IE9UpFIAAAAJ',
    },
    pypi: { label: 'PyPI', handle: 'nguyenda', url: 'https://pypi.org/user/nguyenda/' },
  } satisfies Record<string, ProfileLink>,
  skills: [
    { area: 'Languages', items: 'Python, SQL / T-SQL, C#, VB.NET, ASP.NET, JavaScript (basic)' },
    {
      area: 'Backend & APIs',
      items:
        'REST API development in Python; ASP.NET web services; integration of heterogeneous data sources; building with FastAPI',
    },
    {
      area: 'Databases',
      items:
        'Microsoft SQL Server, MySQL, MS Access; relational & data-warehouse/BI schema design; PostgreSQL (transferable, in progress)',
    },
    {
      area: 'Data & ML',
      items:
        'Machine learning, AutoML, hyperparameter optimization, data pipelines, predictive modeling, data analysis & visualization',
    },
    {
      area: 'Architecture',
      items:
        'System & database architecture, data migration & integration, BI reporting platforms, UML, OOP, ITIL',
    },
    {
      area: 'Dev & tooling',
      items:
        'Git / GitHub, PyCharm, Visual Studio, Jupyter, Astah, LaTeX; open-source packaging & publishing (PyPI)',
    },
    {
      area: 'Learning now',
      items: 'Docker & CI/CD (GitHub Actions), FastAPI, React, FAIR data & Open Science practices',
    },
  ],
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Working proficiency' },
    { name: 'Dutch', level: 'A2' },
  ],
  strengths: ['End-to-end system builder', 'Rigorous & detail-oriented', 'Interdisciplinary collaborator'],
} as const;

/** Full headline including the focus line, used for SEO and the hero. */
export const fullHeadline = `${profile.headline} — ${profile.focus}`;

export const profileLinks: ProfileLink[] = Object.values(profile.links);
