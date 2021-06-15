import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/authentication/Login';
import MenuDetails from './pages/menuDetails/MenuDetails';
import CheckOut from './pages/checkOut/CheckOut';




function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/menu/:id'>
            <MenuDetails />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <CheckOut />
          </Route>
          <Route path='*'>
            <h4>Page Not Found please try again later</h4>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
