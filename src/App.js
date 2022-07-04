import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import MovieDetail from './components/MovieDetail.jsx'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path= '/'><Home /></Route>
          <Route path='/:id'><MovieDetail /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

