import Header from './components/Header';
import './App.css';
import { Summary } from './components/Summary';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Summary />
    </>
  );
}

export default App;
