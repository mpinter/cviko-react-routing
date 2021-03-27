import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

const App: React.FC = () => {
    // naive approach 1 - does not preserve state, keeps reloading  the package
    let whatToRender: string | React.ReactNode;
    switch (window.location.pathname) {
        case '/':
            whatToRender = <Home />;
            break;
        case '/about':
            whatToRender = <About />;
            break;
        default:
            whatToRender = '404 - not found';
    }

    const [lightBgMode, setLightBgMode] = useState(false);

    return (
        <div className={lightBgMode ? 'App light' : 'App'}>
            <div>
                <a href="/">Home </a>
                <a href="/about">About</a>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {whatToRender}
                <button type="button" onClick={() => setLightBgMode(!lightBgMode)}>
                    Toggle Background
                </button>
            </header>
        </div>
    );
};

export default App;
