import PropTypes from "prop-types";
import style from "./Error.module.css";
const Error = (props) => {
  return (
    <div>
      <p className={style.error}>{props.message}</p>
    </div>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};
