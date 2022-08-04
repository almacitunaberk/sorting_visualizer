import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToggleFalse, setToggleTrue } from './redux/slices/toggleDashboard';

const App = () => {
  const dispatch = useDispatch();

  const dashboardBehavior = () => {
    if (window.innerWidth < 820) {
      dispatch(setToggleTrue());
    } else if (window.innerWidth < 1200) {
      dispatch(setToggleTrue());
    }
  };

  useEffect(() => {
    dashboardBehavior();
  });

  window.addEventListener('resize', dashboardBehavior);

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
