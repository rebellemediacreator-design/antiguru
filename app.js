const STORAGE_KEY = "rebelle-antiguru-challenge-v2";

const app = document.getElementById("app");
const tabs = Array.from(document.querySelectorAll(".day-tab"));
const pages = Array.from(document.querySelectorAll(".page"));
const inputs = Array.from(document.querySelectorAll("[data-key]"));
const checks = Array.from(document.querySelectorAll("[data-check]"));
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.getElementById("progressFill");
const exportButton = document.getElementById("exportButton");
const resetButton = document.getElementById("resetButton");
const goButtons = Array.from(document.querySelectorAll("[data-go]"));

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { fields: {}, checks: {} };
    const parsed = JSON.parse(saved);
    return {
      fields: parsed.fields || {},
      checks: parsed.checks || {}
    };
  } catch (error) {
    console.warn("Challenge-Daten konnten nicht gelesen werden.", error);
    return { fields: {}, checks: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function hydrate() {
  inputs.forEach((field) => {
    const key = field.dataset.key;
    field.value = state.fields[key] || "";
  });

  checks.forEach((box) => {
    const key = box.dataset.check;
    box.checked = Boolean(state.checks[key]);
  });

  updateProgress();
}

function updateProgress() {
  const completed = checks.filter((box) => box.checked).length;
  const total = checks.length || 1;
  const progress = Math.round((completed / total) * 100);
  progressLabel.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;
}

function showPage(pageId) {
  const targetPage = document.getElementById(pageId);
  if (!targetPage) return;

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.target === pageId));
  pages.forEach((page) => page.classList.toggle("active", page.id === pageId));

  app.dataset.bg = targetPage.dataset.bg || "0";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function exportData() {
  const exportPayload = {
    title: "Die Anti-Guru Challenge",
    brand: "RE:BELLE™ Media",
    exportedAt: new Date().toISOString(),
    fields: state.fields,
    checks: state.checks
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "rebelle-antiguru-challenge.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function resetChallenge() {
  const confirmed = window.confirm("Alle Eingaben dieser Challenge löschen?");
  if (!confirmed) return;

  state = { fields: {}, checks: {} };
  localStorage.removeItem(STORAGE_KEY);
  hydrate();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showPage(tab.dataset.target));
});

goButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

inputs.forEach((field) => {
  field.addEventListener("input", () => {
    state.fields[field.dataset.key] = field.value;
    saveState();
  });
});

checks.forEach((box) => {
  box.addEventListener("change", () => {
    state.checks[box.dataset.check] = box.checked;
    saveState();
    updateProgress();
  });
});

exportButton.addEventListener("click", exportData);
resetButton.addEventListener("click", resetChallenge);

hydrate();
