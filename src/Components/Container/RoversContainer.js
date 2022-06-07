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
import DropDownBox from '../DropDownBox/DropDownBox';
import InputNumber from '../Input/Number/InputNumber';
import InputText from '../Input/Text/InputText';

const RoversContainer = () => {
  const roversAvailable = Rovers;
  const [roverSelected, setRoverSelected] = useState('');
  const [cameras, setCameras] = useState([]);
  const [roverEmpty, setRoverEmpty] = useState(false);
  const [maxDate, setMaxDate] = useState('');
  const [maxSol, setMaxSol] = useState(0);
  const [landingDate, setLandingDate] = useState('');
  const [solToLookFor, setSolToLookFor] = useState(0);
  const [dateToLookFor, setDateToLookFor] = useState('');

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
    setCameras(
      roversAvailable.find(
        (r) => r.name === event.target.attributes.customname.value
      ).cameras
    );
  };

  const searchClick = () => {
    setRoverEmpty(!roverEmpty);
  };

  const handleCameraChange = (event) => {
    console.log(event.target.value);
  };

  const handleSolDateChange = (event) => {
    setSolToLookFor(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateToLookFor(event.target.value);
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
      <div className={`${style.container} ${style.searchOptions}`}>
        <div>
          {cameras.length !== 0 && (
            <DropDownBox
              options={cameras}
              title={'camera'}
              handleChange={handleCameraChange}
            />
          )}
        </div>
        <div>
          {roverSelected && (
            <InputText
              title={'Earth Date'}
              handleChange={handleDateChange}
              placeholder={'Earth date YYYY-MM-dd'}
            />
          )}
        </div>
        <div>
          {roverSelected && (
            <InputNumber
              title={'Sol Date'}
              min={0}
              max={maxSol}
              handleChange={handleSolDateChange}
            />
          )}
        </div>
        <div>
          {roverSelected && <SearchButton title={''} click={searchClick} />}
        </div>
      </div>
      {roverEmpty && (
        <Error message={'Must pick a Rover to retrieve pictures'}></Error>
      )}
      {dateToLookFor == '' && roverSelected && (
        <Error
          message={`The Earth date should be between ${landingDate} and ${maxDate}`}
        ></Error>
      )}
      {(solToLookFor < 0 || solToLookFor > maxSol) && (
        <Error message={`The Sol date must be between 0 and ${maxSol}`}></Error>
      )}
    </div>
  );
};

export default RoversContainer;
