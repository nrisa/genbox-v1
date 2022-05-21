import React, { Component } from "react";

// file
import cv from '../Asset/file/cv.pdf';

// foto
import eye from '../Asset/img/eye.png';
import risa from '../Asset/img/foto/risa.jpg';
import wa from '../Asset/img/sosmed/wa.png';
import arr from '../Asset/img/arrow.svg';

import who from '../Asset/img/foto/unknow.png';
import web from '../Asset/img/foto/development.jpeg';
import course from '../Asset/img/foto/khursus.jpeg';
import design from '../Asset/img/foto/desain.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once : true,
});

class Home extends Component {
  componentDidMount(){    
    window.onscroll = function() {myFunction()};
    let loop = 0;
		function myFunction() {
      if(loop == 0){
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
          const counter = document.querySelectorAll('.number-data');
          counter.forEach(counter => {
            counter.innerText = '0';
  
            const updateCounter = () => {
              const target = +counter.getAttribute('data-target')
              const c = +counter.innerText;
  
              const increment = target/250;
  
              if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 10)
              }
            }
            updateCounter()
          })

          loop += 1;
        }
      }
		}
  }
  
  render(){
    let duration = 1000;

    let data = [
      {
        title : 'Course\nFullstack Dev.',
        info : 'Private course online web dev fullstack JavaScript. chat me for more info '
      },
      {
        title : 'Web\nDevelopment.',
        info : `Build your website use React 
        and Node or Django. chat me for
        more info`
      },
      {
        title : 'Branding.',
        info : `Build your website use React 
        and Node or Django. chat me for
        more info`
      }
    ]

    let menu = [
      {
        title : 'Zero Class',
        price : '300k',
        info : '16 Jam',
        tag : ['HTML','CSS','Boostrap','ES6']
      },
      {
        title : 'Djanairo Class',
        price : '400k',
        info : '16 Jam',
        tag : ['Python','Django','MYSQL']
      },
      {
        title : 'MERN Class',
        price : '480k',
        info : '16 Jam',
        tag : ['Mongoose','Express','React','Node']
      }
    ]

    let tes = [
      {
        foto : course,
        part : 'Khursus',
        testimoni : 'Alhamdulillah, akhirnya menemukan tempat belajar dari dasar dan pas banget buat pemula sampe advance, Terimakasih ya mas, semoga berkah ilmunya..',
        user : 'hardest  side'
      },
      {
        foto : web,
        part : 'Development',
        testimoni : 'puas banget pake jasanya mas risa, desain web sesuai request, harga terjangkau',
        user : 'rawdsky'
      },
      {
        foto : design,
        part : 'Desain',
        testimoni : 'sangat komunikatif penetapan warnanya juga tepat cocok hasilnya juga memuaskan',
        user : 'ksyaxv_'
      }
    ]

    return (
      <>
        {/* header */}
        <div className="header container">
          <div className="intro">
            <h1 className="title">I'm Risa</h1>
            <p className="sub-title">Welcome To My Side</p>
            <div className="tagline">
              <span className="tag">Fullstack Developer</span>
              <span className="tag">Designer</span>
              <span className="tag">Scientist</span>
            </div>
            <p className="text-d1">
              sekarang saya adalah guru di sekolah SMK RPL, Saya juga mentor fullstack <br/>developer di kelas online yang saya buat dan disisi lain saya juga freelance <br/>pengembangan web dan desain branding
            </p>
          </div>        
          <div className="ornament">
            <img className="eye" src={eye} alt="eye" />
            <div className="profil">
              <div className="foto-profil">
                <img src={risa} alt="risa nussy" />
              </div>
                <h3 className="text-sub">Rivendi Al Isa Nussy</h3>
                <h4 className="text-sub text-sub-data">Indonesian, Jakarta</h4>
              <a className="btn-pdf" href={cv} target="_blank">
                Download my PDF
              </a>
            </div>
            <h1 className="profil-t1">Creative</h1>
            <h1 className="profil-t2">World</h1>
          </div>
        </div>
        {/* service */}
        <div className="service container">
          <span className="exp">
            <span className="one">
              1
            </span>
            <span>
              Years Of <br/> Experience.
            </span>
          </span>
          <div className="scroll">
            <span className="dot"></span>
          </div>
          <div className="container-sub-kotak">
            <span className="sub-kotak sub-kotak-1"></span>
            <span className="sub-kotak sub-kotak-2"></span>
            <span className="sub-kotak sub-kotak-3"></span>
            <h2 className="sub-title-right title-content">What I Do.</h2>
          </div>
          <div className="container-service">
            <div className="about-service" 
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"> 
              <h3>Any Type Of <br/>
              Query & Discussion.</h3><br/><br/>
              <p className="text">let's talk with me</p>
              <a className="btn-wa" href={"https://wa.me/6289509589977"} target="_blank">
                <img className="icon-wa" src={wa} alt="whatsapp" />
                Chat
              </a>
              <a href="mailto:rdasnd19@gmail.com" target="_blank" className="link-gmail">risanussy07@gmail.com <img src={arr} /></a>
            </div>
            <div className="menu-service">
              {data.map((e, i) => 
                <div className="card" key={i} 
                      data-aos="fade-up" 
                      data-aos-delay={i+"00"} 
                      data-aos-duration={duration}>   
                  <h3 className="smb">{e.title}</h3>
                  <p className="text-d1">{e.info}</p>          
                </div>
              )}

            </div>
          </div>
        </div>
        <div className="course container">
            <br/><br/>
            <h2 className="title-content">About What I Do.</h2>
            <div  
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
              <br/>
              <h1 className="title">
                Khursus <br/>
                Fullstack Dev.
              </h1>
              <br/>
              <p>
              Kelas Web Development private online. kelas ini hadir untuk<br/>
              membuat belajar web developmentmu menjadi lebih mudah dan juga<br/> 
              efisien. karena kelas diadakan secara private hingga memudahkan<br/>
              kita untuk bertanya dan memahami lebih mendalam lagi. didampingi<br/> 
              oleh mentor yang berpengalan di bidangnya.
              </p>
              <br/>
              <p>
              Kembangkan karirmu sebagai developer profesional<br/> 
              dengan keahlian coding yang dibutuhkan di dunia<br/> 
              industri melalui kelas private kami
              </p>
            </div>
            <br/><br/>
            <h3>Menu Kelas.</h3>
            <div className="container-menu">
              {menu.map((e, i) => 
              <div className="card-menu" key={i}  
                      data-aos="fade-up" 
                      data-aos-delay={i+"00"} 
                      data-aos-duration={duration}>
                <h2 className="title-menu">{e.title}</h2>
                <hr className="line" />
                <h2 className="price-menu">{e.price}</h2>
                <span className="hours-menu">{e.info}</span>
                <div className="tag-menu">
                  {e.tag.map((info, i) => 
                  <span className="tag-info" key={i}>{info}</span>  
                  )}
                </div>
              </div>
              )}
            </div>
        </div>
        <div className="banner">
          <div className="sub-banner container">
            <div className="data">
              <h1 className="number-data" data-target="16">0</h1>
              <p>Member Kelas</p>        
            </div>
            <div className="data">
              <h1 className="number-data" data-target="384">0</h1>
              <p>Jam Berlangsung</p>        
            </div>
            <div className="data">
              <h1 className="number-data" data-target="14">0</h1>
              <p>Materi Pembelajaran</p>        
            </div>
          </div>
        </div>
        <div className="dev container"  
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine">
          <h1 className="title">
            Website <br/>
            and Branding
          </h1>
          <br/>
          <p>
          selain kelas online kami juga bisa membantumu untuk<br/>
          menselesaikan masalah mu untuk membranding dan juga<br/>
          development website mu mengunakan teknologi MERN<br/>
          </p>
        </div>
        <div className="container">
          <h2 className="title-3 title-content">What Do They Say.</h2>
        </div>
        <div className="testimoni">
          <div className="sub-testimoni container">
            {tes.map((e, i) =>
            <div className="card-tes" key={i} 
                  data-aos="fade-down" 
                  data-aos-delay={i+"00"} 
                  data-aos-duration={duration}>
              <div className="foto-tes">
                <img src={e.foto} alt="user" className="foto-testi" />
              </div>
              <h3>{e.part}</h3>
              <p className="text-tes">
              {e.testimoni}
              </p>
              <span className="who">@{e.user}</span>
            </div>
            )}
          </div>
        </div>
        <div className="outro container" 
                  data-aos="fade-down"  
                  data-aos-duration={duration}>
          <p className="outro-text">
          Let's Create Your <br/>
          Creative World With Us
          </p>
          <a className="btn-wa" href={"https://wa.me/6289509589977"} target="_blank">
            <img className="icon-wa" src={wa} alt="whatsapp" />
            Chat
          </a>
        </div>
      </>
    );
  }
}

export default Home;