import React, { useState, useRef, useEffect } from "react";
import { escapeHtml } from "../scripts/html.js";


export default function CodePreview({ children }) {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const demoContainerRef = useRef(null);
  const codeContentRef = useRef(null);

  useEffect(() => {
    if (demoContainerRef.current && codeContentRef.current) {
      const astroSlot = demoContainerRef.current.querySelector("astro-slot");
      const nodesToSerialize = astroSlot
        ? astroSlot.childNodes
        : demoContainerRef.current.childNodes;

      // Create a container div to hold clones of these nodes
      const container = document.createElement("div");
      nodesToSerialize.forEach((node) => {
        container.appendChild(node.cloneNode(true));
      });

      // Escape and set code content
      const rawHtml = container.innerHTML.trim();
      codeContentRef.current.innerHTML = escapeHtml(rawHtml);
    }
  }, [children]);

  const toggleCode = (event) => {
    event.stopPropagation();
    setIsCodeVisible(!isCodeVisible);
  };

  const copyCode = async (event) => {
    event.stopPropagation();

    if (!codeContentRef.current) return;

    try {
      const code = codeContentRef.current.innerText.trim();
      await navigator.clipboard.writeText(code);
      setCopyStatus("Copied!");
    } catch {
      setCopyStatus("Copy failed");
    }

    setTimeout(() => setCopyStatus(""), 2000);
  };

  return (
    <div className="preview-container">
      <div className="code-preview">
        <div className="demo-container" ref={demoContainerRef}>
          {children}
        </div>

        <div className="button-group">
          <gcds-button
            class="toggle-btn"
            button-role="secondary"
            size="small"
            onClick={toggleCode}
          >
            {isCodeVisible ? "Hide Code" : "View Code"}
          </gcds-button>
          <gcds-button
            class="toggle-btn"
            button-role="secondary"
            size="small"
            onClick={copyCode}
          >
            Copy Code
          </gcds-button>
          <span className="copy-status">{copyStatus}</span>
        </div>
      </div>

      <pre className={`code-block ${isCodeVisible ? "" : "hidden"}`}>
        <code className="code-content" ref={codeContentRef}></code>
      </pre>
    </div>
  );
}
