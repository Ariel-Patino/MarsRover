import Secondary from '../Title/Secondary/Secondary';
import style from './Gallery.module.css';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  if (props.loading) {
    return <Secondary title={'Loading'} />;
  }
  return (
    <div className={style.gallery}>
      <div className={style.row}>
        {props.pictures.map((picture) => (
          <div key={picture.id} className={style.column}>
            <img
              src={picture.img_src}
              alt={picture.img_src}
              className={style.photo}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  pictures: PropTypes.array,
  loading: PropTypes.bool
};
