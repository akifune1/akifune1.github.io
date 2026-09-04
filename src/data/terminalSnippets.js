/**
 * @file src/data/terminalSnippets.js
 * @description Code snippets and diagnostics for the TerminalViewer interactive sandbox.
 * Combines Catppuccin Mocha syntax tokens with user-friendly engineering principles,
 * systems diagnostics, tech stack capabilities, and architecture blueprints.
 */

export const terminalTabs = [
  {
    id: "principles",
    filename: "principles.md",
    icon: "book",
    language: "markdown",
    command: "$ glow ./docs/ENGINEERING_PHILOSOPHY.md",
    lines: [
      { num: 1, content: "# User-First Engineering & Design Philosophy", type: "comment" },
      { num: 2, content: "", type: "plain" },
      { num: 3, content: "1. **Empathy-Driven UI**: Software must be intuitive, accessible, and human-friendly.", type: "output-accent" },
      { num: 4, content: "2. **Clean & Scalable Code**: Modular TypeScript architectures designed for long-term maintainability.", type: "output" },
      { num: 5, content: "3. **Sub-Second Performance**: Snappy 60fps micro-interactions build user trust and engagement.", type: "output-cyan" },
      { num: 6, content: "4. **Cross-Functional Bridge**: Translating complex technical constraints into intuitive product value.", type: "output-green" }
    ]
  },
  {
    id: "system_info",
    filename: "diagnostics.sh",
    icon: "terminal",
    language: "bash",
    command: "$ ./scripts/diagnostics.sh --profile",
    lines: [
      { num: 1, content: "#!/usr/bin/env bash", type: "comment" },
      { num: 2, content: "# Candidate Profile & Systems Telemetry", type: "comment" },
      { num: 3, content: "NAME: Kolby Hernandez", type: "output" },
      { num: 4, content: "DEGREE: B.S. in Information Technology (Honors Graduate)", type: "output-accent" },
      { num: 5, content: "SPECIALIZATION: Full-Stack Engineering & UI/UX Design Systems", type: "output" },
      { num: 6, content: "CORE_STACK: [React 19, Next.js, TypeScript, Node.js, PostgreSQL, Docker]", type: "output-cyan" },
      { num: 7, content: "STATUS: Open for Full-Time Roles & High-Impact Contracts", type: "output-green" },
      { num: 8, content: "LOCATION: Metro Manila (Available Worldwide for Remote Teams)", type: "output" },
      { num: 9, content: "SYSTEM_INTEGRITY: 100% (All operational probes nominal)", type: "output-accent" }
    ]
  },
  {
    id: "capabilities",
    filename: "capabilities.json",
    icon: "file-code",
    language: "json",
    command: "$ jq '.' ./config/stack_matrix.json",
    lines: [
      { num: 1, content: "{", type: "syntax" },
      { num: 2, content: '  "candidate": "Kolby Hernandez",', type: "string" },
      { num: 3, content: '  "education": "B.S. Information Technology",', type: "string" },
      { num: 4, content: '  "frontend": { "react": "Expert", "typescript": "Advanced", "design_systems": "Expert" },', type: "property" },
      { num: 5, content: '  "backend": { "node_express": "Expert", "apis": "REST/GraphQL", "database": "PostgreSQL" },', type: "property" },
      { num: 6, content: '  "cloud_devops": { "containers": "Docker", "ci_cd": "GitHub Actions", "aws": "Proficient" },', type: "property" },
      { num: 7, content: '  "methodology": ["User-Centered Design", "Agile Sprints", "Code Reviews"]', type: "string" },
      { num: 8, content: "}", type: "syntax" }
    ]
  },
  {
    id: "architecture",
    filename: "event_streamer.ts",
    icon: "code",
    language: "typescript",
    command: "$ cat ./services/streamer/event_bus.ts",
    lines: [
      { num: 1, content: "/** Resilient Event Streaming Microservice Blueprint */", type: "comment" },
      { num: 2, content: "import { EventEmitter } from 'node:events';", type: "keyword" },
      { num: 3, content: "import { RedisCluster } from '@infra/cache';", type: "keyword" },
      { num: 4, content: "", type: "plain" },
      { num: 5, content: "export interface StreamPayload<T = unknown> {", type: "keyword" },
      { num: 6, content: "  readonly id: string;", type: "property" },
      { num: 7, content: "  readonly timestamp: number;", type: "property" },
      { num: 8, content: "  readonly data: T;", type: "property" },
      { num: 9, content: "}", type: "plain" },
      { num: 10, content: "", type: "plain" },
      { num: 11, content: "export class RealtimeEventBus extends EventEmitter {", type: "keyword" },
      { num: 12, content: "  constructor(private readonly redis: RedisCluster) { super(); }", type: "plain" },
      { num: 13, content: "  public async dispatch<T>(payload: StreamPayload<T>): Promise<boolean> {", type: "keyword" },
      { num: 14, content: "    return await this.redis.publish('events:main', JSON.stringify(payload));", type: "plain" },
      { num: 15, content: "  }", type: "plain" },
      { num: 16, content: "}", type: "plain" }
    ]
  }
];
