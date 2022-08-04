import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <div className="app__container">
        <Dashboard />
        <div className="main">
          <SortingVisualizer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
