import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import 'tachyons';
const Header = () => {
    return (
      <>
        <header>
          <div className="overlay">
            <h1 className="text-center f1 b text-primary">Welcome to Nature's World</h1>
           
            <p className="text-white f4 i ">
              The world is full of beautiful places that most of us don’t even
              know about. From breath-taking waterfalls and jaw-dropping natural
              wonders to mysterious lost cities and quaint landmarks, you’re
              never short on things to see or do.Here you can see some of the wonderful places in our World
            </p>
            <br />
            <a href="https://en.wikipedia.org/wiki/Lists_of_tourist_attractions">
            <button className="btn btn-primary">READ MORE</button>
            </a>
          </div>
        </header>
      </>
    );
}

export default Header
