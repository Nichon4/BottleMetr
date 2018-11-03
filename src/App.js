import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import MainMenu from './components/MainMenu.js';
import About from './components/About.js';
import SearchField from './components/SearchField.js';
import Search from './components/Search/';
import BottleMetr from './components/BottleMetr.js';
import BottleList from './components/BottleList.js';
import { Header, AppHeader } from "./layout/Header";

const App = ({location}) => (
      <Route>
      <div className="App">
        <AppHeader>
          <Link to="/" className="App-link">
            <Header text={"BottleMeter"} />
          </Link>
          { ((location.pathname !== "/") && (location.pathname !== "/BottleList")) ? null :  <SearchField/> }
        </AppHeader>
        <Route exact path="/" component={MainMenu} />
        <Route path="/about" component={About} />
        <Route path="/Search" component={Search} />
        <Route path="/BottleList" component={BottleList} />
        <Route path="/BottleMetr/:bottle" render={(props) => <BottleMetr {...props} /> } />
        <Route exact path="/BottleMetr/" render={(props) => <BottleMetr {...props} /> } />
      </div>
      </Route>
    );

export default App;
