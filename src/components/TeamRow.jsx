// TeamRow — needs sticky left cells
export default function TeamRow({ team }) {
  return (
    <div className="leagueTable__row" role="row">
      <div className="leagueTable__cell--pos leagueTable__cell--sticky" role="cell">{team.pos ?? '-'}</div>
      <div className="leagueTable__cell--club leagueTable__cell--sticky" role="cell">{team.club ?? '-'}</div>
      <div className="leagueTable__cell--mp" role="cell">{team.played ?? '-'}</div>
      <div className="leagueTable__cell--w" role="cell">{team.won ?? '-'}</div>
      <div className="leagueTable__cell--d" role="cell">{team.drawn ?? '-'}</div>
      <div className="leagueTable__cell--l" role="cell">{team.lost ?? '-'}</div>
      <div className="leagueTable__cell--gf" role="cell">{team.gf ?? '-'}</div>
      <div className="leagueTable__cell--ga" role="cell">{team.ga ?? '-'}</div>
      <div className="leagueTable__cell--gd" role="cell">{team.gd ?? '-'}</div>
      <div className="leagueTable__cell--pts" role="cell">{team.pts ?? '-'}</div>
      <div className="leagueTable__cell--last5" role="cell">{(team.last5 ?? []).join(' ')}</div>
    </div>
  )
}
