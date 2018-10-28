import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainMenu from './components/MainMenu.js';
import About from './components/about.js';
import SearchField from './components/SearchField.js';
import Search from './components/Search.js';
import BottleMetr from './components/BottleMetr.js';
import BottleList from './components/BottleList.js';

class App extends React.Component {

  render() {
    console.log(this.props.location);
    return (
      <Route>
      <div className="App">
        <header className="App-header">
        <Link to="/" className="App-link">
          <p>
            <img src={logo} className="App-logo" alt="logo" />
            <text style={{ padding: 5 }}>BottleMetr</text>
          </p>
          </Link>
          {
            ((this.props.location.pathname !== "/") && (this.props.location.pathname !== "/BottleList")) ? false : true && <SearchField/>
        }
        </header>
        <Route exact path="/" component={MainMenu} />
        <Route path="/about" component={About} />
        <Route path="/Search" component={Search} />
        <Route path="/BottleList" component={BottleList} />
        <Route path="/BottleMetr/:bottle" render={(props) => <BottleMetr {...props} /> } />
        <Route exact path="/BottleMetr/" render={(props) => <BottleMetr {...props} /> } />
      </div>
      </Route>
    );
  }
}

export default App;
