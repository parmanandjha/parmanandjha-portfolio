export const PROFILE = {
  name: 'Parmanand Jha',
  firstName: 'Parmanand',
  role: 'Class 12 Computer Science Student',
  school: 'Arniko Awasiya Secondary School',
  city: 'Biratnagar, Nepal',
  email: 'parmanandjha030@gmail.com',
  instagram: { handle: '@org.parmanand', url: 'https://www.instagram.com/org.parmanand' },
  linkedin: {
    handle: 'Parmanand Jha',
    url: 'https://www.linkedin.com/search/results/all/?keywords=Parmanand%20Jha',
  },
  graduation: 'Chaitra 2083 B.S.',
  photo: '/image.png',
  philosophy:
    'In chemistry, litmus paper reveals the nature of an unknown solution by testing its acid and base. In my life, I treat curiosity and challenges as that litmus test: identifying what gives my purpose equilibrium, testing ideas through code, and building practical technology.',
} as const;

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'club', label: 'Green Flag Club' },
  { id: 'ask', label: 'Ask' },
  { id: 'contact', label: 'Contact' },
] as const;

export const STATS = [
  { value: 3.6, decimals: 2, label: 'SEE GPA', sub: 'Class 10' },
  { value: 3.82, decimals: 2, label: 'Class 11 GPA', sub: '+2 Science' },
  { value: 3.96, decimals: 2, label: 'Target GPA', sub: 'Class 12', target: true },
  { value: 2083, decimals: 0, label: 'Graduating', sub: 'Chaitra, B.S.' },
] as const;

export const GPA_TRAJECTORY = [
  { label: 'Class 10', sub: 'SEE', gpa: 3.6 },
  { label: 'Class 11', sub: 'Science', gpa: 3.82 },
  { label: 'Class 12', sub: 'Target', gpa: 3.96, target: true },
] as const;

export const SUBJECTS = [
  'Computer Science',
  'Physics',
  'Chemistry',
  'Mathematics',
  'English',
  'Nepali',
] as const;

export const CS50_TOPICS = [
  'Web programming',
  'Modern JavaScript',
  'Backend logic',
  'API architecture',
  'Client–server logic',
  'Web frameworks',
  'Databases',
] as const;

export const MARQUEE_ITEMS = [
  'Computer Science',
  'Full-stack web',
  'Coding workshops',
  'Physics',
  'Student hackathons',
  'Chemistry',
  'AI mentorship',
  'Mathematics',
  'CS50 Web',
  'Biratnagar, Nepal',
] as const;

export const CLUB_PILLARS = [
  {
    title: 'Coding Workshops',
    body: 'Hands-on, modern full-stack web development training — built by students, for students.',
    tag: 'Learn',
  },
  {
    title: 'Student Hackathons',
    body: 'School-level software hackathons where teams ship real projects against the clock.',
    tag: 'Build',
  },
  {
    title: 'AI Mentorship',
    body: 'Guidance in AI literacy, entrepreneurship, and digital problem-solving for every member.',
    tag: 'Grow',
  },
] as const;

export const CLUB_ROADMAP = [
  { title: 'Operational plan', body: 'Shaping the structure, goals and calendar of the club.', status: 'In progress' },
  { title: 'Official launch', body: 'Opening Green Flag Club to students at Arniko Awasiya.', status: 'Upcoming' },
  { title: 'Workshop series', body: 'Regular hands-on sessions on full-stack web development.', status: 'Upcoming' },
  { title: 'Hackathons & mentorship', body: 'Student hackathons and AI mentorship circles.', status: 'Upcoming' },
] as const;

/* ---------- Portfolio assistant knowledge base ---------- */

export type Intent = {
  id: string;
  keywords: string[];
  answer: string;
};

