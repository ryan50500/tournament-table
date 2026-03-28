// TeamRow — needs sticky left cells
export default function TeamRow({ team }) {
  return (
    <div className="leagueTable__row">
      <div className="leagueTable__cell--pos leagueTable__cell--sticky">{team.pos}</div>
      <div className="leagueTable__cell--club leagueTable__cell--sticky">{team.club}</div>
      <div className="leagueTable__cell--mp">{team.played}</div>
      <div className="leagueTable__cell--w">{team.won}</div>
      <div className="leagueTable__cell--d">{team.drawn}</div>
      <div className="leagueTable__cell--l">{team.lost}</div>
      <div className="leagueTable__cell--gf">{team.gf}</div>
      <div className="leagueTable__cell--ga">{team.ga}</div>
      <div className="leagueTable__cell--gd">{team.gd}</div>
      <div className="leagueTable__cell--pts">{team.pts}</div>
      <div className="leagueTable__cell--last5">{team.last5.join(' ')}</div>
    </div>
  )
}
