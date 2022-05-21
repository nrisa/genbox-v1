import React, { Component } from "react";
// img
import fb from '../Asset/img/sosmed/fb.png';
import yt from '../Asset/img/sosmed/yt.png';
import ig from '../Asset/img/sosmed/ig.png';

class Sosmed extends Component {
  render(){ 
    let url = {
      fb : 'https://web.facebook.com/profile.php?id=100064386872855',
      ig : 'https://www.instagram.com/rrrisa666',
      yt : 'https://www.youtube.com/channel/UCj6akuJHRW5qNJQx2N5icKA'
    }

    return (
      <footer>
        <a href={url.fb} target="_blank"><img src={fb} alt="facebook" /></a>
        <a href={url.ig} target="_blank"><img src={ig} alt="instagram" /></a>
        <a href={url.yt} target="_blank"><img src={yt} alt="youtube" /></a>
        <span className="footer-line"></span>
      </footer>
    )
  }
}

export default Sosmed;