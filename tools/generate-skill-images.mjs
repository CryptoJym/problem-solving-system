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
    steps: [
      { label: "Current complaint", art: "complaint" },
      { label: "Remove hidden fix", art: "hiddenFix" },
      { label: "Reframe goal/system", art: "reframe" },
      { label: "Ask evidence question", art: "evidenceQuestion" }
    ],
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
    steps: [
      { label: "Watch real work", art: "observeWork" },
      { label: "Record surprises", art: "surpriseNote" },
      { label: "Separate symptoms", art: "separateSymptoms" },
      { label: "Pick high-value problem", art: "priorityPick" }
    ],
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
    steps: [
      { label: "Name system goal", art: "systemGoal" },
      { label: "List UDEs", art: "udeList" },
      { label: "Map if-then causes", art: "causeMap" },
      { label: "Find constraint", art: "constraint" }
    ],
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
    steps: [
      { label: "Name decision risk", art: "decisionRisk" },
      { label: "Vanish favorite option", art: "vanishOption" },
      { label: "Add alternatives", art: "alternatives" },
      { label: "Set tripwires", art: "tripwires" }
    ],
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
    steps: [
      { label: "List assumptions", art: "assumptions" },
      { label: "Zoom out", art: "zoomOut" },
      { label: "Zoom in", art: "zoomIn" },
      { label: "Seek disagreement", art: "disagreement" }
    ],
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
    steps: [
      { label: "Pre-work", art: "prework" },
      { label: "Silent ideas", art: "silentIdeas" },
      { label: "Pass and build", art: "passBuild" },
      { label: "Cluster and test", art: "clusterTest" }
    ],
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
    steps: [
      { label: "Choose risk", art: "chooseRisk" },
      { label: "Make low-fi test", art: "lowFiTest" },
      { label: "Predict result", art: "predictResult" },
      { label: "Observe and decide", art: "observeDecide" }
    ],
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
    steps: [
      { label: "Define behavior", art: "defineBehavior" },
      { label: "Set cadence", art: "cadence" },
      { label: "Assign owner", art: "assignOwner" },
      { label: "Review metric", art: "reviewMetric" }
    ],
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
    steps: [
      { label: "Expected vs actual", art: "expectedActual" },
      { label: "Name evidence", art: "nameEvidence" },
      { label: "Update assumptions", art: "updateAssumptions" },
      { label: "Choose next move", art: "chooseNext" }
    ],
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

function textBlock({ text, x, y, width = 44, size = 22, weight = 400, fill = "#172033", lineHeight = 1.28, anchor = "start" }) {
  const lines = wrap(text, width);
  const tspans = lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : size * lineHeight}">${esc(line)}</tspan>`)
    .join("");
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif">${tspans}</text>`;
}

