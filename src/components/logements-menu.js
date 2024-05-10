import React from 'react'


import './../css/logements-menu.css'; // Import the CSS file for styling
import LogementsCard from './../components/logements-card'; // Import the LogementsCard component
import logementsData from './../Json/logements.json'; // Import the logements data

const LogementsMenu = () => {
  return (
    <div className="logements-menu">
      <div className="grid-container">
        {logementsData.map((logement) => (
          <LogementsCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default LogementsMenu;