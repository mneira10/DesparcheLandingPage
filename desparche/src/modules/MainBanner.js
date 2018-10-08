import React, { Component } from 'react'
import phonePic from '../imgs/browsePhone.png';


export default class MainBanner extends Component {
  render() {
    return (
      <div className='MainBanner'>
        <div className="row MainBannerContainer">
          <div className='MainBannerItem titles col-sm-auto col-lg-6'>
              <h1>Desparche</h1>
              <p>¿Qué hacer?</p>
              <p>Nosotros sabemos.</p>
          </div>
          
          <div className='ImageContainer col-sm-auto col-lg-6'>
              <div className="imagePapa">
                <img className='phonePic' src={phonePic} alt="The App"/>
              </div>
          </div>
        </div>
        
        
     </div>
    )
  }
}
