import Navbar from './components/Navbar';
import Home from './Home';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'

const App = () => {

  const [alert, setAlert] = useState('0');
  const [numberAlert, setnumberAlert] = useState(-1);

  const handleAlert = (status = -1) => {
    const alertStatus = status
    setAlert(alertStatus)
    setnumberAlert(numberAlert + 1)
  }

  return (
    <Router>
      <div className="App">
        <Alert name={alert} numberAlert={numberAlert} />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home handleAlert={handleAlert} />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
