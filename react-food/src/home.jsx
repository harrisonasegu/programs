
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/Images/headerImage/creditCard.jpeg'
import './Scss/home.css'


const Home = () => {

  return(
   <div className="wrap">
     <header className='header-contents'>
      <div className="log">
        <img src={logo} alt="myLogo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="moving-animation">
      <marquee behavior="" direction="">
        <h1>
        Variables are names that store data, such as numbers, text, or boolean values. 
        By creating instructions for computers to perform tasks using languages that they can understand.
        When you turn on your smartphone, browse the web, or use any electronic device, you’re interacting with code written by developers. They create the programs that make these devices work.
        </h1>
      </marquee>
    </div>
   </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

export default home
