// TableHeader — needs dual sticky (top + left) on Pos/Club cells 
export default function TableHeader() {
  return (
    <div className="leagueTable__header">
      <div className="leagueTable__cell--pos leagueTable__cell--sticky">Position</div>
      <div className="leagueTable__cell--club leagueTable__cell--sticky">Club</div>
      <div className="leagueTable__cell--mp">Matches Played</div>
      <div className="leagueTable__cell--w">Wins</div>
      <div className="leagueTable__cell--d">Draws</div>
      <div className="leagueTable__cell--l">Losses</div>
      <div className="leagueTable__cell--gf">Goals Scored</div>
      <div className="leagueTable__cell--ga">Goals Against</div>
      <div className="leagueTable__cell--gd">Goal Difference</div>
      <div className="leagueTable__cell--pts">Points</div>
      <div className="leagueTable__cell--last5">Last 5</div>
    </div>
  )
}
