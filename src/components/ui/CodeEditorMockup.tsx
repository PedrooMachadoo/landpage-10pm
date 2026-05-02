"use client";

import { useEffect, useState, useRef } from "react";

type TokenType =
  | "comment"
  | "keyword"
  | "string"
  | "function"
  | "tag"
  | "attr"
  | "plain"
  | "number"
  | "type"
  | "operator";

interface Token { text: string; type: TokenType }

const C: Record<TokenType, string> = {
  comment:  "#546e7a",
  keyword:  "#c792ea",
  string:   "#c3e88d",
  function: "#82aaff",
  tag:      "#f07178",
  attr:     "#ffcb6b",
  plain:    "#cdd6f4",
  number:   "#f78c6c",
  type:     "#ffcb6b",
  operator: "#89ddff",
};

type Line = Token[];

const CODE: Line[] = [
  [{ text: "// 10pm — Solução digital completa", type: "comment" }],
  [{ text: "", type: "plain" }],
  [{ text: "import", type: "keyword" }, { text: " { motion } ", type: "plain" }, { text: "from", type: "keyword" }, { text: " ", type: "plain" }, { text: "'framer-motion'", type: "string" }],
  [{ text: "import", type: "keyword" }, { text: " { Button } ", type: "plain" }, { text: "from", type: "keyword" }, { text: " ", type: "plain" }, { text: "'@/components/ui'", type: "string" }],
  [{ text: "", type: "plain" }],
  [{ text: "interface ", type: "keyword" }, { text: "HeroProps", type: "type" }, { text: " {", type: "plain" }],
  [{ text: "  title", type: "plain" }, { text: ": ", type: "operator" }, { text: "string", type: "keyword" }],
  [{ text: "  subtitle", type: "plain" }, { text: ": ", type: "operator" }, { text: "string", type: "keyword" }],
  [{ text: "}", type: "plain" }],
  [{ text: "", type: "plain" }],
  [{ text: "export function ", type: "keyword" }, { text: "Hero", type: "function" }, { text: "({ title, subtitle }: ", type: "plain" }, { text: "HeroProps", type: "type" }, { text: ") {", type: "plain" }],
  [{ text: "  const ", type: "keyword" }, { text: "variants", type: "plain" }, { text: " = {", type: "plain" }],
  [{ text: "    hidden", type: "attr" }, { text: ": { opacity: ", type: "plain" }, { text: "0", type: "number" }, { text: ", y: ", type: "plain" }, { text: "40", type: "number" }, { text: " },", type: "plain" }],
  [{ text: "    visible", type: "attr" }, { text: ": { opacity: ", type: "plain" }, { text: "1", type: "number" }, { text: ", y: ", type: "plain" }, { text: "0", type: "number" }, { text: " },", type: "plain" }],
  [{ text: "  }", type: "plain" }],
  [{ text: "", type: "plain" }],
  [{ text: "  return (", type: "plain" }],
  [
    { text: "    <", type: "tag" }, { text: "motion.section", type: "function" },
    { text: " initial=", type: "attr" }, { text: '"hidden"', type: "string" },
    { text: " animate=", type: "attr" }, { text: '"visible"', type: "string" },
    { text: ">", type: "tag" },
  ],
  [
    { text: "      <", type: "tag" }, { text: "h1", type: "tag" },
    { text: " className=", type: "attr" }, { text: '"hero__title"', type: "string" },
    { text: ">", type: "tag" }, { text: "{title}", type: "plain" },
    { text: "</", type: "tag" }, { text: "h1>", type: "tag" },
  ],
  [
    { text: "      <", type: "tag" }, { text: "p", type: "tag" },
    { text: " className=", type: "attr" }, { text: '"hero__sub"', type: "string" },
    { text: ">", type: "tag" }, { text: "{subtitle}", type: "plain" },
    { text: "</", type: "tag" }, { text: "p>", type: "tag" },
  ],
  [
    { text: "      <", type: "tag" }, { text: "Button", type: "function" },
    { text: " href=", type: "attr" }, { text: '"#contact"', type: "string" },
    { text: " variant=", type: "attr" }, { text: '"primary"', type: "string" },
    { text: ">", type: "tag" },
  ],
  [{ text: "        Iniciar Projeto →", type: "plain" }],
  [{ text: "      </", type: "tag" }, { text: "Button>", type: "function" }],
  [{ text: "    </", type: "tag" }, { text: "motion.section>", type: "function" }],
  [{ text: "  )", type: "plain" }],
  [{ text: "}", type: "plain" }],
];

