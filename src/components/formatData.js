import shortid from 'shortid';
const id = shortid.generate();

export default function formatData(mainData) {
  let result = mainData.reduce((acc, item) => {
    item?.group.forEach(el => {
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
