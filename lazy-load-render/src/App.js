import Card from './components/card/Card';
import records from './data/records';

const App = () => {
  const data = records[0];
  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
};

export default App;
