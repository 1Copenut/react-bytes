import Button from './components/Button/Button';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">Hello worldly creatures!</div>
      <Button buttonText="Break the world" />
    </ErrorBoundary>
  );
}

export default App;
