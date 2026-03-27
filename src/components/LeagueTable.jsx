import TableHeader from './TableHeader'
import TeamList from './TeamList'

export default function LeagueTable() {
  return (
    <div className="leagueTable__wrapper">
      <h1 className="leagueTable__title">Premier League 2025/26</h1>
      <div className="leagueTable">
        <TableHeader />
        <TeamList />
      </div>
    </div>
  )
}
