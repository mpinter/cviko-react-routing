import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

const App: React.FC = () => {
    // naive approach 2 - just state, no url
    const [route, setRoute] = useState<'Home' | 'About'>('Home');
    let whatToRender: string | React.ReactNode;
    switch (route) {
        case 'Home':
            whatToRender = <Home />;
            break;
        case 'About':
            whatToRender = <About />;
            break;
        default:
            whatToRender = '404 - not found';
    }
    const [lightBgMode, setLightBgMode] = useState(false);

    return (
        <div className={lightBgMode ? 'App light' : 'App'}>
            <div>
                <button type="button" onClick={() => setRoute('Home')}>
                    Home
                </button>
                <button type="button" onClick={() => setRoute('About')}>
                    About
                </button>
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
