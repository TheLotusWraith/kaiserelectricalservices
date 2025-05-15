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
          
             Phone: <a href="tel:(936)933-3604">(936)933-3604</a><br/>
             Email: <a href="mailto:c.kaiser@kaiserelectricalservices.com">c.kaiser@kaiserelectricalservices.com</a><br/>
             Alt Email: <a href="mailto:m.reeves@kaiserelectricalservices.com">m.reeves@kaiserelectricalservices.com</a><br/>
        </p>
      </div>
    </>
  )
}

export default App
