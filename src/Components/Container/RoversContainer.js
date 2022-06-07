import { Rovers } from '../../Constants/Constans';
import RoverCard from '../RoverCard/RoverCard';
import style from './RoversContainer.module.css';
import { useState, useEffect, useLayoutEffect } from 'react';
import Secondary from '../Title/Secondary/Secondary';
import SearchButton from '../Button/Search/Search';
import curiosityInfoService from '../../Api/Rovers/Curiosity/CuriosityService';
import spiritInfoService from '../../Api/Rovers/Spirit/SpiritService';
import opportunityInfoService from '../../Api/Rovers/Opportunity/OpportunityService';
import Error from '../Message/Error/Error';

const RoversContainer = () => {
  const roversAvailable = Rovers;
  const [roverSelected, setRoverSelected] = useState('');
  const [roverEmpty, setRoverEmpty] = useState(false);
  const [maxDate, setMaxDate] = useState('');
  const [maxSol, setMaxSol] = useState(0);
  const [landingDate, setLandingDate] = useState('');

  let dateToLookFor = '';
  let solToLookFor = 0;

  useLayoutEffect(() => {
    (async () => {
      switch (roverSelected.toLowerCase()) {
        case 'opportunity':
          await opportunityInfoService.getRoverInfo().then((response) => {
            setLandingDate(response.rover.landing_date);
            setMaxDate(response.rover.max_date);
            setMaxSol(response.rover.max_sol);
          });
          break;
        case 'spirit':
          await spiritInfoService.getRoverInfo().then((response) => {
            setLandingDate(response.rover.landing_date);
            setMaxDate(response.rover.max_date);
            setMaxSol(response.rover.max_sol);
          });
          break;
        case 'curiosity':
          await curiosityInfoService.getRoverInfo().then((response) => {
            setLandingDate(response.rover.landing_date);
            setMaxDate(response.rover.max_date);
            setMaxSol(response.rover.max_sol);
          });
          break;
      }
    })();
  }, [roverSelected]);

  useEffect(() => {
    (async () => {
      opportunityInfoService.getRoverInfo().then(() => {});
    })();
  }, [roverEmpty]);

  const clickSelecRover = (event) => {
    setRoverSelected(event.target.attributes.customname.value);
  };

  const searchClick = () => {
    setRoverEmpty(!roverEmpty);
  };

  return (
    <div>
      <Secondary title="Pick a rover!" />
      <div className={style.container}>
        {roversAvailable.map((rover) => {
          return (
            <RoverCard
              key={rover.id}
              roverName={rover.name}
              roverPicturePath={rover.picturePath}
              selectRover={clickSelecRover}
              roverSelected={roverSelected}
            />
          );
        })}
      </div>
      <div className={style.container}>
        {maxDate} {landingDate}
        <div></div>
        <div>
          <SearchButton title={'Rover Pictures'} click={searchClick} />
        </div>
        <div>
          <SearchButton title={'Rover Pictures'} click={searchClick} />
        </div>
        <div>
          {roverSelected && (
            <SearchButton title={'Rover Pictures'} click={searchClick} />
          )}
        </div>
      </div>
      {roverEmpty && (
        <Error message={'Must pick a Rover to retrieve pictures'}></Error>
      )}
      {dateToLookFor == '' && (
        <Error
          message={`The Rage Sol date for ${roverSelected} must be between 0 and ${maxSol}`}
        ></Error>
      )}
      {(solToLookFor < 0 || solToLookFor > maxSol) && (
        <Error
          message={`The Rage Sol date for ${roverSelected} must be between 0 and ${maxSol}`}
        ></Error>
      )}
    </div>
  );
};

export default RoversContainer;
