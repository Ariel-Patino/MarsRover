import PropTypes from 'prop-types';
import style from './InputNumber.module.css';

const InputNumber = (props) => {
  return (
    <div>
      <label htmlFor="inputText">Write a {props.title}:</label>
      <input
        id="input"
        className={style.inputText}
        type="number"
        name="inputText"
        value={props.value}
        onChange={props.handleChange}
        placeholder={`Insert a number between ${props.min} and ${props.max}`}
      />
    </div>
  );
};

export default InputNumber;

InputNumber.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
};
