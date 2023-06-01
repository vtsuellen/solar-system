import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <ul>
        {missions.map((mission) => (
          <li key={ mission.name }>
            <MissionsCard
              name={ mission.name }
              country={ mission.country }
              year={ mission.year }
              destination={ mission.destination }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Missions;
