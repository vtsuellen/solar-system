import locationDot from '../images/location-dot-solid.svg';
import calendarDay from '../images/calendar-day-solid.svg';
import flag from '../images/font-awesome-solid.svg';

type Props = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionsCard({ name, year, country, destination }: Props) {
  return (
    <div data-testid="mission-card">
      <strong data-testid="mission-name">{name}</strong>

      <div className="data">
        <p data-testid="mission-year">
          <img
            className="calendario"
            alt="calendario day"
            src={ calendarDay }
            style={ { width: '15px', marginRight: '10px' } }
          />
          {year}
        </p>
        <p data-testid="mission-country">
          <img
            className="location"
            alt="location dot"
            src={ locationDot }
            style={ { width: '15px', marginRight: '10px' } }
          />
          {country}
        </p>
        <p data-testid="mission-destination">
          <img
            className="flag"
            alt="Flag"
            src={ flag }
            style={ { width: '15px', marginRight: '10px' } }
          />
          {destination}
        </p>
      </div>
    </div>
  );
}

export default MissionsCard;
