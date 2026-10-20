export const profile = {
  name: 'Bharath Gowtham P G',
  shortName: 'Bharath Gowtham',
  title: 'Full-Stack Developer',
  location: 'Chennai, India',
  intro:
    'Five years building web and mobile applications end to end — from React and Angular interfaces through Node.js and Python APIs to the databases behind them. Started in electronics, ended up shipping software.',
}

export const navLinks = [
  { to: '/experience', label: 'Work' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export const spec = [
  { label: 'Experience', value: '5 years' },
  { label: 'Core stack', value: 'React, Angular, Node.js, Python' },
  { label: 'Databases', value: 'PostgreSQL, DynamoDB, MongoDB' },
  { label: 'Cloud', value: 'AWS S3' },
  { label: 'Based in', value: 'Chennai, India' },
]

export const exploreLinks = [
  { to: '/experience', index: '01', title: 'Work', text: 'Three roles — from an educational portal to multi-tenant attendance.' },
  { to: '/skills', index: '02', title: 'Skills', text: 'Frontend, backend, mobile, databases, cloud and tools.' },
  { to: '/projects', index: '03', title: 'Projects', text: 'Earlier builds: an e-commerce app and a SCADA monitor.' },
  { to: '/contact', index: '04', title: 'Contact', text: 'Email, phone and LinkedIn.' },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['Angular', 'React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material Design', 'Vite'],
  },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'] },
  { group: 'Mobile', items: ['Flutter', 'React Native', 'Geofencing', 'BLE beacons', 'QR-based check-in'] },
  { group: 'Databases', items: ['PostgreSQL', 'PgAdmin', 'MongoDB', 'DynamoDB'] },
  { group: 'Cloud & Tools', items: ['AWS S3', 'Amazon Cognito', 'Multi-tenant architecture', 'Git'] },
]

export const experience = [
  {
    period: 'May 2026 — Present',
    title: 'Senior Developer',
    org: 'Beanshoot AI Technologies',
    summary:
      'Attest, a multi-tenant classroom attendance platform: students mark presence via geofence, BLE beacon and optional QR, teachers run and monitor live sessions, and registrars manage catalog, compliance, claims and reporting.',
    projects: [
      {
        title: 'Attest',
        points: [
          'Built the Flutter student app for check-in, combining geofence, BLE beacon and QR fallback for presence verification.',
          'Built the Flutter teacher app (Attest Classroom) for running sessions, monitoring live attendance, and finalizing records.',
        ],
      },
      {
        title: 'Registrar Portal',
        points: ['Built the React portal registrars use for catalog management, compliance, claims and reporting.'],
      },
      {
        title: 'Backend & platform',
        points: [
          'Built the Python back-end powering all three surfaces, multi-tenant from the ground up.',
          "Wired up identity with Amazon Cognito, with role stored on each user's DynamoDB record.",
        ],
      },
    ],
  },
  {
    period: 'Mar 2021 — Apr 2026',
    title: 'Senior Developer',
    org: 'The Red Bangle Film Collaborative Private Limited',
    summary:
      'Client and project management platform covering employee leave, time sheets, collaborator management and client delivery, alongside several parallel product builds.',
    projects: [
      {
        title: 'Platform front-end & back-end',
        points: [
          'Designed and built the UI in Angular, integrating it with RESTful APIs built on Node.js.',
          'Modeled and managed the application database, keeping it responsive across browsers and devices.',
          'Handled server-side logic, back-end security, and testing across the full stack.',
        ],
      },
      {
        title: 'Marketing website (Next.js + Tailwind)',
        points: [
          'Built modular, responsive components with server-side rendering and static generation for SEO and performance.',
          'Added contact forms and dynamic content sections, working closely with the design team on pixel-accurate layouts.',
        ],
      },
      {
        title: 'Cross-platform web & mobile app (React)',
        points: [
          'Built UI screens with React and React Native, sharing reusable modules across web and Android.',
          'Integrated REST APIs and debugged rendering and performance issues across platforms.',
        ],
      },
      {
        title: 'AI image & video generation front-end (Angular)',
        points: [
          'Built the prompt-input UI and connected it to APIs generating AI images and video.',
          'Implemented loading states, progress indicators, and background polling for long-running generation jobs.',
          'Optimized rendering for large media output to keep the interface responsive.',
        ],
      },
    ],
  },
  {
    period: 'Sep 2020 — Dec 2020',
    title: 'System Analyst',
    org: 'Sight Spectrum LLC',
    points: [
      'Built Angular interfaces for a web-based educational portal serving students, educators and administrators, on a .NET back-end.',
      'Implemented enrolment, course browsing, assessments and communication features across responsive layouts.',
      "Shaped the application's architecture and data models, and wrote the system documentation supporting the build.",
    ],
  },
]

export const projects = [
  {
    title: 'E-Commerce Application',
    stack: 'Angular 8 · Node.js · TypeScript · Express · MongoDB',
    text: 'An admin-driven storefront: admins manage products and categories, customers search, browse and manage their cart. Involved in solution design, partial build-out and defect fixing.',
  },
  {
    title: 'SCADA Substation Feeder Monitoring',
    stack: 'Visual Basic',
    text: 'Remote feeder monitoring and control system reading data from transformers and sensors via a PIC microcontroller. Contributed to requirement specs, input validation, and cross-team coordination.',
  },
]

export const education = [
  { degree: 'B.E., Electronics and Communication — Anna University', years: '2013 — 2017' },
]

export const contact = {
  email: 'bharathpg96@gmail.com',
  phone: '+91 89390 59683',
  phoneHref: 'tel:+918939059683',
  linkedin: 'https://www.linkedin.com/in/bharath-gowtham-87195718b/',
  linkedinLabel: 'linkedin.com/in/bharath-gowtham-87195718b',
  location: 'Chennai, India',
}
