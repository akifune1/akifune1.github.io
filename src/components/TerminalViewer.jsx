/**
 * @file src/components/TerminalViewer.jsx
 * @description Interactive code sandbox and engineering philosophy terminal viewer.
 * Visitors can inspect principles.md, diagnostics.sh, capabilities.json, and event_streamer.ts.
 * Rendered in App.jsx.
 */

import React, { useState } from 'react';
import { Terminal, FileCode, Code, Book, Copy, Check, TerminalSquare } from 'lucide-react';
import { terminalTabs } from '../data/terminalSnippets';
import '../styles/terminalViewer.css';

/**
 * TerminalViewer Component
 * Renders a high-contrast sharp Catppuccin terminal window with tabs, syntax highlighting,
 * and 1-click clipboard copy actions.
 *
 * @returns {JSX.Element} The rendered TerminalViewer component.
 */
export default function TerminalViewer() {
  const [activeTabId, setActiveTabId] = useState(terminalTabs[0].id);
  const [copied, setCopied] = useState(false);

  // Retrieve current active tab
  const activeTab = terminalTabs.find((tab) => tab.id === activeTabId) || terminalTabs[0];

  /**
   * Helper to return icon for file tabs.
   * @param {string} iconName - Icon identifier.
   * @returns {JSX.Element} Lucide icon.
   */
  const getTabIcon = (iconName) => {
    switch (iconName) {
      case 'file-code':
        return <FileCode size={14} />;
      case 'code':
        return <Code size={14} />;
      case 'book':
        return <Book size={14} />;
      default:
        return <Terminal size={14} />;
    }
  };

  /**
   * Copies active code content to clipboard.
   */
  const handleCopyCode = async () => {
    try {
      const textToCopy = activeTab.lines.map((line) => line.content).join('\n');
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  return (
    <section id="inspector" className="inspector-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">[ 02. SYSTEM_INSPECTOR ]</span>
          <h2 className="section-title">Interactive Terminal Sandbox</h2>
          <p className="section-subtitle">
            Explore engineering principles, live diagnostics, technical capabilities, and software blueprints
            directly inside the interactive workbench.
          </p>
        </div>

        <div className="inspector-wrapper reveal stagger-1">
          {/* Clickable File Tabs */}
          <div className="inspector-tabs-bar" role="tablist">
            {terminalTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTabId === tab.id}
                className={`inspector-tab ${activeTabId === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {getTabIcon(tab.icon)}
                <span>{tab.filename}</span>
              </button>
            ))}
          </div>

          {/* Terminal Window Container */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
              </div>
              <div className="terminal-title">
                <TerminalSquare size={14} />
                <span>~/portfolio/src/{activeTab.filename}</span>
              </div>
              <span className="tag tag-sapphire" style={{ fontSize: '0.7rem' }}>
                LANG: {activeTab.language.toUpperCase()}
              </span>
            </div>

            {/* Active Command Bar */}
            <div className="inspector-command-bar">
              <div className="active-command-string">
                <Terminal size={14} />
                <span>{activeTab.command}</span>
              </div>

              <button
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={handleCopyCode}
                title="Copy snippet to clipboard"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>

            {/* Line Numbered Code Body */}
            <div className="code-inspector-body">
              {activeTab.lines.map((line) => (
                <div key={line.num} className="code-line">
                  <span className="line-number">{line.num}</span>
                  <span className={`line-content line-${line.type}`}>
                    {line.content || ' '}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
