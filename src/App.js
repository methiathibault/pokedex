import logo from './styles/logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import RoutesComponent from './components/RoutesComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <RoutesComponent />
      </header>
    </div>
  );
}

export default App;
