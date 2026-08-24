import {
  Smartphone,
  Terminal,
  Bot,
  Layers,
  Rocket,
  Briefcase,
  Sparkles,
  GraduationCap,
  ScanLine,
  BatteryCharging,
  ShieldCheck,
  CheckSquare,
  Workflow,
  Globe,
} from "lucide-react";

export const PROFILE = {
  name: "Faizan",
  handle: "CodeWithFaizan",
  initials: "FA",
  location: "Chakwal, Pakistan",
  email: "ahmedfaizan931start@gmail.com",
  phone: "0331-8862292",
  github: "https://github.com/ahmedfaizan931star-dev",
  githubHandle: "ahmedfaizan931star-dev",
  fiverr: "https://fiverr.com/fiyaz_dev",
  fiverrHandle: "fiyaz_dev",
  youtube: "https://youtube.com/@SynthByteAI-l5y",
};

export const ROLES = [
  "Android Developer",
  "Kotlin & Jetpack Compose Engineer",
  "Full-Stack Developer",
  "Vibe Engineer",
];

export const STATS = [
  { label: "Android Apps Shipped", value: "6+" },
  { label: "Tech Stacks", value: "4" },
  { label: "Lines Debugged", value: "10k+" },
];

export const SKILLS = [
  {
    category: "Mobile & Frontend",
    icon: Smartphone,
    accent: "teal",
    items: [
      { name: "Kotlin", level: 92 },
      { name: "Jetpack Compose", level: 90 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 78 },
    ],
  },
  {
    category: "Backend & Data",
    icon: Terminal,
    accent: "amber",
    items: [
      { name: "Node.js", level: 78 },
      { name: "Room / SQLite", level: 85 },
      { name: "Python", level: 82 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "AI & Tooling",
    icon: Bot,
    accent: "violet",
    items: [
      { name: "Gemini API", level: 85 },
      { name: "ML Kit / CameraX", level: 80 },
      { name: "AI-assisted Engineering", level: 90 },
      { name: "Prompt & Agent Workflows", level: 88 },
    ],
  },
  {
    category: "Platform & Ops",
    icon: Layers,
    accent: "teal",
    items: [
      { name: "Git / GitHub Actions", level: 88 },
      { name: "Play Billing / AdMob", level: 75 },
      { name: "CI Debugging", level: 82 },
      { name: "Web Scraping", level: 80 },
    ],
  },
];

// ArtifactLoop gets a dedicated, larger flagship treatment inside Projects.
// This is a live public web app, so it keeps real GitHub + live links.
export const FLAGSHIP_PROJECT = {
  title: "ArtifactLoop",
  subtitle: "AI coding-assistant SaaS",
  icon: Workflow,
  accent: "amber",
  description:
    "A full AI coding-assistant web app — chat with an agent that writes code, runs it, fixes its own build errors, and ships real files. Built solo across many sessions with auth, project memory, a modular skills system, and real DOCX/XLSX/PPTX/PDF generation.",
  features: [
    "Email/password + Google + GitHub OAuth, with email verification and rate limiting",
    "Modular skills system with model routing across Gemini, Groq and OpenRouter",
    "Real DOCX/XLSX/PPTX/PDF generation — not placeholder files",
    "GitHub Actions CI tracking with an automated verification + repair loop",
    "Figma and Supabase connectors, plus a Playwright-powered browser agent",
    "In-app Security Center — static + dependency scanning with a real score",
    "Command Palette (Ctrl/Cmd+K) and a Release Center with build/test/security gates",
    "A 50-item template pack across Android, Windows and web projects",
  ],
  stack: ["Next.js", "Supabase", "Vercel", "Gemini API", "Playwright"],
  github: "https://github.com/ahmedfaizan931star-dev/artifactloop",
  live: "https://artifactloop.vercel.app/",
};

export const PROJECT_FILTERS = ["ALL", "ANDROID", "AI", "WEB", "TOOLS"];

// Android apps are unpublished/private repos — no live GitHub link.
// Instead: real in-app screenshots + a "Request Demo APK" contact flow.
export const PROJECTS = [
  {
    title: "ScanMate AI Pro",
    tag: "Flagship",
    icon: ScanLine,
    accent: "teal",
    category: ["ANDROID", "AI"],
    description:
      "Native Android document scanner used as the internal quality baseline for every later app — offline scan, OCR, PDF tools and QR tools in one place.",
    features: [
      "CameraX-powered live document capture with auto-crop",
      "On-device OCR text extraction and searchable document history",
      "Full PDF toolkit — images to PDF, merge, compress, export",
      "Gemini API integration for smart document summaries",
    ],
    stack: ["Kotlin", "CameraX", "ML Kit", "Room", "Gemini API"],
    screenshots: [
      "/screenshots/scanmate-1.jpg",
      "/screenshots/scanmate-2.jpg",
      "/screenshots/scanmate-3.jpg",
      "/screenshots/scanmate-4.jpg",
    ],
  },
  {
    title: "PowerMate AI",
    tag: "Diagnostics",
    icon: BatteryCharging,
    accent: "amber",
    category: ["ANDROID"],
    description:
      "A private battery command center — live health, care and charger diagnostics rebuilt from a broken CI pipeline into a shippable product.",
    features: [
      "Custom Canvas/DrawScope battery-health ring visualizations",
      "Live charger test and always-on-display (AOD) mode",
      "Fixed a scoring formula bug that used raw weights instead of fractional",
      "Full WCAG-compliant color-contrast and typography pass",
    ],
    stack: ["Kotlin", "Canvas", "DrawScope", "Gradle"],
    screenshots: [
      "/screenshots/powermate-1.jpg",
      "/screenshots/powermate-2.jpg",
      "/screenshots/powermate-3.jpg",
      "/screenshots/powermate-4.jpg",
      "/screenshots/powermate-5.jpg",
    ],
  },
  {
    title: "VaultClean AI",
    tag: "Storage & Privacy",
    icon: ShieldCheck,
    accent: "violet",
    category: ["ANDROID"],
    description:
      "Kotlin storage-cleaning app taken through a full senior-engineer audit and repair pass.",
    features: [
      "Fixed non-functional billing where startConnection() was never called",
      "Repaired broken running-apps detection",
      "Moved main-thread file I/O off six ViewModels into coroutines",
      "Wired previously-dead banner and interstitial ad slots",
    ],
    stack: ["Kotlin", "Coroutines", "Play Billing"],
    screenshots: [],
  },
  {
    title: "Multi-Habit Tracker",
    tag: "Compose",
    icon: CheckSquare,
    accent: "teal",
    category: ["ANDROID"],
    description:
      "Habit-tracking app built entirely through the GitHub web editor and GitHub Actions.",
    features: [
      "Jetpack Compose UI with Room persistence and DataStore preferences",
      "AlarmManager-based daily reminder scheduling",
      "AdMob and Play Billing wired for a freemium model",
      "Built and verified with zero local IDE — GitHub Actions only",
    ],
    stack: ["Jetpack Compose", "Room", "DataStore", "AlarmManager"],
    screenshots: [],
  },
  {
    title: "ScrapeMaster Pro",
    tag: "Automation",
    icon: Globe,
    accent: "amber",
    category: ["TOOLS"],
    description:
      "Python web scraping tool built as a portfolio piece and iterated for reliability.",
    features: [
      "Configurable scraping targets with clean CLI output",
      "Built-in retry and error-handling for flaky pages",
      "Structured export for downstream data use",
    ],
    stack: ["Python", "BeautifulSoup", "Requests"],
    screenshots: [],
  },
];

export const TIMELINE = [
  {
    icon: Rocket,
    title: "Independent Android Developer",
    place: "Self-employed · Chakwal, Pakistan",
    period: "Ongoing",
    description:
      "Shipping and hardening Android apps solo — ScanMate AI Pro, PowerMate AI, VaultClean AI and more — while building ArtifactLoop, a full AI coding-assistant SaaS.",
  },
  {
    icon: Briefcase,
    title: "Freelance Developer",
    place: "Fiverr — fiyaz_dev",
    period: "Ongoing",
    description:
      "Android bug-fixing and AI chatbot development gigs for clients, applying the same audit-and-repair rigor used on personal flagship apps.",
  },
  {
    icon: Sparkles,
    title: "Tech Content Creator",
    place: "YouTube — @SynthByteAI-l5y",
    period: "Ongoing",
    description:
      "Building a public teaching presence for beginner developers across Pakistan and India, including a no-code Android app-building carousel series.",
  },
  {
    icon: GraduationCap,
    title: "Self-Taught Engineering Path",
    place: "Kotlin, Compose, Python, Full-Stack",
    period: "Continuous",
    description:
      "Working toward becoming an AI Engineer and Entrepreneur — learning in public, one shipped app and one fixed bug at a time.",
  },
];
