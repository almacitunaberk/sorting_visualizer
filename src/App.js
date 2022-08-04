import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
const App = () => {
  return (
    <div className="app__container">
      <Dashboard />
      <div className="main">
        <SortingVisualizer />
      </div>
    </div>
  );
};

export default App;
