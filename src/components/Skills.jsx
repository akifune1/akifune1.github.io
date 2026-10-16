/** Full skill groups without carousel or hidden mobile panels; data from portfolioData.js, used by App.jsx. */
import React from 'react';
import { Braces, Code2, Coffee, Database, Terminal, Layers, Layout, Palette, Component, Cloud, Server, ShieldCheck, Network, Search, Workflow, GitBranch, Laptop, Cpu, LockKeyhole, FileCode2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import '../styles/skills.css';

const CATEGORY_ICONS = { Code2, Layout, Server, ShieldCheck };
const SKILL_ICONS = [
  [/javascript|typescript/i, Braces], [/python/i, Terminal], [/java/i, Coffee],
  [/sql|postgres|mongo|supabase/i, Database], [/c#|c\+\+/i, Cpu], [/php/i, FileCode2],
  [/react/i, Component], [/next/i, Layers], [/html|css/i, Layout],
  [/tailwind|figma/i, Palette], [/framer/i, Workflow], [/firebase/i, Cloud],
  [/node|apache|xampp/i, Server], [/wireshark|network/i, Network],
  [/burp|vulnerability/i, Search], [/git/i, GitBranch], [/linux|kali/i, Terminal],
  [/security|crypt/i, LockKeyhole], [/code|arduino/i, Laptop],
];

function SkillIcon({ name }) {
  const Icon = SKILL_ICONS.find(([pattern]) => pattern.test(name))?.[1] ?? Code2;
  return <Icon size={16.2} strokeWidth={1.75} aria-hidden="true" />;
}

export default function Skills() {
  return <section id="skills" className="skills-section" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-header">
        <h2 id="skills-title" className="section-title">Skills &amp; Technologies<span className="heading-wipe" aria-hidden="true" /></h2>
        <p className="section-subtitle">A comprehensive overview of programming languages, web engineering frameworks, databases,
          and cybersecurity auditing tools from coursework and industry internships.</p>
      </div>
      <div className="skills-groups">{skillsData.map((category) => {
        const CategoryIcon = CATEGORY_ICONS[category.icon] ?? Code2;
        return <div className="skills-group" key={category.category}>
          <div><h3><CategoryIcon size={21.6} strokeWidth={1.75} aria-hidden="true" />{category.category}</h3><p>{category.subtitle}</p></div>
          <ul>{category.items.map((skill) => <li key={skill.name}><SkillIcon name={skill.name} /><span>{skill.name}</span></li>)}</ul>
        </div>;
      })}</div>
    </div>
  </section>;
}
