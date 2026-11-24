# Operational Dashboard

A store operations dashboard for logging, filtering, and tracking issues
across a retail store network. Built with React + Vite, using
[React-Bootstrap](https://react-bootstrap.github.io/) for layout and
components and [react-bootstrap-icons](https://github.com/ismamz/react-bootstrap-icons)
for icons. No backend required — sample data lives locally in
`src/data/issues.js`.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
operational-dashboard/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx          Top banner with title and issue count
│   │   ├── SummaryCards.jsx    Open / high-priority / resolved / follow-up counts
│   │   ├── FilterBar.jsx       Store, category, priority, status filters
│   │   ├── IssueTable.jsx      Bootstrap Table: headers + list of issue rows
│   │   ├── IssueRow.jsx        Single issue table row
│   │   ├── IssueDetails.jsx    Bootstrap Modal: full details, status change, notes
│   │   ├── StatusBadge.jsx     Colored status pill (Bootstrap Badge)
│   │   └── PriorityBadge.jsx   Colored priority pill (Bootstrap Badge)
│   │
│   ├── data/
│   │   └── issues.js           Sample issues + shared style/status constants
│   │
│   ├── App.jsx                 App state (issues, filters, selected issue)
│   ├── main.jsx                React entry point
│   └── index.css               Global styles
│
├── public/
├── package.json
├── README.md
└── vite.config.js
```

## Features

- **Dashboard view** of all logged issues with store number, category, short
  description, date reported, priority, status, and assigned manager.
- **Filtering** by store, category, priority, and status (combinable, with a
  one-click reset).
- **Issue details** — click any row to open a panel with the full
  description and metadata.
- **Status updates** — set an issue to New, In Progress, or Resolved.
- **Management notes** — add short, timestamped notes to any issue.
- **Summary cards** — total open issues, high-priority issues, resolved
  issues, and issues flagged for follow-up.
- **Responsive layout** — built on Bootstrap's grid, the summary cards
  reflow and the issue table scrolls horizontally on narrow screens, so
  the dashboard stays usable on a laptop and smaller viewports alike.

## Customizing sample data

Edit `src/data/issues.js` to add, remove, or change issues. Each issue
follows this shape:

```js
{
  id: "OPS-1042",
  store: "104",
  category: "Equipment Failure",
  description: "...",
  dateReported: "2026-08-11",
  priority: "High" | "Medium" | "Low",
  status: "New" | "In Progress" | "Resolved",
  manager: "Priya Nair",
  followUp: true,
  notes: [{ text: "...", ts: "2026-08-11 09:20" }],
}
```

## Tools and technologies used

- **React 18** — component structure and UI state
- **Vite 5** — dev server and production bundler
- **React-Bootstrap 2** — layout and UI components (Navbar, Card, Table,
  Modal, Form, Badge, ButtonGroup, ListGroup)
- **Bootstrap 5** — underlying CSS framework (grid, utility classes)
- **react-bootstrap-icons** — icon set matched to React-Bootstrap
- **Google Fonts** (Inter, JetBrains Mono) — typography, loaded via CSS
  `@import`
- Plain CSS (`src/index.css`) for the small set of brand overrides
  (navy header, colored priority/status pills, spacing) layered on top
  of Bootstrap's defaults
- No backend, database, or external API — all data is in-memory sample
  data, so state resets on page refresh

## Design decisions

- **Component split mirrors the requested structure** — `Header`,
  `SummaryCards`, `FilterBar`, `IssueTable`, `IssueRow`, `IssueDetails`,
  `StatusBadge` (plus a small `PriorityBadge` alongside it) each do one
  job, with all shared state (`issues`, `filters`, `selectedId`,
  `noteDraft`) lifted to `App.jsx` and passed down as props. This keeps
  each component easy to read in isolation and easy to swap out later.
- **Sample data and style constants live in one file** (`src/data/issues.js`)
  so a real API response could replace `initialIssues` with minimal
  changes elsewhere.
- **A left-edge color stripe on each row** encodes priority visually
  before a manager reads any text, so the highest-priority issues are
  scannable at a glance — this was the one deliberate "signature" visual
  choice, kept consistent with the color-coded priority/status pills.
- **Bootstrap's `Table responsive` pattern** was used instead of a
  custom card-stacking layout for mobile — it's the standard,
  low-maintenance way to keep a data table usable on narrower screens
  without duplicating markup.
- **Status changes and notes are edited only inside the modal**, not
  inline in the table, to keep the main dashboard view scannable and
  avoid accidental edits while browsing.
- **Navy + muted priority colors (red/amber/green)** rather than bright
  primary colors, aiming for a "professional software" feel appropriate
  for a nontechnical manager rather than a consumer app.

## Assumptions

- "Requiring follow-up" is a distinct judgment call from "high priority,"
  so each sample issue carries its own `followUp` flag rather than being
  derived purely from priority — a Medium-priority staffing issue can
  need follow-up while a Low-priority one may not.
- No authentication, multi-user editing, or persistence was requested,
  so all changes (status, notes) live only in React state and are lost
  on refresh — acceptable for a prototype/demo, not for production use.
- Store numbers are treated as strings (e.g. `"104"`), not integers,
  since they're identifiers rather than quantities.
- One issue can have zero or more notes; there's no limit on note count
  or length beyond what fits in the scrollable note list.
- The dashboard is scoped to a single manager's view — there's no
  concept of "my issues" vs. "all issues," since the brief didn't
  distinguish user roles.

## What I'd improve with more time

- Wire it to a real backend (issue CRUD, persisted notes and status
  history) instead of in-memory sample data.
- Add search-by-keyword across descriptions, and sorting on any column
  (currently the list is filterable but not sortable).
- Track *when* an issue changed status, and show an audit trail /
  timeline in the detail modal rather than just the final status.
- Add basic form validation and a toast/confirmation on status change
  and note submission, rather than relying on the modal staying open.
- Pagination or virtualization once the issue count grows beyond a
  page or two.
- Automated tests (component tests for filtering logic and the modal
  workflow) — none exist yet.
- Accessibility pass: verify full keyboard navigation through the
  table and modal, and screen-reader labeling for the status buttons.

## AI tools and templates disclosure

This project was built with **Claude** (Anthropic) in an interactive
chat session — Claude generated the component code, sample data,
styling, and this README based on the stated requirements, and iterated
based on follow-up instructions (e.g. restructuring into the requested
folder layout, then swapping the icon/UI library from lucide-react to
React-Bootstrap). No third-party dashboard template, boilerplate
generator, or scaffolding tool (e.g. `create-react-app`, admin theme,
UI kit starter) was used — the project was scaffolded manually
(`package.json`, `vite.config.js`, `index.html`) and built up file by
file. Icons come from the open-source `react-bootstrap-icons` package;
no AI-generated images or icons are used.
