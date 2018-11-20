import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { Route } from 'react-router-dom';
import MainMenu from './components/MainMenu.js';
import About from './components/About.js';
import SearchField from './components/SearchField.js';
import Search from './components/Search/';
import BottleMetr from './components/BottleMetr.js';
import BottleList from './components/BottleList.js';
import { SandwichMenuButton, SandwichMenu } from './components/SandwichMenu/SandwichMenu.js';
import sandwichSwitchR from './components/SandwichMenu/reducers';
import { Header, AppHeader } from "./layout/Header";

const store = createStore(sandwichSwitchR);

const App = ({location}) => (
  <Provider store={store}>
  <Route>
    <div className="App">
      <AppHeader>
        { (location.pathname !== "/" ) ? <SandwichMenuButton /> : null }

          <Header text={"BottleMetr"} className="App-link" />

        { ((location.pathname !== "/") && (location.pathname !== "/BottleList")) ? null :  <SearchField/> }
      </AppHeader>
      <Route exact path="/" component={MainMenu} />
      <Route path="/about" component={About} />
      <Route path="/Search" component={Search} />
      <Route path="/BottleList" component={BottleList} />
      <Route path="/BottleMetr/:bottle" render={(props) => <BottleMetr {...props} /> } />
      <Route exact path="/BottleMetr/" render={(props) => <BottleMetr {...props} /> } />
      { (location.pathname !== "/" ) ?  <SandwichMenu/> : null }
    </div>
  </Route>
  </Provider>
);

export default App;
