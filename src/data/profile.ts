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

export const profile = {
  name: 'Duc Anh Nguyen',
  /** Short form used for authorship metadata. */
  shortName: 'DA Nguyen',
  title: 'Dr.',
  headline: 'Software Engineer | Data Scientist',
  focus: 'ML systems, data infrastructure & backend development',
  summary:
    'Software engineer and PhD data scientist who builds data-intensive systems end-to-end, from database and system architecture to APIs, pipelines and published open-source tools.',
  about: [
    'Software engineer and PhD data scientist who builds data-intensive systems end-to-end, from database and system architecture to APIs, pipelines and published open-source tools.',
    'Over eight years designing and deploying web-based data and reporting platforms (ERP/BI) that integrate heterogeneous data sources across departments, followed by a PhD at Leiden University combining rigorous ML/AutoML research with hands-on Python engineering.',
    'Author of documented, reusable open-source Python packages on PyPI. Experienced in international, multidisciplinary teams (Honda, NEC, Tata Steel). Keen interest in Open Science, FAIR data principles, research data infrastructure, and applying ML/LLMs to make scientific data more discoverable and reusable.',
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