export const INTENTS: Intent[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening'],
    answer:
      "Namaste! 👋 I'm Parmanand's portfolio assistant. Ask me about his grades, what he's studying now, the Green Flag Club, or how to get in touch.",
  },
  {
    id: 'who',
    keywords: ['who', 'about', 'introduce', 'yourself', 'parmanand', 'tell me'],
    answer:
      'Parmanand Jha is a Class 12 Computer Science student at Arniko Awasiya Secondary School in Biratnagar, Nepal. He is the founder of the upcoming Green Flag Club.',
  },
  {
    id: 'done',
    keywords: ['done', 'achieve', 'achievement', 'past', 'accomplish', 'record'],
    answer:
      "Parmanand scored a 3.60 GPA in Class 10 (SEE), a 3.82 GPA in Class 11 Science, and completed Harvard's CS50 Web Development coursework.",
  },
  {
    id: 'grades',
    keywords: ['gpa', 'grade', 'marks', 'result', 'score', 'see', 'class 10', 'class 11', 'academic'],
    answer:
      'His GPA has climbed every year: 3.60 in Class 10 (SEE) → 3.82 in Class 11 Science → targeting 3.96 in Class 12.',
  },
  {
    id: 'cs50',
    keywords: ['cs50', 'harvard', 'course', 'coursework', 'online', 'certificate'],
    answer:
      "He completed Harvard's CS50 Web Development coursework — covering web programming, modern JavaScript, backend logic, databases and API architecture.",
  },
  {
    id: 'doing',
    keywords: ['doing', 'now', 'current', 'currently', 'studying', 'class 12', 'subject', 'right now'],
    answer:
      'He is in his second year of Class 12 Science at Arniko Awasiya Secondary School, studying Computer Science, Physics, Chemistry, Mathematics, English and Nepali — targeting a 3.96 GPA. Alongside school, he builds full-stack web apps and is planning the Green Flag Club.',
  },
  {
    id: 'club',
    keywords: ['green flag', 'club', 'hackathon', 'workshop', 'mentorship', 'will', 'future', 'plan', 'next'],
    answer:
      'Green Flag Club is a student-led tech initiative founded by Parmanand. It focuses strictly on software — coding workshops, student hackathons and AI mentorship (no hardware).',
  },
  {
    id: 'graduation',
    keywords: ['graduate', 'graduation', '2083', 'chaitra', 'finish', 'complete school'],
    answer: 'Parmanand expects to graduate from high school in Chaitra 2083 B.S.',
  },
  {
    id: 'skills',
    keywords: ['skill', 'tech', 'stack', 'language', 'javascript', 'web', 'code', 'coding', 'program'],
    answer:
      'His focus is full-stack web development: modern JavaScript, client–server logic, web frameworks, backend logic, databases and API design — grounded in CS50 Web coursework.',
  },
  {
    id: 'philosophy',
    keywords: ['litmus', 'philosophy', 'motto', 'believe', 'value', 'mindset', 'chemistry'],
    answer:
      'His philosophy borrows from chemistry: just as litmus paper reveals acid or base, he uses curiosity and challenges as a litmus test — finding what gives his purpose equilibrium, testing ideas through code, and building practical technology.',
  },
  {
    id: 'school',
    keywords: ['school', 'arniko', 'awasiya', 'where', 'biratnagar', 'nepal', 'location', 'live'],
    answer: 'He studies at Arniko Awasiya Secondary School in Biratnagar, Nepal.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'mail', 'reach', 'instagram', 'linkedin', 'connect', 'hire', 'collaborate'],
    answer:
      'You can reach Parmanand at parmanandjha030@gmail.com, on Instagram @org.parmanand, or on LinkedIn (Parmanand Jha).',
  },
];

export const FALLBACK_ANSWER =
  "I can only answer questions about Parmanand's past achievements, his current Class 12 studies at Arniko Awasiya, and the Green Flag Club. Try one of the suggestions below!";

export const SUGGESTIONS = [
  'What has he done?',
  'What is he doing right now?',
  'What is Green Flag Club?',
  'What are his grades?',
  'When does he graduate?',
  'How can I contact him?',
] as const;

export function answerFor(query: string): string {
  const q = query.toLowerCase();
  let best: { score: number; answer: string } = { score: 0, answer: FALLBACK_ANSWER };

  for (const intent of INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      // Whole-word match for short keywords (avoids "hi" matching "his")
      const pattern = kw.length <= 3 ? new RegExp(`\\b${kw}\\b`) : null;
      if (pattern ? pattern.test(q) : q.includes(kw)) score += kw.split(' ').length + kw.length / 20;
    }
    if (score > best.score) best = { score, answer: intent.answer };
  }
  return best.answer;
}
