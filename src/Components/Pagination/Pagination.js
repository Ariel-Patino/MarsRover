//import { useState } from 'react';
import style from './Pagination.module.css';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  //const [current, setCurrent] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.total / props.perPage); i++) {
    pageNumbers.push(i);
  }

  const maxGroupPerRow = Math.ceil(pageNumbers.length / 10);
  let currentGroup = Math.ceil(props.current / 10);

  let indexOfLastPost = currentGroup * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  if (indexOfLastPost > pageNumbers.length) {
    indexOfLastPost = pageNumbers.length;
  }
  const currentPhotos = pageNumbers.slice(indexOfFirstPost, indexOfLastPost);

  const updatePreviousPages = () => {
    if (currentGroup <= 1) {
      currentGroup = 1;
      props.paginate(1);
    } else {
      --currentGroup;
      props.paginate(currentGroup * 10);
    }
  };

  const updatePostPages = () => {
    if (currentGroup >= maxGroupPerRow) {
      currentGroup = maxGroupPerRow;
      props.paginate(pageNumbers[pageNumbers.length - 1]);
    } else {
      ++currentGroup;
      props.paginate(currentGroup * 10 - 9);
    }
  };

  return (
    <ul className={style.pagination}>
      <li>
        <a
          className={`${props.total ? '' : style.hidden} ${style.pagesGroup}`}
          onClick={updatePreviousPages}
        >
          {'<<'}
        </a>
      </li>
      {currentPhotos.map((number) => (
        <li key={number}>
          <a
            className={`${props.current === number ? style.active : ''}`}
            onClick={() => {
              props.paginate(number);
            }}
          >
            {number}
          </a>
        </li>
      ))}
      <li>
        <a
          className={`${props.total ? '' : style.hidden} ${style.pagesGroup}`}
          onClick={updatePostPages}
        >
          {'>>'}
        </a>
      </li>
    </ul>
  );
};

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  paginate: PropTypes.func,
  current: PropTypes.number
};
