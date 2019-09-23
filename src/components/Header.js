import React from "react";

import logo from "../assets/facebook.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img id="logo" src={logo} />
          <div id="perfil">
            <span>Meu Perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
