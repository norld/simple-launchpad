import 'styles/App.css';
import Navs from 'components/navbar/Navs';
import AppRoutes from './Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config();

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navs />
          <AppRoutes props={props} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
