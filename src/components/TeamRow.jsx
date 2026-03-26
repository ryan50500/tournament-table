// TeamRow — needs sticky left cells
export default function TeamRow({ team }) {
  return (
    <div className="league-table__row">
      <span className="league-table__cell--pos league-table__cell--sticky">{team.pos}</span>
      <span className="league-table__cell--club league-table__cell--sticky">{team.club}</span>
      {/* TODO: stat cells and last5 badges */}
    </div>
  )
}
