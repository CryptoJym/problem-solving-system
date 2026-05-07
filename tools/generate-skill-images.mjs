import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "assets/skill-domain-images";
mkdirSync(outDir, { recursive: true });

const skills = [
  {
    rank: "01",
    title: "Problem Framing and Reframing",
    file: "01-problem-framing-and-reframing.svg",
    accent: "#2563eb",
    tint: "#dbeafe",
    useWhen: "The problem statement is vague, political, solution-shaped, or stuck on symptoms.",
    steps: ["Current complaint", "Remove hidden fix", "Reframe goal/system", "Ask evidence question"],
    business: "Sales says: hire more reps. Reframe: qualified leads stall because handoffs between marketing and sales are unclear.",
    coding: "Team says: rewrite the API. Reframe: one endpoint slows only when cache misses force repeated database reads.",
    output: "Testable frame, explicit goal, removed assumptions, next evidence needed."
  },
  {
    rank: "02",
    title: "Observation and Problem Finding",
    file: "02-observation-and-problem-finding.svg",
    accent: "#0891b2",
    tint: "#cffafe",
    useWhen: "There are many possible problems and the team is relying on secondhand reports.",
    steps: ["Watch real work", "Record surprises", "Separate symptoms", "Pick high-value problem"],
    business: "Support tickets blame training. Call shadowing shows the billing screen forces duplicate entry and creates mistakes.",
    coding: "Users report login bugs. Session replay shows the real issue is an OAuth redirect loop after expired sessions.",
    output: "Candidate problems, observed symptoms, selection rationale, open questions."
  },
  {
    rank: "03",
    title: "Root Cause and Constraint Mapping",
    file: "03-root-cause-and-constraint-mapping.svg",
    accent: "#7c3aed",
    tint: "#ede9fe",
    useWhen: "Symptoms are known but the causal story is contested or incomplete.",
    steps: ["Name system goal", "List UDEs", "Map if-then causes", "Find constraint"],
    business: "Orders ship late. Mapping shows the real constraint is a once-daily approval batch, not warehouse speed.",
    coding: "Deploys fail randomly. Causal mapping shows flaky tests depend on shared mutable seed data across jobs.",
    output: "Causal map, weak links, likely constraint, controllable intervention."
  },
  {
    rank: "04",
    title: "Decision Hygiene and Option Widening",
    file: "04-decision-hygiene-and-option-widening.svg",
    accent: "#ea580c",
    tint: "#ffedd5",
    useWhen: "The decision has collapsed into one favorite option or a yes/no debate.",
    steps: ["Name decision risk", "Vanish favorite option", "Add alternatives", "Set tripwires"],
    business: "Instead of buy a CRM or do nothing, compare workflow cleanup, a pilot add-on, and a staged rollout.",
    coding: "Instead of rewrite as microservices, compare index tuning, queue isolation, endpoint split, and rollback criteria.",
    output: "Wider option set, assumptions by option, chosen path, pivot rules."
  },
  {
    rank: "05",
    title: "Reality Testing and Evidence Seeking",
    file: "05-reality-testing-and-evidence-seeking.svg",
    accent: "#16a34a",
    tint: "#dcfce7",
    useWhen: "The plan depends on claims that are expensive, risky, or behavior-dependent.",
    steps: ["List assumptions", "Zoom out", "Zoom in", "Seek disagreement"],
    business: "Before a new attendance policy, check absence trends, manager interviews, legal constraints, and edge cases.",
    coding: "Before adding Redis, inspect traces, model cache hit rates, ask SRE what fails, and test failure behavior.",
    output: "Assumption register, evidence, confidence level, revised recommendation."
  },
  {
    rank: "06",
    title: "Structured Ideation and Brainwriting",
    file: "06-structured-ideation-and-brainwriting.svg",
    accent: "#db2777",
    tint: "#fce7f3",
    useWhen: "The problem is formulated but the team has too few or too-similar ideas.",
    steps: ["Pre-work", "Silent ideas", "Pass and build", "Cluster and test"],
    business: "Onboarding ideas combine into a first-week checklist, buddy system, manager script, and scorecard.",
    coding: "CI speed ideas combine test sharding, dependency caching, fixture pruning, and flaky-test quarantine.",
    output: "Raw idea inventory, clusters, top concepts, testing candidates."
  },
  {
    rank: "07",
    title: "Rapid Prototyping and Experiments",
    file: "07-rapid-prototyping-and-experiments.svg",
    accent: "#ca8a04",
    tint: "#fef9c3",
    useWhen: "A solution looks promising but important uncertainty remains before full buildout.",
    steps: ["Choose risk", "Make low-fi test", "Predict result", "Observe and decide"],
    business: "Run a one-week daily huddle with one team before rolling the operating rhythm across the company.",
    coding: "Build a feature-flagged stub to validate an API contract before investing in the complete service.",
    output: "Prototype artifact, expected vs actual result, learning, next decision."
  },
  {
    rank: "08",
    title: "Operating Rhythm Implementation",
    file: "08-operating-rhythm-implementation.svg",
    accent: "#0f766e",
    tint: "#ccfbf1",
    useWhen: "The solution only works if people repeat a new behavior with accountability.",
    steps: ["Define behavior", "Set cadence", "Assign owner", "Review metric"],
    business: "Weekly pipeline review names owner, blockers, next actions, and stage-conversion movement.",
    coding: "Daily deploy health check covers failed jobs, rollback readiness, DRI ownership, and open blockers.",
    output: "Cadence, roles, visible metric, communication script, review date."
  },
  {
    rank: "09",
    title: "Learning Mindset and Retrospective",
    file: "09-learning-mindset-and-retrospective.svg",
    accent: "#4f46e5",
    tint: "#e0e7ff",
    useWhen: "A test, launch, failure, or decision produced results that should become reusable learning.",
    steps: ["Expected vs actual", "Name evidence", "Update assumptions", "Choose next move"],
    business: "A pilot misses target. The lesson: managers need scripts and practice before accountability metrics.",
    coding: "An incident review shows alerts were noisy. The lesson: alert on user impact, not raw CPU threshold.",
    output: "Learning notes, updated assumptions, reusable rule, next experiment or change."
  }
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock({ text, x, y, width = 44, size = 22, weight = 400, fill = "#172033", lineHeight = 1.28 }) {
  const lines = wrap(text, width);
  const tspans = lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : size * lineHeight}">${esc(line)}</tspan>`)
    .join("");
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif">${tspans}</text>`;
}

