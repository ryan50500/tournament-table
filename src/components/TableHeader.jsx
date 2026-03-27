// TableHeader — needs dual sticky (top + left) on Pos/Club cells 
export default function TableHeader() {
  return (
    <div className="leagueTable__header">
      <span className="leagueTable__cell--pos leagueTable__cell--sticky">Position</span>
      <span className="leagueTable__cell--club leagueTable__cell--sticky">Club</span>
      <span className="leagueTable__cell--mp">Matches Played</span>
      <span className="leagueTable__cell--w">Wins</span>
      <span className="leagueTable__cell--d">Draws</span>
      <span className="leagueTable__cell--l">Losses</span>
      <span className="leagueTable__cell--gf">Goals Scored</span>
      <span className="leagueTable__cell--ga">Goals Against</span>
      <span className="leagueTable__cell--gd">Goal Difference</span>
      <span className="leagueTable__cell--pts">Points</span>
      <span className="leagueTable__cell--last5">Last 5</span>
    </div>
  )
}
