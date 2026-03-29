import './LeagueTable.css'
import TableHeader from './TableHeader'
import TeamList from './TeamList'

export default function LeagueTable() {
  return (
    <div className="leagueTable__wrapper">
      <div className="leagueTable" role="table" aria-label="Premier League Standings">
        <TableHeader />
        <TeamList />
      </div>
    </div>
  )
}
