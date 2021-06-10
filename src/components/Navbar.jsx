import React from "react";
import { useState } from "react";
import Hamburger from "../images/Hamburger.svg";
import Close from "../images/Close.svg";
function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div>
        
      <header>
          <button id="menutoggle" onClick={() => setActive(!active)}>{active ? <img src={Close}/> : <img src={Hamburger} alt="Menu" /> }
          </button>
        <nav className={active ? "nav active" : "nav"}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
        </nav>
    
      </header>
    </div>
  );
}

export default Navbar;
