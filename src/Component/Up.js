import React, { Component } from "react";
import up from "../Asset/img/up.svg"

class Up extends Component {
  render(){ 
    return (
      <div className="Up">
        <a href="#Root">
          <img src={up} alt="up"/>
        </a>
      </div>
    )
  }
}

export default Up;