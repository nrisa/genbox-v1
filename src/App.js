// konfigurasi
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

// component & pages
import NoPage from './Pages/NoPage';
import Navbar from './Component/Navbar';
import Up from './Component/Up';
import Sosmed from './Component/Sosmed';
import Home from './Pages/Home';

// style
import './Asset/css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='Root' id='Root'>
          <Navbar />
          <Sosmed />
          <Up />
           <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<NoPage />} />
              <Route path="/about" element={<NoPage />} />
              <Route path="/shop" element={<NoPage />} />
            </Routes>
           </div>
        </div>
      </Router>
    );
  }
}

export default App;
