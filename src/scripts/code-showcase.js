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
    const element = document.querySelector(`#${id}-copy`);

    navigator.clipboard.writeText(element.innerText);
    if (lang == "en") {
        trigger.innerText = "Copied";
    } else {
        trigger.innerText = "Copié";
    }
}