import PropTypes from 'prop-types';
import { mainData } from '../../data/data.js';
import shortid from 'shortid';
import s from './RenderData.module.css';

function formatData(mainData) {
  return mainData.reduce((acc, item) => {
    item?.group.forEach(el => {
      const id = shortid.generate();

      acc.push({
        price: el?.price?.length
          ? el?.price[0]?.text ?? 'there is no price'
          : '[]',
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
        <li key={id} className={s.item}>
          <span className={s.itemId}>ID</span> {id}
          <br />
          productUrl: {productUrl};<br /> price:
          {Number.parseFloat(price)
            ? Number.parseFloat(price)
            : 'there is no price'}
          ;
          <br /> rank: {rank};
        </li>
      ))}
    </ol>
  );
}
RenderData.propTypes = {
  price: PropTypes.number,
  productUrl: PropTypes.string,
  id: PropTypes.string,
  rank: PropTypes.number,
};

export default RenderData;
