const projectImages = import.meta.glob("/src/assets/projects/*", {
  eager: true,
  import: "default",
});

const skillIcons = import.meta.glob("/src/assets/skills/*", {
  eager: true,
  import: "default",
});

function buildAssetMap(globResult) {
  return Object.entries(globResult).reduce((map, [path, url]) => {
    const fileName = path.split("/").pop()?.toLowerCase();
    if (fileName) {
      map[fileName] = url;
    }
    return map;
  }, {});
}

const projectImageMap = buildAssetMap(projectImages);
const skillIconMap = buildAssetMap(skillIcons);

export function getProjectImage(fileName) {
  if (!fileName) return undefined;
  return projectImageMap[fileName.toLowerCase()];
}

const SKILL_LABELS = {
  "html.png": "HTML",
  "css.png": "CSS",
  "javascript.png": "JavaScript",
  "typescript.png": "TypeScript",
  "react.png": "React",
  "nextjs.png": "Next.js",
  "vite.png": "Vite",
  "vue.png": "Vue",
  "redux.png": "Redux",
  "vitest.png": "Vitest",
  "rtl.png": "React Testing Library",
  "python.png": "Python",
  "figma.png": "Figma",
  "git.png": "Git",
  "github.png": "GitHub",
  "vscode.png": "VS Code",
};

export function getSkillIcon(fileName) {
  if (!fileName) return undefined;
  return skillIconMap[fileName.toLowerCase()];
}

export function getSkillLabel(fileName) {
  if (!fileName) return "";
  return (
    SKILL_LABELS[fileName.toLowerCase()] || fileName.replace(/\.[^.]+$/, "")
  );
}
