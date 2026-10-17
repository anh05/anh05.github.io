/* Author: DA Nguyen */
// Content for the xAutoML case study (/projects/xautoml/). Screenshots are
// read from src/assets/xautoml/ (see the README there); set `video` to embed
// a demo video.

export interface CaseStudyVideo {
  title: string;
  /** Embeddable URL, e.g. https://www.youtube-nocookie.com/embed/<id>. */
  embedUrl: string;
}

export const xautoml = {
  name: 'xAutoML',
  tagline: 'A self-initiated platform that guides non-experts from a raw dataset to a tuned, explainable ML model.',
  appUrl: 'https://app.xautoml.nl',
  role: 'Sole developer',
  period: '2024 – Sep 2026',
  status: 'In active development — not yet open for public registration.',
  problem: [
    'Turning a raw dataset into a good machine-learning model usually takes an expert: choosing algorithms, tuning their hyperparameters and judging whether the result can be trusted.',
    'xAutoML puts that path into a guided web application, with an AutoML back end that does the tuning and results that stay explainable.',
  ],
  audience:
    'People who have a dataset and a prediction question but are not machine-learning specialists, and who need a model they can understand rather than a black box.',
  architecture: [
    'Flask web application and a MySQL database (SQLAlchemy data model), each in its own container, run with Docker Compose.',
    'AutoML back end built on my open-source DACOpt and BO4ML packages.',
    'CI/CD: GitHub Actions builds each push and publishes versioned images to the GitHub Container Registry (GHCR), and a self-hosted runner pulls and deploys them.',
    'Exposed to users securely through a Cloudflare Tunnel, without opening inbound ports on the host.',
    'Health checks, versioned builds and a system-status page; data migrated from an earlier version of the platform.',
  ],
  stack: [
    'Python',
    'Flask',
    'MySQL',
    'SQLAlchemy',
    'DACOpt / BO4ML',
    'Docker Compose',
    'GitHub Actions',
    'GHCR',
    'Cloudflare Tunnel',
  ],
  myRole:
    'Sole developer: product idea, data model, web application, AutoML back end, deployment pipeline and operations.',
  video: undefined as CaseStudyVideo | undefined,
} as const;
