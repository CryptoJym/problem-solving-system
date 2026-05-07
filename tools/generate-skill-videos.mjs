import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, rmdirSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const imageDir = "assets/skill-domain-images";
const videoDir = "assets/skill-domain-videos";
const tmpDir = ".tmp";
const frameDir = join(tmpDir, "skill-video-frames");

mkdirSync(videoDir, { recursive: true });
rmSync(frameDir, { recursive: true, force: true });
mkdirSync(frameDir, { recursive: true });

const skills = [
  { rank: "01", title: "Problem Framing and Reframing", file: "01-problem-framing-and-reframing.svg", accent: "#2563eb" },
  { rank: "02", title: "Observation and Problem Finding", file: "02-observation-and-problem-finding.svg", accent: "#0891b2" },
  { rank: "03", title: "Root Cause and Constraint Mapping", file: "03-root-cause-and-constraint-mapping.svg", accent: "#7c3aed" },
  { rank: "04", title: "Decision Hygiene and Option Widening", file: "04-decision-hygiene-and-option-widening.svg", accent: "#ea580c" },
  { rank: "05", title: "Reality Testing and Evidence Seeking", file: "05-reality-testing-and-evidence-seeking.svg", accent: "#16a34a" },
  { rank: "06", title: "Structured Ideation and Brainwriting", file: "06-structured-ideation-and-brainwriting.svg", accent: "#db2777" },
  { rank: "07", title: "Rapid Prototyping and Experiments", file: "07-rapid-prototyping-and-experiments.svg", accent: "#ca8a04" },
  { rank: "08", title: "Operating Rhythm Implementation", file: "08-operating-rhythm-implementation.svg", accent: "#0f766e" },
  { rank: "09", title: "Learning Mindset and Retrospective", file: "09-learning-mindset-and-retrospective.svg", accent: "#4f46e5" }
];

const card = {
  y: 300,
  w: 340,
  h: 430,
  x: [70, 445, 820, 1195]
};

function injectBeforeClose(svg, overlay) {
  return svg.replace("</svg>", `${overlay}\n</svg>`);
}

function stepOverlay(skill, stepIndex) {
  if (stepIndex === 0) {
    return `
  <g id="video-intro-overlay">
    <rect x="70" y="258" width="1460" height="506" rx="28" fill="#ffffff" opacity="0.10"/>
    <rect x="70" y="258" width="1460" height="506" rx="28" fill="none" stroke="${skill.accent}" stroke-width="5" stroke-opacity="0.30"/>
    <rect x="554" y="724" width="492" height="52" rx="26" fill="${skill.accent}" opacity="0.96"/>
    <text x="800" y="758" text-anchor="middle" font-size="23" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">Follow the highlighted frame: 1 -> 2 -> 3 -> 4</text>
  </g>`;
  }

  const i = stepIndex - 1;
  const x = card.x[i];
  const y = card.y;
  return `
  <g id="video-step-${stepIndex}-overlay">
    <rect x="34" y="220" width="1532" height="582" rx="30" fill="#0f172a" opacity="0.08"/>
    <rect x="${x - 14}" y="${y - 14}" width="${card.w + 28}" height="${card.h + 28}" rx="30" fill="#ffffff" opacity="0.36"/>
    <rect x="${x - 14}" y="${y - 14}" width="${card.w + 28}" height="${card.h + 28}" rx="30" fill="none" stroke="#ffffff" stroke-width="12" stroke-opacity="0.92"/>
    <rect x="${x - 10}" y="${y - 10}" width="${card.w + 20}" height="${card.h + 20}" rx="28" fill="none" stroke="${skill.accent}" stroke-width="8"/>
    <rect x="${x + 18}" y="${y + card.h - 54}" width="138" height="34" rx="17" fill="${skill.accent}" opacity="0.98"/>
    <text x="${x + 87}" y="${y + card.h - 31}" text-anchor="middle" font-size="17" font-weight="900" fill="#ffffff" font-family="Inter, ui-sans-serif, system-ui">FRAME ${stepIndex}</text>
  </g>`;
}

function renderFrame(skill, sourceSvg, stepIndex, outPng) {
  const svg = injectBeforeClose(sourceSvg, stepOverlay(skill, stepIndex));
  const tmpSvg = join(frameDir, `${basename(skill.file, ".svg")}-step-${stepIndex}.svg`);
  writeFileSync(tmpSvg, svg);
  execFileSync("magick", ["-background", "white", tmpSvg, outPng], { stdio: "inherit" });
}

function renderVideo(skill) {
  const sourceSvg = readFileSync(join(imageDir, skill.file), "utf8");
  const skillFrameDir = join(frameDir, basename(skill.file, ".svg"));
  mkdirSync(skillFrameDir, { recursive: true });

  const pngs = [];
  for (let step = 0; step <= 4; step += 1) {
    const outPng = join(skillFrameDir, `frame-${step}.png`);
    renderFrame(skill, sourceSvg, step, outPng);
    pngs.push(outPng);
  }

  const filters = pngs
    .map((_, index) => `[${index}:v]scale=1280:-2,setsar=1,fps=30,format=yuv420p[v${index}]`)
    .join(";");
  const concatInputs = pngs.map((_, index) => `[v${index}]`).join("");
  const filterComplex = `${filters};${concatInputs}concat=n=${pngs.length}:v=1:a=0[out]`;

  const output = join(videoDir, skill.file.replace(".svg", ".mp4"));
  const args = ["-v", "error", "-y"];
  for (const png of pngs) {
    args.push("-loop", "1", "-t", "1.35", "-i", png);
  }
  args.push(
    "-filter_complex", filterComplex,
    "-map", "[out]",
    "-c:v", "libx264",
    "-crf", "24",
    "-preset", "veryfast",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    output
  );
  execFileSync("ffmpeg", args, { stdio: "inherit" });
  return output;
}

const outputs = skills.map(renderVideo);

const index = `# Skill Domain Videos

These videos are generated from the SVG skill-domain images with:

\`\`\`bash
node tools/generate-skill-videos.mjs
\`\`\`

Each clip highlights the four workflow frames in order: \`1 -> 2 -> 3 -> 4\`.

${skills.map((skill) => `- [${skill.rank}. ${skill.title}](${skill.file.replace(".svg", ".mp4")})`).join("\n")}
`;

writeFileSync(join(videoDir, "README.md"), index);
rmSync(frameDir, { recursive: true, force: true });
try {
  rmdirSync(tmpDir);
} catch (error) {
  if (error.code !== "ENOENT" && error.code !== "ENOTEMPTY") {
    throw error;
  }
}

console.log(`Generated ${outputs.length} videos in ${videoDir}`);
