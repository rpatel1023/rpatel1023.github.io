import logo from './logo.svg';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">     
      <Navigation/>
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/projects" component={ProjectsPage}></Route>
          {/* <Route exact path="/blog" component={BlogPage}></Route> */}
          {/* <Route exact path="/contact" component={ContactPage}></Route> */}

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
