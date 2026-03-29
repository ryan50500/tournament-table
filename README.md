# Tournament Table

A Premier League standings table built with React and Vite. The table supports vertical and horizontal scrolling, with a sticky header row and sticky position/club columns. The spreadsheet was treated as a functional wireframe; the implementation focuses on replicating the scrolling behaviour rather than matching it visually pixel-for-pixel.

## Setup

```bash
npm install
npm run dev
```

## Design Decisions

### Why CSS Grid instead of `<table>`

The obvious choice for tabular data is <table>, and that was my initial instinct. However, I avoided it because position: sticky can be unreliable with table elements, and styling tables precisely can be difficult. Since the brief required both a sticky header row and sticky columns for “position” and “club”, I chose to use `<div>` elements with CSS Grid, which provides more control over this kind of layout.

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
