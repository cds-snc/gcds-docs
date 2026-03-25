const STORAGE_KEY = "selectedTab";
const DEFAULT_TAB = "Overview";
const TAB_NAMES = ["Overview", "Examples"];

/**
 * Shows the given tab and hides all others within the page.
 * @param {string} tab
 */
const showTab = (tab) => {
  TAB_NAMES.forEach((name) => {
    const content = document.getElementById(name.toLowerCase());
    const button = document.getElementById(`tab-${name}`);
    if (!content || !button) return;
    content.style.display = name === tab ? "block" : "none";
    button.classList.toggle("active", name === tab);
  });
};

/**
 * Initialises tab switching behaviour and restores the persisted selection.
 */
export const initTabs = () => {
  const saved = localStorage.getItem(STORAGE_KEY) ?? DEFAULT_TAB;
  showTab(saved);

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", (e) => {
      const tab = e.currentTarget.textContent.trim();
      localStorage.setItem(STORAGE_KEY, tab);
      showTab(tab);
    });
  });
};

