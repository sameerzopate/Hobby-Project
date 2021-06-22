import './App.css';
import Todos from "./components/Todos";
import DisplayTodos from "./components/DisplayTodos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
    <div className="App">
       
      <Topbar/>
      
      <Switch>
        
        <Route path='/DisplayTodos'>
          <DisplayTodos/>
        </Route>
        <Route path='/Todos'>
          <Todos/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
