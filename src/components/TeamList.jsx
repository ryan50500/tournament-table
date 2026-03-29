import TeamRow from './TeamRow'

export default function TeamList({ teams }) {
  if (!teams.length) return <p>No data available.</p>

  return teams.map((team) => (
    <TeamRow key={team.club} team={team} />
  ))
}
