# Tournament Table

A Premier League standings table built with React and Vite. The table supports vertical and horizontal scrolling, with a sticky header row and sticky position/club columns. The spreadsheet was treated as a functional wireframe; the implementation focuses on replicating the scrolling behaviour rather than matching it visually pixel-for-pixel. Responsive/mobile behaviour is out of scope for this brief — the table is optimised for desktop viewport widths.

## Setup

Live demo: https://ryan50500.github.io/tournament-table/

Or run locally:

```bash
npm install
npm run dev
```

## Design Decisions

### Why React

I used React because I prefer building UIs in a component-based structure, which makes the layout easier to organise and extend compared to vanilla JavaScript. If this was a more dynamic, frequently updating scoreboard, React would make updates easier to manage than manual DOM updates.

### Why CSS Grid instead of `<table>`

The obvious choice for tabular data is `<table>`, and that was my initial instinct. However, with sticky header and sticky columns as requirements, this wasn’t just a simple data display. I expected sticky columns on `<table>` elements to be a bit awkward, as applying custom layout and positioning styles to tables can be tricky. CSS Grid gives more direct control over layout and positioning, which made the sticky behaviour much easier to implement. Tables also don't scale down well on smaller screens if mobile support was ever needed.

### Column sizing with `minmax`

Rather than hardcoding fixed pixel widths for each column, I used `minmax(Xpx, max-content)` to allow columns to grow naturally if the content needs more space (for example if column names were longer or if stats started showing larger numbers).


### Performance note

For a static mockup like this, rendering performance is not a concern. But if this were pulling in live data with frequent updates, I would add `contain: layout` to the table wrapper as it tells the browser that changes inside the table don't affect the rest of the page layout, which prevents unnecessary reflows on every data update. There's a commented-out example of this in `LeagueTable.css`.

## Trade-offs

### Adding rows is easy, adding columns is not

Rows are easy to extend. To add a team you just push a new object into the data array. `TeamList` loops over it and `TeamRow` just renders it. No other changes needed.

Adding a new column is more tricky. It requires changes in three places at once: a new `<div>` in `TableHeader.jsx`, a matching `<div>` in `TeamRow.jsx`, and a new field on every object in the data source.


### Accessibility trade-offs

This uses `display: contents` on rows to make CSS Grid work nicely.

It looks fine visually, but it can be unreliable for screen readers as sometimes the row roles aren't picked up properly, so the table structure isn't as reliable as a real `<table>`.

A native `<table>` would be more reliable for accessibility, but this approach was chosen for layout flexibility (sticky columns, custom grid, etc).

### Sticky column offset is hardcoded

The Club column uses `left: 96px` to position itself sticky, which is just the width of the Position column. It works, but it means the two are coupled. If you ever changed the Position column width, you'd need to remember to update the `left` offset too, otherwise the columns would overlap. Not a problem right now, but worth knowing.

## Edge Cases

### Empty data

If the teams array is empty, `TeamList` renders a "No data available." message rather than silently rendering nothing.

### Missing fields

If a team object is missing a field, `TeamRow` displays `'-'` as a fallback so the table still renders cleanly rather than showing a blank cell.
