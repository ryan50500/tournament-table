// TeamRow — needs sticky left cells
export default function TeamRow({ team }) {
  return (
    <div className="leagueTable__row">
      <span className="leagueTable__cell--pos leagueTable__cell--sticky">{team.pos}</span>
      <span className="leagueTable__cell--club leagueTable__cell--sticky">{team.club}</span>
      <span className="leagueTable__cell--mp">{team.played}</span>
      <span className="leagueTable__cell--w">{team.won}</span>
      <span className="leagueTable__cell--d">{team.drawn}</span>
      <span className="leagueTable__cell--l">{team.lost}</span>
      <span className="leagueTable__cell--gf">{team.gf}</span>
      <span className="leagueTable__cell--ga">{team.ga}</span>
      <span className="leagueTable__cell--gd">{team.gd}</span>
      <span className="leagueTable__cell--pts">{team.pts}</span>
      <span className="leagueTable__cell--last5">{team.last5.join(' ')}</span>
    </div>
  )
}
