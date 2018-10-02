import React, { Component } from 'react'
import Discover from '../imgs/discover.svg';
import Plans from '../imgs/plans.svg';
import Search from '../imgs/search.svg';
import Favorites from '../imgs/favorites.svg';
import Tourist from '../imgs/tourist.svg';


export default class Features extends Component {
  render() {
    return (
      <div className='Features'>

        <div className="feature">
            <img className='featureImage' src={Discover} alt="Discover"/>
            <h3>Discover</h3>
            <p className='featureDescription'>¡Descubre planes de tiempo limitado y ofertas especiales!</p>
        </div>

        <div className="feature">
            <img className='featureImage' src={Plans} alt="Plans"/>
            <h3>Plans</h3>
            <p className='featureDescription'>Échale un vistazo a los planes disponibles en Bogotá.</p>
        </div>

        <div className="feature">
            <img className='featureImage' src={Search} alt="Search"/>
            <h3>Search</h3>
            <p className='featureDescription'>Busca tus planes. <b>Personalizados</b> a tu medida.</p>
        </div>

        <div className="feature">
            <img className='featureImage' src={Favorites} alt="Favorites"/>
            <h3>Favorites</h3>
            <p className='featureDescription'>Guarda los planes que mas te gusten.</p>
        </div>

        <div className="feature">
            <img className='featureImage' src={Tourist} alt="Tourist"/>
            <h3>Tourist</h3>
            <p className='featureDescription'>¿Te gustaría ser un turista tu ciudad?</p>
        </div>
      </div>
    )
  }
}
