import { useState, useEffect, useLayoutEffect } from 'react';
import { Rovers } from '../../Constants/Constans';
import RoverCard from '../RoverCard/RoverCard';
import Secondary from '../Title/Secondary/Secondary';
import SearchButton from '../Button/Search/Search';
import Error from '../Message/Error/Error';
import DropDownBox from '../DropDownBox/DropDownBox';
import InputNumber from '../Input/Number/InputNumber';
import InputText from '../Input/Text/InputText';
import style from './RoversContainer.module.css';
import roverService from '../../Api/Rovers/Services/RoversService';
import Gallery from '../Gallery/Gallery';
import Pagination from '../Pagination/Pagination';

const RoversContainer = () => {
  const roversAvailable = Rovers;
  const [roverSelected, setRoverSelected] = useState('');
  const [cameras, setCameras] = useState([]);
  const [roverPicturesByEarthDay, setRoverPicturesByEarthDay] = useState(false);
  const [roverPicturesBySolDay, setRoverPicturesBySolDay] = useState(false);
  const [maxDate, setMaxDate] = useState('');
  const [maxSol, setMaxSol] = useState(0);
  const [landingDate, setLandingDate] = useState('');
  const [solToLookFor, setSolToLookFor] = useState(0);
  const [dateToLookFor, setDateToLookFor] = useState('');
  const [cameraToLookFor, setCameraToLookFor] = useState('any');

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosByPage] = useState(25);

  useLayoutEffect(() => {
    (async () => {
      if (roverSelected)
        await roverService.getRoverInfo(roverSelected).then((response) => {
          if (response.rover) {
            setLandingDate(response.rover.landing_date);
            setMaxDate(response.rover.max_date);
            setMaxSol(response.rover.max_sol);
            setSolToLookFor(response.rover.max_sol);
            setDateToLookFor(response.rover.max_date);
            setPhotos([]);
          }
        });
    })();
  }, [roverSelected]);

  useEffect(() => {
    (async () => {
      if (roverPicturesByEarthDay) {
        setLoading(true);
        const response = await roverService.getRoverPicturesByEarthDate(
          roverSelected,
          cameraToLookFor,
          dateToLookFor
        );
        setPhotos(response.photos);
        setLoading(false);
      } else if (roverPicturesBySolDay) {
        setLoading(true);
        var response = await roverService.getRoverPicturesBySolDate(
          roverSelected,
          cameraToLookFor,
          solToLookFor
        );
        setPhotos(response.photos);
        setLoading(false);
      }
    })();
  }, [
    roverPicturesByEarthDay,
    roverPicturesBySolDay,
    cameraToLookFor,
    dateToLookFor,
    cameraToLookFor
  ]);

  const clickSelecRover = (event) => {
    resetSearchingParams();
    setDateToLookFor('');
    setSolToLookFor(0);
    setRoverSelected(event.target.attributes.customname.value);
    setCameras(
      roversAvailable.find(
        (r) => r.name === event.target.attributes.customname.value
      ).cameras
    );
  };

  const handleClickSearchByEarthDate = () => {
    setRoverPicturesByEarthDay(true);
    setRoverPicturesBySolDay(false);
  };
  const handleClickSearchBySol = () => {
    setRoverPicturesByEarthDay(false);
    setRoverPicturesBySolDay(true);
  };

  const handleCameraChange = (event) => {
    resetSearchingParams();
    setCameraToLookFor(event.target.value);
  };

  const handleSolDateChange = (event) => {
    resetSearchingParams();
    setSolToLookFor(event.target.value);
  };

  const handleDateChange = (event) => {
    resetSearchingParams();
    setDateToLookFor(event.target.value);
  };

  const resetSearchingParams = () => {
    setRoverPicturesByEarthDay(false);
    setRoverPicturesBySolDay(false);
  };
  const handlePhotosPagination = (number) => {
    setCurrentPage(number);
  };

  const indexOfLastPost = currentPage * photosByPage;
  const indexOfFirstPost = indexOfLastPost - photosByPage;
  const currentPhotos = photos
    .reverse()
    .slice(indexOfFirstPost, indexOfLastPost);

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
            <div className={style.searchInput}>
              <InputText
                title={'Earth Date'}
                handleChange={handleDateChange}
                placeholder={'Earth date YYYY-MM-dd'}
                value={dateToLookFor}
              />
              <div className={style.searchButton}>
                <SearchButton title={''} click={handleClickSearchByEarthDate} />
              </div>
            </div>
          )}
        </div>
        <div>
          {roverSelected && (
            <div className={style.searchInput}>
              <InputNumber
                title={'Sol Date'}
                min={0}
                max={maxSol}
                value={parseInt(solToLookFor)}
                handleChange={handleSolDateChange}
              />
              <div className={style.searchButton}>
                <SearchButton title={''} click={handleClickSearchBySol} />
              </div>
            </div>
          )}
        </div>
      </div>
      {dateToLookFor == '' && roverSelected && (
        <Error
          message={`The Earth date should be between ${landingDate} and ${maxDate}`}
        ></Error>
      )}
      {(solToLookFor < 0 || solToLookFor > maxSol) && (
        <Error message={`The Sol date must be between 0 and ${maxSol}`}></Error>
      )}
      {!photos.length &&
        roverSelected &&
        !loading &&
        (roverPicturesByEarthDay || roverPicturesBySolDay) && (
          <Error message={`No photos returned`}></Error>
        )}
      <div className={style.gallery}>
        <div className={style.pagination}>
          {!loading && (
            <Pagination
              perPage={25}
              total={photos.length}
              paginate={handlePhotosPagination}
              current={currentPage}
            />
          )}
        </div>
        <Gallery pictures={currentPhotos} loading={loading} />
      </div>
    </div>
  );
};

export default RoversContainer;
