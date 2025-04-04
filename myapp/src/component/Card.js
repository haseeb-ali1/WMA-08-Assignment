import React from 'react'

export default function Card() {
  return (
    <div className="card-section">
            <h2 className="card">Popular Residence</h2>
            <div className="card-container">
                <div className="card1">
                    <img className="cardimg" src='../katie.png' alt=""/>
                    <h3 className="card">Aliva Priva Jalvin</h3>
                    <h5>1087 Pin Oak Drive, Clinton, USA</h5>
                </div>
                <div className="card2">
                    <img className="cardimg" src='../lance.png' alt=""/>
                    <h3 className="card">Hard line orchar</h3>
                    <h5>1087 Pin Oak Drive, Clinton, USA</h5>
                </div>
                <div className="card3">
                    <img className="cardimg" src='../pexels.png' alt=""/>
                    <h3 className="card">Allpine lenevote</h3>
                    <h5>1087 Pin Oak Drive, Clinton, USA</h5>
                </div>
            </div>
            <button className="btn2">View All Properties</button>
        </div>
  )
}
