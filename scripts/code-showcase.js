function toggleCodeShowcase(trigger, id) {
    const element = document.querySelector(`#${id}`);
    if (element.getAttribute("aria-hidden") == "true") {
        element.setAttribute("aria-hidden", false);
        trigger.setAttribute("aria-expanded", "true");
    } else {
        element.setAttribute("aria-hidden", true);
        trigger.setAttribute("aria-expanded", "false");
    }
}

function copyCodeShowcase(trigger, id, lang) {
    const parentElement = document.getElementById(id);
    const codeElement = parentElement.querySelector("code");
    const copyButton = parentElement.querySelector(".code-copy");

    // Change values to slect right code element
    // The ID attribute is not set properly due to how we render our code elements
    codeElement.setAttribute("id", `code-${id}`);
    copyButton.setAttribute("data-clipboard-target", `#code-${id}`);
    copyButton.click();

    if (lang == "en") {
        trigger.innerText = "Copied";
    } else {
        trigger.innerText = "Copié";
    }
}