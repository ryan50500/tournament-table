import './LeagueTable.css'
import TableHeader from './TableHeader'
import TeamList from './TeamList'

export default function LeagueTable() {
  return (
      <div className="leagueTable">
        <TableHeader />
        <TeamList />
      </div>
  )
}
