import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from 'components/GlobalStyle';
import { Homepage } from 'layout/Homepage';
import { Results } from 'layout/Results';
import { Favorites } from 'layout/Favorites';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/favorites" component={Favorites} />
          <Route component={Homepage} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
