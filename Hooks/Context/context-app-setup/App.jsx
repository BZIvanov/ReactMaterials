import Header from './components/Header';
import First from './components/First';
import Second from './components/Second';
import { CounterProvider } from './contexts/CounterContext';

function App() {
  return (
    <div>
      <Header />

      <CounterProvider>
        <First />
        <Second />
      </CounterProvider>
    </div>
  );
}

export default App;
