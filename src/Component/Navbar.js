import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../Asset/css/Navbar.css';
import logo from '../Asset/img/logo.gif'

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  handleHamburger = () => {
    let stick = document.querySelectorAll('span.hamburger span');
    let nav = document.querySelector('.nav-list');
    for(let i = 0; i < stick.length; i++){
      stick[i].classList.toggle('on-toggle')
    }

    nav.classList.toggle('nl-on')
  }

  render(){
    return (
      <nav>
        <span className="link">
          <img src={logo} alt="genbox" className="logo" />
          <h1 className="brand"><span className="outline-text">gen</span>Box</h1>
        </span>
        <ul className="nav-list">
          <li><NavLink activeclassname="active" className="link nav-link" to="/">Home</NavLink></li>
          <li><NavLink activeclassname="active" className="link nav-link" to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink activeclassname="active" className="link nav-link" to="/about">About</NavLink></li>
          <li><NavLink activeclassname="active" className="link nav-link" to="/shop">Shop</NavLink></li>
        </ul>
        <span className="hamburger" onClick={this.handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </nav>
    );
  }
}

export default Navbar;