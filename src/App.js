import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import "bootstrap/dist/css/bootsrap.min.css"


function App() {
  return (
    <Router>
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/contactme">
          <ContactMe />
        </Route>
      </Switch>
      <footer className="App-footer">
      <Footer />
      </footer>
    </Router>

  );
}

export default App;
