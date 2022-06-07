import PropTypes from 'prop-types';
const Gallery = (props) => {
  if (props.loading) {
    return <h2>Loading</h2>;
  }
  return (
    <ul>
      {props.pictures.map((picture) => (
        <li key={picture.id}>{picture.img_src}</li>
      ))}
    </ul>
  );
};

export default Gallery;

Gallery.propTypes = {
  pictures: PropTypes.array,
  loading: PropTypes.bool
};