function stepBox(label, x, y, accent, index) {
  return `
    <rect x="${x}" y="${y}" width="225" height="88" rx="14" fill="#ffffff" stroke="${accent}" stroke-opacity="0.28" stroke-width="2"/>
    <circle cx="${x + 34}" cy="${y + 44}" r="18" fill="${accent}"/>
    <text x="${x + 34}" y="${y + 51}" text-anchor="middle" font-size="18" font-weight="800" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${index}</text>
    ${textBlock({ text: label, x: x + 66, y: y + 38, width: 17, size: 20, weight: 750, fill: "#172033", lineHeight: 1.16 })}
  `;
}

function card({ title, text, x, y, accent, label }) {
  return `
    <rect x="${x}" y="${y}" width="545" height="165" rx="18" fill="#ffffff" stroke="#d9e2ef" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="545" height="46" rx="18" fill="${accent}" opacity="0.94"/>
    <text x="${x + 24}" y="${y + 31}" font-size="20" font-weight="800" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${esc(title)}</text>
    <text x="${x + 500}" y="${y + 31}" text-anchor="end" font-size="15" font-weight="800" fill="#ffffff" opacity="0.88" font-family="Inter, ui-sans-serif, system-ui">${esc(label)}</text>
    ${textBlock({ text, x: x + 24, y: y + 80, width: 48, size: 22, weight: 560, fill: "#243047", lineHeight: 1.26 })}
  `;
}

function image(skill) {
  const stepXs = [70, 350, 630, 910];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="760" viewBox="0 0 1280 760" role="img" aria-labelledby="title desc">
  <title id="title">${esc(skill.rank)} ${esc(skill.title)}</title>
  <desc id="desc">Workflow diagram with business and coding examples for ${esc(skill.title)}.</desc>
  <rect width="1280" height="760" fill="#f8fafc"/>
  <rect x="34" y="34" width="1212" height="692" rx="28" fill="#ffffff" stroke="#d9e2ef" stroke-width="2"/>
  <rect x="34" y="34" width="1212" height="164" rx="28" fill="${skill.tint}"/>
  <circle cx="103" cy="112" r="44" fill="${skill.accent}"/>
  <text x="103" y="125" text-anchor="middle" font-size="34" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${skill.rank}</text>
  <text x="170" y="94" font-size="39" font-weight="900" fill="#111827" font-family="Inter, ui-sans-serif, system-ui">${esc(skill.title)}</text>
  ${textBlock({ text: `Use when: ${skill.useWhen}`, x: 172, y: 135, width: 78, size: 23, weight: 560, fill: "#263244", lineHeight: 1.24 })}

  <text x="70" y="256" font-size="24" font-weight="900" fill="#111827" font-family="Inter, ui-sans-serif, system-ui">How it works</text>
  ${skill.steps.map((step, index) => stepBox(step, stepXs[index], 286, skill.accent, index + 1)).join("")}
  <path d="M 302 330 L 336 330" stroke="${skill.accent}" stroke-width="4" stroke-linecap="round"/>
  <path d="M 330 322 L 342 330 L 330 338" fill="none" stroke="${skill.accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 582 330 L 616 330" stroke="${skill.accent}" stroke-width="4" stroke-linecap="round"/>
  <path d="M 610 322 L 622 330 L 610 338" fill="none" stroke="${skill.accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 862 330 L 896 330" stroke="${skill.accent}" stroke-width="4" stroke-linecap="round"/>
  <path d="M 890 322 L 902 330 L 890 338" fill="none" stroke="${skill.accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  ${card({ title: "Business example", text: skill.business, x: 70, y: 440, accent: skill.accent, label: "scenario" })}
  ${card({ title: "Coding example", text: skill.coding, x: 665, y: 440, accent: skill.accent, label: "scenario" })}
  <rect x="70" y="644" width="1140" height="48" rx="14" fill="#f8fafc" stroke="#e5edf6"/>
  <text x="94" y="675" font-size="19" font-weight="900" fill="${skill.accent}" font-family="Inter, ui-sans-serif, system-ui">Output</text>
  ${textBlock({ text: skill.output, x: 174, y: 675, width: 92, size: 19, weight: 650, fill: "#263244", lineHeight: 1.18 })}
</svg>
`;
}

for (const skill of skills) {
  writeFileSync(join(outDir, skill.file), image(skill));
}

console.log(`Generated ${skills.length} SVG images in ${outDir}`);
