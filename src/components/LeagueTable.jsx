import mockPremierLeagueStandings from '../data/mockPremierLeagueStandings'
import TableHeader from './TableHeader'
import TeamRow from './TeamRow'

export default function LeagueTable() {
  return (
    <div className="league-table__wrapper">
      <h1 className="league-table__title">Premier League 2025/26</h1>
      <div className="league-table">
        <TableHeader />
        {mockPremierLeagueStandings.map((team) => (
          <TeamRow key={team.club} team={team} />
        ))}
      </div>
    </div>
  )
}
