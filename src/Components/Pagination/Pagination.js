import PropTypes from 'prop-types';

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.total / props.perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <div key={number} onClick={() => props.paginate(number)}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  paginate: PropTypes.func
};
