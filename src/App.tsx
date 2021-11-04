import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Homepage } from 'layout/Homepage';
import { Results } from 'layout/Results';
import { Favorites } from 'layout/Favorites';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
