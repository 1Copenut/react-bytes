import { Suspense, lazy } from 'react';
import records from './data/records';

const App = () => {
  const Card = lazy(() => import('./components/card/Card'));
  const recordsList = records.map((record) => <Card data={record} />);

  return (
    <div className="App">
      <main>
        <h1>Island Albums</h1>
        <p>
          If you had ten albums&mdash;and ten albums only&mdash;to take with you
          to an island, which ones would they be?
        </p>
        <Suspense fallback={<p>Loading your island albums...</p>}>
          <ol>{recordsList}</ol>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
