import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Seach from '../seach/Seach';
const Slide = () => {
  
    const anh1 = './img/anh1.1.jpg'
    const anh2 = './img/anhsua.jpg'
    const anh3 = './img/anh3.1.jpg'
  return (
    <div style={{borderTop:'2px solid blue' }}>
    
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={anh1} alt="Los Angeles" className="d-block" style={{width:'100%'}}/>
    <div className="carousel-caption">
      <h3>Los Angeles</h3>
      <p>We had such a great time in LA!</p>
    </div>
  </div>
  <div className="carousel-item">
    <img src={anh2} alt="Chicago" className="d-block" style={{width:'100%'}}/>
    <div className="carousel-caption">
      <h3>Chicago</h3>
      <p>Thank you, Chicago!</p>
    </div> 
  </div>
  <div className="carousel-item">
    <img src={anh3} alt="New York" className="d-block" style={{width:'100%'}}/>
    <div className="carousel-caption">
      <h3>New York</h3>
      <p>We love the Big Apple!</p>
    </div>  
  </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>
  
    </div>
  );
}

export default Slide;