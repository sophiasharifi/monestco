
import logo from './assets/DP.png';
import NavigationBar from './components/NavigationBar';
import Comparison from './pages/Comparison';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Methodology from './pages/Methodology';
import Methodology from './pages/Methodology-new';
//import BrandBreakdown from './pages/BrandBreakdown';
import BrandBreakdown from './pages/BrandBreakdown-new';
import BrandDirectory from './pages/BrandDirectory';
import Company from './components/Companies/Company';
import HomePage from './components/Home/HomePage';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('G-P4PGY86R0X');
  ReactGA.pageview('/');
  ReactGA.pageview('/companies/:companyName');
  ReactGA.pageview('/comparison');
  ReactGA.pageview('/brand-breakdown/:companyName');
  ReactGA.pageview('/brand-directory');
}

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path = '/' exact component = {HomePage}/>
      </Switch>
      <Switch>
        <Route path = '/companies/:companyName' exact component = {Company}/>
      </Switch>
      <Route path="/comparison" exact component = {Comparison} />
      <Route path="/methodology" exact component ={Methodology}/>
      <Route path="/brand-breakdown/:companyName" exact component={BrandBreakdown}/>
      <Route path="/brand-directory" exact render={()=><BrandDirectory/>}/>
    </Router>
  );
}

export default App;
