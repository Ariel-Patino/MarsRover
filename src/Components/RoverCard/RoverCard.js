import style from './RoverCard.module.css';
import PropTypes from 'prop-types';

const RoverCard = (prop) => {
  return (
    <div
      className={`${style.card} 
          ${prop.roverSelected === prop.roverName && style.selected}`}
    >
      <img
        className={style.roverImage}
        onClick={prop.selectRover}
        src={prop.roverPicturePath}
        customname={prop.roverName}
      />
      <div
        className={style.roverName}
        onClick={prop.selectRover}
        customname={prop.roverName}
      >
        {prop.roverName}
      </div>
    </div>
  );
};

export default RoverCard;

RoverCard.prototype = {
  roverPicturePath: PropTypes.string,
  roverName: PropTypes.string
};
