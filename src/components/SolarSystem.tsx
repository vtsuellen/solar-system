import React from 'react';
import Title from './Title';
import './css/Solar.css';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />

      <ul>
        {planets.map((planet) => (
          <li key={ planet.name }>
            <PlanetCard planetImage={ planet.image } planetName={ planet.name } />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SolarSystem;