function iconStroke(accent) {
  return `stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
}

function speechBubble(x, y, w, h, accent, fill = "#ffffff") {
  return `<path d="M ${x + 14} ${y} H ${x + w - 14} Q ${x + w} ${y} ${x + w} ${y + 14} V ${y + h - 18} Q ${x + w} ${y + h - 4} ${x + w - 14} ${y + h - 4} H ${x + 42} L ${x + 24} ${y + h + 12} V ${y + h - 4} H ${x + 14} Q ${x} ${y + h - 4} ${x} ${y + h - 18} V ${y + 14} Q ${x} ${y} ${x + 14} ${y} Z" fill="${fill}" stroke="${accent}" stroke-opacity="0.52" stroke-width="3"/>`;
}

function miniPerson(x, y, accent) {
  return `
    <circle cx="${x}" cy="${y}" r="13" fill="${accent}" opacity="0.92"/>
    <path d="M ${x - 23} ${y + 44} Q ${x} ${y + 22} ${x + 23} ${y + 44}" fill="${accent}" opacity="0.18" stroke="${accent}" stroke-width="3"/>
  `;
}

function checklist(x, y, accent, rows = 3) {
  return Array.from({ length: rows }, (_, index) => {
    const yy = y + index * 22;
    return `
      <circle cx="${x}" cy="${yy}" r="6" fill="${accent}" opacity="${index === 0 ? 0.95 : 0.45}"/>
      <line x1="${x + 16}" y1="${yy}" x2="${x + 86}" y2="${yy}" ${iconStroke(accent)} opacity="${index === 0 ? 0.72 : 0.32}"/>
    `;
  }).join("");
}

function nodes(x, y, accent) {
  return `
    <circle cx="${x}" cy="${y}" r="16" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
    <circle cx="${x + 82}" cy="${y + 42}" r="16" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
    <circle cx="${x + 148}" cy="${y - 8}" r="16" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
    <path d="M ${x + 15} ${y + 8} L ${x + 66} ${y + 34}" ${iconStroke(accent)} opacity="0.62"/>
    <path d="M ${x + 96} ${y + 33} L ${x + 133} ${y + 2}" ${iconStroke(accent)} opacity="0.62"/>
  `;
}

function art(type, x, y, accent, tint) {
  const bg = `<rect x="${x}" y="${y}" width="194" height="132" rx="20" fill="${tint}" opacity="0.8"/>`;
  const g = (body) => `<g class="step-art">${bg}${body}</g>`;
  const s = (body) => `<g transform="translate(${x}, ${y})">${body}</g>`;

  const drawings = {
    complaint: g(s(`
      ${miniPerson(47, 68, accent)}
      ${speechBubble(74, 28, 84, 48, accent)}
      <path d="M 114 41 V 58" ${iconStroke(accent)}/>
      <circle cx="114" cy="70" r="3.5" fill="${accent}"/>
      <path d="M 23 104 H 165" ${iconStroke(accent)} opacity="0.18"/>
    `)),
    hiddenFix: g(s(`
      <rect x="44" y="34" width="88" height="62" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 67 78 L 104 41" ${iconStroke(accent)} opacity="0.22"/>
      <path d="M 72 72 L 126 104" ${iconStroke(accent)}/>
      <circle cx="56" cy="82" r="16" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 119 29 L 151 61" ${iconStroke(accent)} opacity="0.75"/>
      <path d="M 154 64 L 142 76" ${iconStroke(accent)} opacity="0.75"/>
    `)),
    reframe: g(s(`
      <rect x="39" y="28" width="116" height="76" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 60 67 H 126" ${iconStroke(accent)} opacity="0.28"/>
      <path d="M 60 83 H 103" ${iconStroke(accent)} opacity="0.28"/>
      <path d="M 40 58 Q 65 18 107 24" ${iconStroke(accent)}/>
      <path d="M 99 13 L 112 25 L 96 34" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="129" cy="78" r="21" fill="${accent}" opacity="0.16"/>
      <circle cx="129" cy="78" r="8" fill="${accent}"/>
    `)),
    evidenceQuestion: g(s(`
      <circle cx="79" cy="62" r="36" fill="#ffffff" stroke="${accent}" stroke-width="5"/>
      <path d="M 107 90 L 142 124" ${iconStroke(accent)}/>
      <text x="79" y="76" text-anchor="middle" font-size="52" font-weight="900" fill="${accent}" font-family="Inter, ui-sans-serif, system-ui">?</text>
      ${checklist(135, 43, accent, 3)}
    `)),
    observeWork: g(s(`
      <path d="M 35 66 Q 96 16 157 66 Q 96 116 35 66 Z" fill="#ffffff" stroke="${accent}" stroke-width="5"/>
      <circle cx="96" cy="66" r="23" fill="${accent}" opacity="0.18" stroke="${accent}" stroke-width="4"/>
      <circle cx="96" cy="66" r="8" fill="${accent}"/>
      <rect x="44" y="100" width="104" height="15" rx="8" fill="${accent}" opacity="0.16"/>
    `)),
    surpriseNote: g(s(`
      <rect x="48" y="31" width="98" height="78" rx="10" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 65 55 H 122" ${iconStroke(accent)} opacity="0.34"/>
      <path d="M 65 75 H 112" ${iconStroke(accent)} opacity="0.34"/>
      <path d="M 144 26 L 158 16 M 151 48 L 169 48 M 140 70 L 154 83" ${iconStroke(accent)}/>
      <text x="93" y="95" text-anchor="middle" font-size="58" font-weight="900" fill="${accent}" font-family="Inter, ui-sans-serif, system-ui">!</text>
    `)),
    separateSymptoms: g(s(`
      <path d="M 40 30 H 154 L 112 74 V 106 L 82 118 V 74 Z" fill="#ffffff" stroke="${accent}" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="55" cy="42" r="6" fill="${accent}" opacity="0.7"/>
      <circle cx="86" cy="42" r="6" fill="${accent}" opacity="0.7"/>
      <circle cx="117" cy="42" r="6" fill="${accent}" opacity="0.7"/>
      <path d="M 58 112 H 36 M 136 112 H 158" ${iconStroke(accent)} opacity="0.52"/>
    `)),
    priorityPick: g(s(`
      <rect x="36" y="30" width="116" height="86" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 94 30 V 116 M 36 73 H 152" ${iconStroke(accent)} opacity="0.24"/>
      <path d="M 117 51 L 126 68 L 145 71 L 131 84 L 135 103 L 117 94 L 100 103 L 104 84 L 90 71 L 109 68 Z" fill="${accent}"/>
    `)),
    systemGoal: g(s(`
      <circle cx="95" cy="70" r="49" fill="#ffffff" stroke="${accent}" stroke-width="5"/>
      <circle cx="95" cy="70" r="29" fill="none" stroke="${accent}" stroke-width="4" opacity="0.45"/>
      <circle cx="95" cy="70" r="9" fill="${accent}"/>
      <path d="M 95 70 L 139 37" ${iconStroke(accent)}/>
      <path d="M 134 25 H 162 L 151 38 L 162 51 H 134 Z" fill="${accent}" opacity="0.86"/>
    `)),
    udeList: g(s(`
      <rect x="46" y="27" width="105" height="92" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <circle cx="67" cy="55" r="7" fill="${accent}"/>
      <circle cx="67" cy="79" r="7" fill="${accent}" opacity="0.7"/>
      <circle cx="67" cy="103" r="7" fill="${accent}" opacity="0.45"/>
      <path d="M 83 55 H 130 M 83 79 H 120 M 83 103 H 134" ${iconStroke(accent)} opacity="0.34"/>
    `)),
    causeMap: g(s(nodes(28, 58, accent))),
    constraint: g(s(`
      <path d="M 45 25 H 148 L 112 64 L 148 110 H 45 L 81 64 Z" fill="#ffffff" stroke="${accent}" stroke-width="5" stroke-linejoin="round"/>
      <path d="M 80 64 H 112" ${iconStroke(accent)}/>
      <path d="M 28 64 H 53 M 141 64 H 166" ${iconStroke(accent)} opacity="0.36"/>
    `)),
    decisionRisk: g(s(`
      <path d="M 96 23 L 152 112 H 40 Z" fill="#ffffff" stroke="${accent}" stroke-width="5" stroke-linejoin="round"/>
      <path d="M 96 52 V 82" ${iconStroke(accent)}/>
      <circle cx="96" cy="98" r="5" fill="${accent}"/>
    `)),
    vanishOption: g(s(`
      <rect x="37" y="38" width="92" height="62" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M 74 69 H 142" ${iconStroke(accent)}/>
      <path d="M 135 60 L 150 69 L 135 78" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="55" cy="51" r="10" fill="${accent}" opacity="0.22"/>
      <circle cx="39" cy="91" r="6" fill="${accent}" opacity="0.18"/>
    `)),
    alternatives: g(s(`
      <circle cx="54" cy="66" r="18" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="112" y="22" width="45" height="28" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="112" y="58" width="45" height="28" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="112" y="94" width="45" height="28" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 72 66 C 91 66 91 36 112 36 M 72 66 H 112 M 72 66 C 91 66 91 108 112 108" ${iconStroke(accent)} opacity="0.62"/>
    `)),
    tripwires: g(s(`
      <rect x="36" y="32" width="122" height="78" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 55 91 L 82 73 L 104 82 L 138 51" ${iconStroke(accent)}/>
      <path d="M 54 59 H 151" stroke="${accent}" stroke-width="3" stroke-dasharray="7 7" opacity="0.5"/>
      <path d="M 137 29 V 58" ${iconStroke(accent)}/>
      <path d="M 137 29 H 162 L 153 42 L 162 55 H 137" fill="${accent}" opacity="0.85"/>
    `)),
    assumptions: g(s(`
      <rect x="45" y="28" width="107" height="90" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      ${checklist(67, 55, accent, 3)}
      <text x="135" y="84" text-anchor="middle" font-size="42" font-weight="900" fill="${accent}" font-family="Inter, ui-sans-serif, system-ui">?</text>
    `)),
    zoomOut: g(s(`
      <circle cx="96" cy="66" r="50" fill="#ffffff" stroke="${accent}" stroke-width="5"/>
      <path d="M 62 66 H 130 M 96 32 V 100 M 72 42 C 88 55 104 55 120 42 M 72 90 C 88 77 104 77 120 90" ${iconStroke(accent)} opacity="0.44"/>
      <path d="M 132 99 L 158 123" ${iconStroke(accent)}/>
    `)),
    zoomIn: g(s(`
      <rect x="46" y="36" width="72" height="58" rx="10" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <circle cx="122" cy="72" r="32" fill="none" stroke="${accent}" stroke-width="5"/>
      <path d="M 145 95 L 166 116" ${iconStroke(accent)}/>
      <path d="M 63 58 H 101 M 63 76 H 87" ${iconStroke(accent)} opacity="0.36"/>
      <circle cx="123" cy="72" r="8" fill="${accent}" opacity="0.75"/>
    `)),
    disagreement: g(s(`
      ${speechBubble(28, 35, 64, 46, accent)}
      ${speechBubble(101, 55, 64, 46, accent)}
      <path d="M 49 58 H 73 M 133 78 H 154 M 143 67 V 89" ${iconStroke(accent)}/>
    `)),
    prework: g(s(`
      <rect x="55" y="25" width="88" height="100" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 80 25 H 118 V 42 H 80 Z" fill="${accent}" opacity="0.18" stroke="${accent}" stroke-width="3"/>
      ${checklist(75, 64, accent, 3)}
      <circle cx="147" cy="103" r="19" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 147 92 V 104 L 156 110" ${iconStroke(accent)}/>
    `)),
    silentIdeas: g(s(`
      <circle cx="76" cy="55" r="24" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 58 101 Q 76 80 94 101" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="107" y="34" width="42" height="35" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="116" y="82" width="42" height="35" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="4" opacity="0.8"/>
      <path d="M 119 51 H 138 M 128 99 H 148" ${iconStroke(accent)} opacity="0.4"/>
    `)),
    passBuild: g(s(`
      <rect x="38" y="48" width="50" height="38" rx="9" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="106" y="48" width="50" height="38" rx="9" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 89 67 H 105" ${iconStroke(accent)}/>
      <path d="M 102 59 L 114 67 L 102 75" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M 55 102 Q 75 118 98 102 M 96 102 Q 116 118 139 102" ${iconStroke(accent)} opacity="0.46"/>
    `)),
    clusterTest: g(s(`
      <rect x="38" y="29" width="35" height="29" rx="7" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="82" y="29" width="35" height="29" rx="7" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="38" y="69" width="35" height="29" rx="7" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 130 39 V 80 Q 130 97 116 111 H 156 Q 142 97 142 80 V 39" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 124 82 H 148" ${iconStroke(accent)} opacity="0.45"/>
    `)),
    chooseRisk: g(s(`
      <circle cx="96" cy="68" r="47" fill="#ffffff" stroke="${accent}" stroke-width="5"/>
      <circle cx="96" cy="68" r="24" fill="none" stroke="${accent}" stroke-width="4" opacity="0.38"/>
      <path d="M 96 31 V 68 H 132" ${iconStroke(accent)}/>
      <path d="M 51 103 L 74 103 L 62 83 Z" fill="${accent}" opacity="0.85"/>
    `)),
    lowFiTest: g(s(`
      <rect x="42" y="31" width="112" height="76" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="58" y="49" width="37" height="22" rx="5" fill="${accent}" opacity="0.18"/>
      <rect x="105" y="49" width="31" height="44" rx="5" fill="${accent}" opacity="0.12"/>
      <path d="M 59 88 H 93 M 106 88 H 135" ${iconStroke(accent)} opacity="0.32"/>
      <path d="M 41 118 L 154 21" ${iconStroke(accent)} opacity="0.2"/>
    `)),
    predictResult: g(s(`
      <rect x="41" y="33" width="112" height="79" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 59 91 L 82 72 L 104 80 L 134 51" ${iconStroke(accent)}/>
      <path d="M 127 49 L 139 49 L 139 61" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="62" cy="51" r="7" fill="${accent}" opacity="0.35"/>
    `)),
    observeDecide: g(s(`
      <path d="M 34 62 Q 77 29 120 62 Q 77 96 34 62 Z" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <circle cx="77" cy="62" r="14" fill="${accent}" opacity="0.22" stroke="${accent}" stroke-width="4"/>
      <path d="M 119 86 L 137 104 L 166 65" ${iconStroke(accent)}/>
      <path d="M 135 45 L 164 74" ${iconStroke(accent)} opacity="0.18"/>
    `)),
    defineBehavior: g(s(`
      <rect x="43" y="32" width="108" height="82" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 69 74 L 86 91 L 126 51" ${iconStroke(accent)}/>
      <circle cx="65" cy="50" r="10" fill="${accent}" opacity="0.22"/>
      <path d="M 84 50 H 130" ${iconStroke(accent)} opacity="0.28"/>
    `)),
    cadence: g(s(`
      <rect x="45" y="32" width="105" height="84" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 45 55 H 150" ${iconStroke(accent)} opacity="0.28"/>
      <circle cx="70" cy="79" r="8" fill="${accent}" opacity="0.35"/>
      <circle cx="97" cy="79" r="8" fill="${accent}" opacity="0.35"/>
      <circle cx="124" cy="79" r="8" fill="${accent}"/>
      <path d="M 68 23 V 43 M 126 23 V 43" ${iconStroke(accent)}/>
    `)),
    assignOwner: g(s(`
      <circle cx="83" cy="59" r="28" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 45 113 Q 83 82 121 113" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="116" y="33" width="42" height="42" rx="21" fill="${accent}"/>
      <text x="137" y="62" text-anchor="middle" font-size="24" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">1</text>
    `)),
    reviewMetric: g(s(`
      <rect x="38" y="31" width="120" height="84" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="59" y="78" width="16" height="20" rx="4" fill="${accent}" opacity="0.42"/>
      <rect x="90" y="61" width="16" height="37" rx="4" fill="${accent}" opacity="0.62"/>
      <rect x="121" y="47" width="16" height="51" rx="4" fill="${accent}"/>
      <path d="M 56 48 H 100" ${iconStroke(accent)} opacity="0.24"/>
    `)),
    expectedActual: g(s(`
      <rect x="39" y="42" width="50" height="63" rx="10" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <rect x="105" y="25" width="50" height="80" rx="10" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 48 73 H 80 M 114 73 H 146" ${iconStroke(accent)} opacity="0.33"/>
      <path d="M 88 67 H 105" ${iconStroke(accent)}/>
      <path d="M 101 59 L 113 67 L 101 75" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    `)),
    nameEvidence: g(s(`
      <rect x="52" y="29" width="82" height="91" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      <path d="M 70 55 H 115 M 70 75 H 106 M 70 95 H 114" ${iconStroke(accent)} opacity="0.32"/>
      <circle cx="132" cy="88" r="24" fill="none" stroke="${accent}" stroke-width="5"/>
      <path d="M 149 105 L 166 122" ${iconStroke(accent)}/>
    `)),
    updateAssumptions: g(s(`
      <rect x="43" y="30" width="107" height="89" rx="12" fill="#ffffff" stroke="${accent}" stroke-width="4"/>
      ${checklist(66, 58, accent, 3)}
      <path d="M 116 104 L 154 66" ${iconStroke(accent)}/>
      <path d="M 148 59 L 160 71 L 151 80 L 139 68 Z" fill="${accent}"/>
    `)),
    chooseNext: g(s(`
      <path d="M 45 50 H 129 L 151 68 L 129 86 H 45 Z" fill="#ffffff" stroke="${accent}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M 45 98 H 107 L 127 114 H 45 Z" fill="#ffffff" stroke="${accent}" stroke-width="4" stroke-linejoin="round" opacity="0.7"/>
      <path d="M 45 32 V 123" ${iconStroke(accent)}/>
      <circle cx="45" cy="32" r="8" fill="${accent}"/>
    `))
  };

  return drawings[type] ?? g(s(nodes(28, 58, accent)));
}

function stepFrame(step, x, y, accent, tint, index) {
  return `
    <g class="frame-card">
      <rect class="frame-bg" x="${x}" y="${y}" width="252" height="310" rx="20" fill="#ffffff" stroke="${accent}" stroke-opacity="0.34" stroke-width="2"/>
      <rect x="${x + 18}" y="${y + 18}" width="80" height="28" rx="14" fill="${accent}" opacity="0.12"/>
      <text x="${x + 58}" y="${y + 38}" text-anchor="middle" font-size="13" font-weight="900" fill="${accent}" letter-spacing="0" font-family="Inter, ui-sans-serif, system-ui">STEP ${index}</text>
      <circle cx="${x + 42}" cy="${y + 86}" r="25" fill="${accent}"/>
      <text x="${x + 42}" y="${y + 95}" text-anchor="middle" font-size="23" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${index}</text>
      ${textBlock({ text: step.label, x: x + 76, y: y + 78, width: 18, size: 23, weight: 850, fill: "#172033", lineHeight: 1.05 })}
      ${art(step.art, x + 29, y + 145, accent, tint)}
    </g>
  `;
}

function arrow(x1, y, x2, accent) {
  return `
    <path d="M ${x1} ${y} H ${x2}" stroke="${accent}" stroke-width="4" stroke-linecap="round" opacity="0.52"/>
    <path d="M ${x2 - 11} ${y - 8} L ${x2 + 1} ${y} L ${x2 - 11} ${y + 8}" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.52"/>
  `;
}

function card({ title, text, x, y, accent, label }) {
  return `
    <rect x="${x}" y="${y}" width="545" height="176" rx="18" fill="#ffffff" stroke="#d9e2ef" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="545" height="46" rx="18" fill="${accent}" opacity="0.94"/>
    <text x="${x + 24}" y="${y + 31}" font-size="20" font-weight="800" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${esc(title)}</text>
    <text x="${x + 500}" y="${y + 31}" text-anchor="end" font-size="15" font-weight="800" fill="#ffffff" opacity="0.88" font-family="Inter, ui-sans-serif, system-ui">${esc(label)}</text>
    ${textBlock({ text, x: x + 24, y: y + 82, width: 48, size: 22, weight: 560, fill: "#243047", lineHeight: 1.26 })}
  `;
}

function image(skill) {
  const framePositions = [70, 370, 670, 970];
  const cardY = 288;
  const cardW = 252;
  const arrowY = cardY + 150;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="1060" viewBox="0 0 1280 1060" role="img" aria-labelledby="title desc">
  <title id="title">${esc(skill.rank)} ${esc(skill.title)}</title>
  <desc id="desc">Illustrated workflow with business and coding examples for ${esc(skill.title)}.</desc>
  <style>
    .frame-card .frame-bg { transition: stroke-width 160ms ease, filter 160ms ease; }
    .frame-card:hover .frame-bg { stroke-width: 4; filter: url(#softShadow); }
    @media (prefers-reduced-motion: reduce) {
      .frame-card .frame-bg { transition: none; }
    }
  </style>
  <defs>
    <filter id="softShadow" x="-8%" y="-18%" width="116%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.13"/>
    </filter>
  </defs>
  <rect width="1280" height="1060" fill="#f8fafc"/>
  <rect x="34" y="34" width="1212" height="992" rx="28" fill="#ffffff" stroke="#d9e2ef" stroke-width="2"/>
  <rect x="34" y="34" width="1212" height="164" rx="28" fill="${skill.tint}"/>
  <circle cx="103" cy="112" r="44" fill="${skill.accent}"/>
  <text x="103" y="125" text-anchor="middle" font-size="34" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">${skill.rank}</text>
  <text x="170" y="94" font-size="39" font-weight="900" fill="#111827" font-family="Inter, ui-sans-serif, system-ui">${esc(skill.title)}</text>
  ${textBlock({ text: `Use when: ${skill.useWhen}`, x: 172, y: 135, width: 78, size: 23, weight: 560, fill: "#263244", lineHeight: 1.24 })}

  <text x="70" y="248" font-size="25" font-weight="900" fill="#111827" font-family="Inter, ui-sans-serif, system-ui">How it works: illustrated 1 -> 2 -> 3 -> 4 flow</text>
  ${skill.steps.map((step, index) => stepFrame(step, framePositions[index], cardY, skill.accent, skill.tint, index + 1)).join("")}
  ${arrow(framePositions[0] + cardW + 14, arrowY, framePositions[1] - 16, skill.accent)}
  ${arrow(framePositions[1] + cardW + 14, arrowY, framePositions[2] - 16, skill.accent)}
  ${arrow(framePositions[2] + cardW + 14, arrowY, framePositions[3] - 16, skill.accent)}

  ${card({ title: "Business example", text: skill.business, x: 70, y: 660, accent: skill.accent, label: "scenario" })}
  ${card({ title: "Coding example", text: skill.coding, x: 665, y: 660, accent: skill.accent, label: "scenario" })}
  <rect x="70" y="892" width="1140" height="54" rx="14" fill="#f8fafc" stroke="#e5edf6"/>
  <text x="94" y="926" font-size="19" font-weight="900" fill="${skill.accent}" font-family="Inter, ui-sans-serif, system-ui">Output</text>
  ${textBlock({ text: skill.output, x: 174, y: 926, width: 92, size: 19, weight: 650, fill: "#263244", lineHeight: 1.18 })}
</svg>
`;
}

for (const skill of skills) {
  writeFileSync(join(outDir, skill.file), image(skill).replace(/[ \t]+$/gm, ""));
}

console.log(`Generated ${skills.length} SVG images in ${outDir}`);
