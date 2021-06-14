import PropTypes from 'prop-types';
import { mainData } from '../../data/data.js';
import shortid from 'shortid';

function formatData(mainData) {
  return mainData.reduce((acc, item) => {
    item?.group.forEach(el => {
      const id = shortid.generate();

      acc.push({
        price: el?.price?.length
          ? el?.price[0]?.text ?? 'нет цены'
          : 'нет прайса',
        productUrl: el?.productUrl[0]?.text ?? '',
        rank: el?.rank[0]?.text ?? '',
        id: id,
      });
    });
    return acc;
  }, []);
}

function RenderData() {
  return (
    <ol>
      {formatData(mainData).map(({ price, productUrl, rank, id }) => (
        <li key={id}>
          ID {id}
          <br />
          productUrl: {productUrl};<br /> price:{price};
          <br /> rank: {rank};
        </li>
      ))}
    </ol>
  );
}
RenderData.propTypes = {
  price: PropTypes.number.isRequired,
  productUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default RenderData;
