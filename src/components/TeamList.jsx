import TeamRow from './TeamRow'

export default function TeamList({ teams }) {
  return teams.map((team) => (
    <TeamRow key={team.club} team={team} />
  ))
}
