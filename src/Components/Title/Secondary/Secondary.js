import style from "./Secondary.module.css";
import PropTypes from "prop-types";

const Secondary = (props) => {
  return <h2 className={style.title}>{props.title}</h2>;
};

export default Secondary;

Secondary.propTypes = {
  title: PropTypes.string,
};
