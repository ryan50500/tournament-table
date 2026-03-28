# Tournament Table

A football league table built with React + Vite, based on a brief requiring sticky header, sticky columns, and dual-axis scrolling.

## Setup

```bash
npm install
npm run dev
```

## Design Decisions

### Why CSS Grid instead of `<table>`

The obvious choice for tabular data would be using `<table>`, and that was my first instinct. The problem is I anticipated that using `position: sticky` on tables could be unreliable because in my experience, styling HTML tables exactly as you want can be difficult. Since the brief specifically required both a sticky header row and sticky columns, I decided to use divs and CSS Grid which gives much more control over sticky positioning.

### Column sizing with `minmax`

Rather than hardcoding fixed pixel widths for each column, I used `minmax(Xpx, max-content)` to allow columns to grow naturally if the content needs more space (for example if column names were longer or if stats started showing larger numbers).

### Last 5 results display

The wireframe showed the Last 5 results stacked vertically per row. I chose to display them horizontally (e.g. `W W D L W`) instead, which is more consistent with how real league tables look and makes the table data much easier to read. The brief described the spreadsheet as a functional wireframe for scrolling behaviour rather than a strict spec, so I felt this was appropriate.

### Performance note

For a static mockup like this, rendering performance is not a concern. But if this were pulling in live data with frequent updates, I would add `contain: layout` to the table wrapper — it tells the browser that changes inside the table don't affect the rest of the page layout, which prevents unnecessary reflows on every data update. There's a commented-out example of this in `LeagueTable.css`.
