import { escapeHtml } from "./html.js";

/**
 * Wires up a single .preview-container element with toggle and copy behaviour.
 * @param {HTMLElement} container
 */
const initPreviewContainer = (container) => {
  const toggleBtn = container.querySelector(".toggle-btn");
  const copyBtn = container.querySelector(".copy-btn");
  const codeBlock = container.querySelector(".code-block");
  const copyStatus = container.querySelector(".copy-status");
  const demoContainer = container.querySelector(".demo-container");
  const codeContent = container.querySelector(".code-content");

  codeContent.innerHTML = escapeHtml(demoContainer.innerHTML.trim());

  let isCodeVisible = false;

  toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    isCodeVisible = !isCodeVisible;
    codeBlock.classList.toggle("hidden", !isCodeVisible);
    toggleBtn.textContent = isCodeVisible ? "Hide Code" : "View Code";
  });

  copyBtn.addEventListener("click", async (event) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(codeContent.innerText.trim());
      copyStatus.textContent = "Copied!";
    } catch {
      copyStatus.textContent = "Copy failed";
    }
    setTimeout(() => (copyStatus.textContent = ""), 2000);
  });
};

/**
 * Initialises all .preview-container elements on the page.
 */
export const initCodePreviews = () => {
  document
    .querySelectorAll(".preview-container")
    .forEach(initPreviewContainer);
};

