import React, { Component } from 'react'
import phonePic from '../imgs/browsePhone.png';


export default class MainBanner extends Component {
  render() {
    return (
      <div className='MainBanner'>
        <div className='MainBannerItem titles'>
            <h1>Desparche</h1>
            <p>¿Qué hacer?</p>
            <p>Nosotros sabemos.</p>
        </div>
        
        <div className='MainBannerItem'>
            <img className='phonePic' src={phonePic} alt="The App"/>
        </div>
        
        
     </div>
    )
  }
}
