// TableHeader — needs dual sticky (top + left) on Pos/Club cells 
export default function TableHeader() {
  return (
    <div className="league-table__header">
      <span className="league-table__cell--pos league-table__cell--sticky">Pos</span>
      <span className="league-table__cell--club league-table__cell--sticky">Club</span>
      {/* TODO: MP, W, D, L, GF, etc */}
    </div>
  )
}
