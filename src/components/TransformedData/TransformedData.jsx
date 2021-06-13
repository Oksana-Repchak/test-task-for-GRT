import PropTypes from 'prop-types';
import shortid from 'shortid';

function TransformedData({ data }) {
  const id = shortid.generate();

  return (
    <ol>
      {data.map(({ group }) => (
        <li key={id}>
          <ol>
            {group.map(({ productUrl, price, rank }) => (
              <li key={id}>
                productUrl: {productUrl[0].text};
                <br /> price:{JSON.stringify(price)};
                <br /> rank: {rank[0].text};
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
TransformedData.propTypes = {
  price: PropTypes.number.isRequired,
  productUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default TransformedData;
