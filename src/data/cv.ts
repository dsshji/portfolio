/* CV — rendered as a real HTML page (/cv), with a "Download PDF" button.
   Transferred from resume.pdf (the PDF itself lives at /public/dasha-cv.pdf).
   Phone number intentionally left off the public page. */

export interface CVEntry {
  when: string; // date range, monospace
  what: string; // title / role
  where: string; // org / place
  detail?: string; // optional line(s)
  link?: { label: string; href: string };
}

export interface CVSection {
  heading: string;
  entries: CVEntry[];
}

export const CV_PDF_PATH = '/dasha-cv.pdf';

export const CV_SECTIONS: CVSection[] = [
  {
    heading: 'Education',
    entries: [
      {
        when: 'Aug 2025 — May 2029',
        what: 'B.S. in Computer Science & Interactive Media (double major)',
        where: 'New York University Abu Dhabi · GPA 3.9/4.0',
      },
      {
        when: '2020 — 2025',
        what: 'High School Diploma, Cum Laude with the Gold Medal (top of class)',
        where: 'Letovo School, Moscow',
      },
    ],
  },
  {
    heading: 'Projects',
    entries: [
      {
        when: '2026',
        what: 'The Party',
        where: 'React, React Three Fiber, Node/Express, Spotify OAuth, Groq LLM',
        detail:
          'Full-stack web app that turns a user’s Spotify listening into an interactive 3D scene where top artists appear as characters and exchange AI-generated dialogue; combined real-time 3D, live Spotify API data, auth, and an LLM, re-architecting the data model around deprecated endpoints.',
        link: { label: 'github.com/dsshji/the-party', href: 'https://github.com/dsshji/the-party' },
      },
      {
        when: '2026',
        what: 'STEER_OS34: Generative Audio-Visual Instrument',
        where: 'Arduino, p5.js, p5.sound',
        detail:
          'Designed a physical instrument pairing an Arduino controller (knobs and buttons) with a generative particle system in p5.js; particle collisions trigger notes over a real-time synth drone with live control of sound and visuals.',
        link: { label: 'github.com/dsshji/steer_os34_v1.2', href: 'https://github.com/dsshji/steer_os34_v1.2' },
      },
      {
        when: '2026',
        what: 'Ladushki: Camera-Controlled Hand-Pose Game',
        where: 'p5.js, ml5.js (HandPose)',
        detail:
          'Built a browser game controlled entirely by real-time hand tracking; players mirror a character’s rhythm and hand poses, with escalating difficulty and reactive visuals on mistakes.',
        link: { label: 'github.com/dsshji/ladushki', href: 'https://github.com/dsshji/ladushki' },
      },
      {
        when: '2026',
        what: 'Photo Archive',
        where: 'JavaScript, D3.js, IndexedDB',
        detail:
          'Implemented a tree data structure from scratch to organize photos by memory rather than date; persisted data in localStorage / IndexedDB and rendered an interactive D3.js graph (zoom, pan, click-to-focus).',
        link: { label: 'github.com/dsshji/photo-archive', href: 'https://github.com/dsshji/photo-archive' },
      },
    ],
  },
  {
    heading: 'Experience',
    entries: [
      {
        when: 'Sep 2026 — present',
        what: 'Design Lab Assistant',
        where: 'Visual Design Lab, NYU Abu Dhabi (Prof. Goffredo Puccetti)',
        detail:
          'Led the lab website’s migration from Webflow to Framer, exporting and reorganizing the full CMS (articles, text, and media). Rebuilt and formatted pages in Framer (headers, scrolling logo, overall layout); contributing written articles and event support.',
      },
      {
        when: 'Jun — Aug 2025',
        what: 'Sales Consultant',
        where: 'Amazing Red (former PUMA flagship), Okhotny Ryad, Moscow',
        detail:
          'Consistently exceeded monthly sales targets while serving a high volume of Russian and international customers in both languages; 73% multi-item sales, averaging 2.13 items per transaction.',
      },
      {
        when: '2022 — present',
        what: 'Private Tutor (English & Mathematics)',
        where: 'Self-employed · Remote / Moscow',
        detail: 'Tutor primary and middle-school students, tailoring each lesson to the student’s level, pace, and gaps.',
      },
    ],
  },
  {
    heading: 'Leadership & Community',
    entries: [
      {
        when: 'Aug 2026 — present',
        what: 'Treasurer & E-Board Member',
        where: 'PAUSED: Video Gaming Club, NYU Abu Dhabi',
        detail:
          'Built the club’s visual identity and run its social media (posters, posts, Discord); help plan, host, and promote events.',
      },
      {
        when: '2023 — 2024',
        what: 'Co-Founder & Career Track Lead',
        where: 'ProLetovo — student-run non-profit supporting children in orphanages, Odintsovo',
        detail:
          'Co-founded a student non-profit helping orphaned children build their own projects; led the career track: ran 5+ creative workshops, mentored 3+ children, and organized career lectures for 20+ students.',
      },
    ],
  },
  {
    heading: 'Skills',
    entries: [
      { when: 'languages', what: 'JavaScript · Python · C++ · HTML · CSS · SQL', where: '' },
      { when: 'frameworks', what: 'React · React Three Fiber · Three.js · Node.js · Express.js · p5.js · ml5.js · D3.js', where: '' },
      {
        when: 'concepts',
        what: 'Full-stack development · REST APIs · OAuth · 3D / WebGL · creative coding · generative art · physical computing (Arduino) · computer vision · UI / web design · LLM API integration',
        where: '',
      },
      {
        when: 'tools',
        what: 'Git / GitHub · Vercel · Framer · Webflow · Blender · Figma · Photoshop / Illustrator / Premiere Pro · Google Workspace · Microsoft Office',
        where: '',
      },
      { when: 'spoken', what: 'English (C1, IELTS 8.0) · Russian (native)', where: '' },
    ],
  },
  {
    heading: 'Honors',
    entries: [
      {
        when: '2024',
        what: 'World Economics Cup',
        where: 'Global competition across 47 countries',
        detail: 'Top 5 in Europe (Case Round), Top 7 in Europe (team overall), National Top 10 personal score.',
      },
    ],
  },
];
