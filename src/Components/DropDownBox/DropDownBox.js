import PropTypes from 'prop-types';
import style from './DropDownBox.module.css';

const DropDownBox = (props) => {
  return (
    <div>
      <label htmlFor="option">Choose a {props.title}:</label>
      <select
        className={style.dropDownBox}
        name="option"
        id="options"
        onChange={props.handleChange}
      >
        <option value="any">Any</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownBox;

DropDownBox.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func
};
