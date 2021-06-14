import PropTypes from 'prop-types';
import shortid from 'shortid';
// import { mainData } from '../../data/data';

// const fs = require('fs').promises;

// const dataJSON = JSON.stringify(mainData);

function TransformedData({ data }) {
  //   fs.writeFile('rezult.js', dataJSON);

  const id = shortid.generate();
  const idGroup = shortid.generate();
  return (
    <ol>
      {data.map(({ group }) => (
        <li key={id}>
          <ol>
            {group.map(({ productUrl, price, rank }) => (
              <li key={idGroup}>
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