export default function CodeEditorMockup() {
  const [revealedLines, setRevealedLines] = useState(0);
  const [revealedChars, setRevealedChars] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (revealedLines >= CODE.length) {
      const t = setTimeout(() => { setRevealedLines(0); setRevealedChars(0); }, 3200);
      return () => clearTimeout(t);
    }
    const line = CODE[revealedLines];
    const total = line.reduce((s, tk) => s + tk.text.length, 0);
    if (revealedChars >= total) {
      const t = setTimeout(() => { setRevealedLines((l) => l + 1); setRevealedChars(0); }, total === 0 ? 35 : 90);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setRevealedChars((c) => Math.min(c + 2, total)), 22);
    return () => clearTimeout(t);
  }, [revealedLines, revealedChars]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [revealedLines]);

  const renderLines = () =>
    CODE.slice(0, revealedLines + 1).map((line, li) => {
      const isCurrent = li === revealedLines;
      let left = isCurrent ? revealedChars : Infinity;
      return (
        <div key={li} style={{ display: "flex", minHeight: "1.65em" }}>
          <span style={{ color: "#2a2f42", userSelect: "none", width: "2.4rem", textAlign: "right", paddingRight: "1.2rem", flexShrink: 0 }}>
            {li + 1}
          </span>
          <span style={{ flex: 1, whiteSpace: "pre" }}>
            {line.map((tk, ti) => {
              if (left <= 0) return null;
              const visible = tk.text.slice(0, left);
              left -= tk.text.length;
              if (!visible) return null;
              return <span key={ti} style={{ color: C[tk.type] }}>{visible}</span>;
            })}
            {isCurrent && cursorOn && (
              <span style={{
                display: "inline-block", width: "2px", height: "1.1em",
                verticalAlign: "text-bottom", background: "#4361ee",
                boxShadow: "0 0 6px #4361ee99", borderRadius: "1px", marginLeft: "1px",
              }} />
            )}
          </span>
        </div>
      );
    });

  return (
    /* Fixed-height container — never grows */
    <div
      style={{
        background: "#0d1117",
        height: "460px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "'JetBrains Mono','Fira Code','Cascadia Code','SF Mono',ui-monospace,monospace",
      }}
    >
      {/* Title bar */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: "12px", padding: "10px 20px", background: "#010409", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "4px", background: "#0d1117", color: "#cdd6f4", fontSize: "11px", borderBottom: "1.5px solid #4361ee" }}>
            <span style={{ color: "#82aaff", fontSize: 10 }}>◆</span> Hero.tsx
          </div>
          <span style={{ padding: "4px 12px", fontSize: "11px", color: "#2a2f42" }}>page.tsx</span>
          <span style={{ padding: "4px 12px", fontSize: "11px", color: "#2a2f42" }}>globals.css</span>
        </div>
        <span style={{ marginLeft: "auto", fontSize: "11px", color: "#2a2f42" }}>10pm — studio</span>
      </div>

      {/* Editor body — flex-1 with minHeight:0 to stay inside fixed parent */}
      <div style={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
        {/* Active-file accent bar */}
        <div style={{ width: "3px", flexShrink: 0, background: "linear-gradient(to bottom, #4361ee, transparent)" }} />

        {/* Code scroll area */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: "hidden",
            overflowX: "hidden",
            padding: "16px 0 16px 0",
            fontSize: "12px",
            lineHeight: "1.7",
            color: "#cdd6f4",
          }}
        >
          {renderLines()}
        </div>

        {/* Minimap */}
        <div style={{ width: "56px", flexShrink: 0, opacity: 0.18, overflow: "hidden", borderLeft: "1px solid rgba(255,255,255,0.04)", padding: "16px 4px" }} aria-hidden>
          {CODE.slice(0, revealedLines + 1).map((line, li) => {
            const w = Math.min((line.reduce((s, tk) => s + tk.text.length, 0) / 40) * 100, 100);
            return (
              <div key={li} style={{ height: "4px", margin: "1.5px 0", width: `${w}%`, background: line[0]?.type === "comment" ? "#546e7a" : "#cdd6f480", borderRadius: "1px" }} />
            );
          })}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 16px", background: "#4361ee", color: "rgba(255,255,255,0.9)", fontSize: "10px" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <span>⎇ main</span>
          <span>0 problems</span>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <span>Ln {Math.min(revealedLines + 1, CODE.length)}, Col {revealedChars + 1}</span>
          <span>TypeScript JSX</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}
