// ─────────────────────────────────────────────────────────────────────────────
// Central content for Another Door Counselling (Josh Brushett, MBACP).
// Details sourced from his Counselling Directory / Psychology Today profiles
// and his business card.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  businessName: "Another Door Counselling",
  name: "Josh Brushett",
  role: "Counsellor & Psychotherapist",
  credential: "MBACP",
  credentialLong: "Registered Member of the BACP",
  memberships: "Registered with the BACP",
  qualification: "Level 4 Diploma in Therapeutic Counselling",
  training: "Level 5 Diploma in Trauma Therapy",
  tagline: "Paving the path to mental wellbeing",
  location: "Sandy, Bedfordshire",
  postcode: "SG19",
  serves: "Online UK-wide · In person in Biggleswade",
  inPersonLocation: "Biggleswade, Bedfordshire",
  clients: "Adults & young people (16+)",
  phone: "07360 633 105",
  phoneHref: "tel:+447360633105",
  email: "anotherdoorcounselling@gmail.com",
  fee: "£60",
  sessionLength: "50 minutes",
  consultation: "Free 15-minute consultation",
  availability: "Flexible weekly & fortnightly slots",
  qualifiedYear: "2024",
  experience: "5 years in health & social care",
} as const;

// Concessions are offered on online sessions, on discussion.
export const concessions = [
  "Low income / benefits",
  "Students",
  "Trainee counsellors",
  "Unemployed",
] as const;

// "When I work" grid — taken directly from his Counselling Directory availability.
export const schedule = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  slots: [
    { label: "Early morning", open: [false, false, false, true, false, false, false] },
    { label: "Morning", open: [true, true, false, true, false, true, false] },
    { label: "Early afternoon", open: [true, true, false, true, false, true, false] },
    { label: "Late afternoon", open: [true, true, false, true, false, true, false] },
    { label: "Evening", open: [true, true, false, true, false, false, false] },
  ],
} as const;

// His own words on how he works (integrative, person-centred, client-led).
export const approach = [
  "As an integrative, trauma-informed practitioner, I use a person-centred approach to first build trust and rapport before trying any interventions. I've trained in a variety of approaches, but talk therapy is what I predominantly work with.",
  "Our work is led by you — I go where you lead, and I'll be directive when it's genuinely in your best interests. No two clients are the same, so I adapt the counselling I offer to fit your needs. I believe therapy can't really begin until there's an empathic connection that you can truly feel.",
];

// Modalities listed on his Counselling Directory profile.
export const therapiesOffered = [
  "Integrative counselling",
  "Person-centred therapy",
  "Psychodynamic therapy",
  "Mindfulness",
  "Solution focused brief therapy",
  "Psychodrama",
  "Kink-aware therapy",
] as const;

export const backgroundIntro =
  "I bring years of experience supporting neurodivergent clients — including ASD, ADHD, ADD and learning differences such as dyspraxia and dyslexia — across therapy, healthcare and education, alongside personal experience through friends and family. Through PINK Therapy I hold training and qualifications in GSRD (gender, sex, relationships and diversity), which especially matters to me. My background in health and social care also gives me real insight into cognitive impairment such as dementia, and the families affected by it.";

export const qualifications = [
  "Level 5 Diploma in Trauma Therapy (BCTS)",
  "Level 4 Diploma in Therapeutic Counselling (BCTS)",
  "Registered Member of the BACP (MBACP)",
  "GSRD training & qualifications (PINK Therapy)",
  "Childhood Sexual Abuse: Hope for Healing (Carolyn Spring)",
  "Dealing with Distress: Suicide & Self-Harm (Carolyn Spring)",
] as const;

export const experienceItems = [
  "Private practice — online & in person",
  "Volunteer therapist, Herts Mind Network",
  "Bereavement support with Sue Ryder",
  "College & educational settings",
  "Low-cost counselling service",
  "5 years in health & social care",
] as const;

export const approachQuote =
  "It can take time to find the right therapist and connection — a little like trying on shoes. It's worth trying a few options to find the fit that feels comfortable and right for you.";

export const intro =
  "Hi, I'm Josh — the counsellor behind Another Door Counselling. I offer a warm, confidential space, online via Microsoft Teams, where adults and young people from 16 can feel genuinely heard. Whether you're feeling stuck, overwhelmed, grieving, anxious, navigating relationships and work, or exploring who you are, therapy can help you find a way forward — at your own pace.";

export const about =
  "I'm a Registered Member of the BACP (MBACP), with a Diploma in Therapeutic Counselling and a certification in Somatic Trauma-Informed Therapy. I work as an integrative practitioner with my training rooted in person-centred practice, so I shape our work around you and focus on building a trusting, genuine relationship. I'm especially passionate about supporting LGBTQ+ clients, neurodivergent individuals, and anyone who's ever felt they don't quite fit the “norm.” When we explore trauma, we go gently — establishing safe foundations first, so you're never put at risk.";

