import 'styles/app.css';
import Navs from 'components/navbar/Navs';
import AppRoutes from './Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { useWeb3 } from './common/hooks/useWeb3';
require('dotenv').config();

function App(props) {
  const web3Func = useWeb3();
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navs web3Func={web3Func} />
          <AppRoutes web3Func={web3Func} props={props} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
