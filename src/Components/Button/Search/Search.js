import style from "./Search.module.css";
import PropTypes from "prop-types";

const SearchButton = (props) => {
  return (
    <div>
      <button className={style.button} onClick={props.click}>
        Search {props.title}
      </button>
    </div>
  );
};

export default SearchButton;

SearchButton.propTypes = {
  title: PropTypes.string,
  click: PropTypes.func,
};
