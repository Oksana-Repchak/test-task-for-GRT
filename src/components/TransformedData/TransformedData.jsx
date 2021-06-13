// import PropTypes from 'prop-types';

function TransformedData({ data }) {
  return (
    <ol>
      {data.map(({ price, productUrl, id, rank }) => (
        <li key={id}>
          price:{price}; productUrl:{productUrl};rank:{rank};
        </li>
      ))}
    </ol>
  );
}

// TransformedData.propTypes = {
//   price: PropTypes.number.isRequired,
//   productUrl: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   rank: PropTypes.number.isRequired,
// };

export default TransformedData;
