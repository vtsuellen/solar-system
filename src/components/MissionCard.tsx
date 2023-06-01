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
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    </div>
  );
}

export default MissionsCard;
