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

export function getSkillIcon(fileName) {
  if (!fileName) return undefined;
  return skillIconMap[fileName.toLowerCase()];
}
