import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import GettingData from './components/GettingData';
import GettingDataBetter from './components/GettingDataBetter';

const App: React.FC = () => {
    const [lightBgMode, setLightBgMode] = useState(false);
    return (
        <div className={lightBgMode ? 'App light' : 'App'}>
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/data">Getting Data</Link>
                <Link to="/better-data">SWR</Link>
                <Link to="/gql">GQL</Link>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/data">
                        <GettingData />
                    </Route>
                    <Route path="/better-data">
                        <GettingDataBetter />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <button type="button" onClick={() => setLightBgMode(!lightBgMode)}>
                    Toggle Background
                </button>
            </header>
        </div>
    );
};

export default App;
