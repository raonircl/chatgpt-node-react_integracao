import { useStates } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api.js';
import { SideMenu } from './components/SideMenu/SideMenu.js';

function App() {
  return (
    <div className="App">
        <SideMenu></SideMenu>
        <h1>Olá mundo!</h1>
    </div>
  );
}

export default App;
