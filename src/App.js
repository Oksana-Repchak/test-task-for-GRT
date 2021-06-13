import TransformedData from './components/TransformedData';
import { mainData } from './data/data';

console.log('mainData', mainData);
console.log('mainData[0]', mainData[0]);
console.log('mainData[0].group[0]', mainData[0].group[0]);
// console.log('(mainData[0].group[1]', mainData[1].group[1]);

function App() {
  return <TransformedData data={mainData} />;
}

export default App;
