import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Asset/css/nopage.css'

class NoPage extends Component {
  render(){
    return (
      <div className="NoPage">
        <h1 className="oops">Ooops!</h1>
        <h3>Sedang Proses <br/> Pengembangan!</h3>
        <Link className="btn-back" to='/'>Back To Home</Link>
      </div>
    );
  }
}

export default NoPage;