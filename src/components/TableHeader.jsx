// TableHeader — needs dual sticky (top + left) on Pos/Club cells 
export default function TableHeader() {
  return (
    <div className="leagueTable__header" role="row">
      <div className="leagueTable__cell--pos leagueTable__cell--sticky" role="columnheader">Position</div>
      <div className="leagueTable__cell--club leagueTable__cell--sticky" role="columnheader">Club</div>
      <div className="leagueTable__cell--mp" role="columnheader">Matches Played</div>
      <div className="leagueTable__cell--w" role="columnheader">Wins</div>
      <div className="leagueTable__cell--d" role="columnheader">Draws</div>
      <div className="leagueTable__cell--l" role="columnheader">Losses</div>
      <div className="leagueTable__cell--gf" role="columnheader">Goals Scored</div>
      <div className="leagueTable__cell--ga" role="columnheader">Goals Against</div>
      <div className="leagueTable__cell--gd" role="columnheader">Goal Difference</div>
      <div className="leagueTable__cell--pts" role="columnheader">Points</div>
      <div className="leagueTable__cell--last5" role="columnheader">Last 5</div>
    </div>
  )
}
