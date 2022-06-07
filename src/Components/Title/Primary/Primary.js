import style from './Primary.module.css';
import PropTypes from 'prop-types';

const Primary = (props) => {
  return <h1 className={style.title}>{props.title}</h1>;
};

export default Primary;

Primary.propTypes = {
  title: PropTypes.string
};
