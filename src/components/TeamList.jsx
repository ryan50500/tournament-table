import mockPremierLeagueStandings from '../data/mockPremierLeagueStandings'
import TeamRow from './TeamRow'

export default function TeamList() {
  return mockPremierLeagueStandings.map((team) => (
    <TeamRow key={team.club} team={team} />
  ))
}
