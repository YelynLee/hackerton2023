import React from 'react';
import './MissonPage.css';
import Logo from './Logo';
import BackButton from './BackButton';
import Participants from './Participants';
import MissionStatus from './MissionStatus';
import MissionCard from './MissionCard';

function MissionPage() {

  const missions = [
    { date: '2023-08-10', name: 'Mission A', status: 'success' },
    { date: '2023-08-11', name: 'Mission B', status: 'failure' },
  ];
  return (
    <div className="mission-page">
      <Logo />
      <BackButton />
      <Participants />
      <MissionStatus />
      <div className="mission-cards">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            date={mission.date}
            name={mission.name}
            status={mission.status}
          />
        ))}
      </div>
    </div>
  );
}

export default MissionPage;
