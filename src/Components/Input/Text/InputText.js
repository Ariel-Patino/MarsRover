import PropTypes from 'prop-types';
import style from './InputText.module.css';

const InputText = (props) => {
  return (
    <div>
      <label htmlFor="inputText">Write a {props.title}:</label>
      <input
        id="input"
        className={style.inputText}
        type="text"
        name="inputText"
        onChange={props.handleChange}
        value={props.value}
        placeholder={`Insert ${props.placeholder}`}
      />
    </div>
  );
};

export default InputText;

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};
