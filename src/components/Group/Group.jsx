export default function Group({ group }) {
  return (
    <li>
      <ul>{group.map(({ price, productUrl, rank }) => (
        <li key={id}>
          productUrl: {productUrl}; price: {price}; rank:{rank}
        </li></ul>
    </li>
  );
}
