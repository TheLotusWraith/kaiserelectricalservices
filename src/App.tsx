// import { useState } from 'react'
import KESLogo from './assets/KESLogo.png'
// import viteLogo from '../vite.svg'
import './App.css'
// import MyListGroup from './components/MyListGroup'
// import MenuItem from './components/MenuItem.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationMenu from './components/NavigationMenu.tsx';

console.log("hi");

function App() {

  return (
    <>

      <h3> <u>KAISER ELECTRICAL SERVICES</u> </h3><br/><br/>
      <h1> SITE UNDER CONSTRUCTION </h1>

      <p>
        New management is handling the construction of our website. <br/>Thank you for your interest and your patience.
      </p>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={KESLogo} className="logo" alt="KES logo" />
        </a>
        <br/><br/>
      </div>

      <div>
        <p className="read-the-docs">
          Please reach us by...<br/><br/>
          
             Phone: (936)933-3604<br/>
             Email: c.kaiser@kaiserelectricalservices.com<br/>
             Alt Email: m.reeves@kaiserelectricalservices.com<br/>
        </p>
      </div>
    </>
  )
}

export default App