export type Issue = { title: string; description: string };

export const issues: Issue[] = [
  {
    title: "Feeling stuck or overwhelmed",
    description:
      "When life feels like too much and you're not sure which way to turn, we'll find some clarity together.",
  },
  {
    title: "Anxiety",
    description:
      "Racing thoughts, worry and that constant sense of unease — we'll work to understand it and ease its grip.",
  },
  {
    title: "Grief & loss",
    description:
      "A gentle space to process bereavement and the many other losses life can bring.",
  },
  {
    title: "Relationships",
    description:
      "Make sense of the patterns, dynamics and people that matter most to you.",
  },
  {
    title: "Work-related stress",
    description:
      "Pressure, burnout and the search for a healthier, steadier balance.",
  },
  {
    title: "Identity & self-discovery",
    description:
      "Explore who you are — including gender, sexuality and neurodivergence — with someone in your corner.",
  },
];

export type Step = { title: string; description: string };

export const steps: Step[] = [
  {
    title: "Get in touch",
    description:
      "Send a short email or call. There's no pressure — just a first step through the door.",
  },
  {
    title: "Free 15-minute consultation",
    description:
      "We'll talk briefly online so you can see how it feels and ask anything you'd like.",
  },
  {
    title: "Begin your sessions",
    description:
      "We meet online via Teams, weekly, at a pace that's led entirely by you.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

// PLACEHOLDER testimonials — replace with Josh's real (anonymised) client feedback.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Josh made me feel completely at ease from the very first call. For the first time I felt genuinely listened to, without any judgement.",
    name: "Client",
    detail: "Anxiety",
  },
  {
    quote:
      "I came in feeling stuck and overwhelmed. A few months on, I have tools to cope and I actually feel like myself again.",
    name: "Client",
    detail: "Feeling stuck",
  },
  {
    quote:
      "The first counsellor I've worked with who really got it. Warm, patient and never rushed.",
    name: "Client",
    detail: "Identity",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How do sessions work?",
    a: "Most of my work is online via Microsoft Teams, so you can have sessions from wherever you feel most comfortable, anywhere in the UK. I can also see some clients in person from a room in Biggleswade, Bedfordshire. We start with a free 15-minute consultation before you commit to anything.",
  },
  {
    q: "How often will we meet, and when?",
    a: "That's up to you — many people choose a weekly session for a steady rhythm, while others prefer fortnightly for a little more flexibility (and a gentler cost). My own hours vary week to week, so rather than fixed days we'll find a time that genuinely works for you in your free consultation. Often, that slot becomes your regular one.",
  },
  {
    q: "What can I talk about in counselling?",
    a: "Anything that's on your mind — feeling stuck or overwhelmed, anxiety, grief, relationships, work stress, or exploring your identity. Nothing is too big or too small.",
  },
  {
    q: "Do you work with LGBTQ+ and neurodivergent clients?",
    a: "Absolutely. I'm an LGBTQ+ affirming and neurodivergent-friendly therapist, and I'm especially passionate about supporting anyone who's felt they don't quite fit the “norm.”",
  },
  {
    q: "How do you work with trauma?",
    a: "Gently and at your pace. I'm certified in Somatic Trauma-Informed Therapy, and when we explore difficult experiences I establish safe parameters first, so you're never put at risk.",
  },
  {
    q: "Who do you work with?",
    a: "Adults and young people from the age of 16. My approach is integrative and rooted in person-centred practice, so we shape the work around you rather than fitting you to a single method.",
  },
  {
    q: "Is what I say confidential?",
    a: "Yes. What you share stays between us, within the BACP ethical framework. I'll always explain the rare exceptions during our first session.",
  },
];

// Curated Unsplash imagery — paths, doorways and light, matching the
// "Another Door · paving the path" brand. Plus calming interiors.
export const images = {
  path: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=75", // sunlit forest path
  meadowPath:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=75", // path through meadow
  forestPath:
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1600&q=75", // autumn path
  calmRoom:
    "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1400&q=75",
  plant:
    "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=75",
  nature:
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=75",
  texture:
    "https://images.unsplash.com/photo-1494059980473-813e73ee784b?auto=format&fit=crop&w=1400&q=75",
  conversation:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=75",
  reflection:
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=75",
  hands:
    "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1200&q=75",
  window:
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=75",
  openDoor: "/images/open-door.png", // open arched door onto rolling green fields & trees (user-supplied)
  josh: "/images/josh.png", // Josh Brushett profile photo (user-supplied)

  // only used by the throwaway preview variants v1–v4
  portrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=75",
} as const;
