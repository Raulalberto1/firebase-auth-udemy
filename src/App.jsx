import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Inicio } from './components/Inicio';
import { Admin } from './components/Admin';
import { Login } from './components/Login';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
