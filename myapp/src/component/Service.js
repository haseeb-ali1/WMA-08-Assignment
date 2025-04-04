import React from 'react'

export default function Service() {
    return (
        <div className="service-card">
            {/* <img src='../Mask group.png'/> */}
            <div className="service1">
                <img className="service" src='../001-loupe.png'  />
                <h3>Easy to find</h3>
                <h5>Urna, massa aliqua dui pellentesque
                    . Ac, gravida in. Diam vitae, nec m
                    attis lectus quam pretium amet faci
                    lisis.</h5>
            </div>
            <div className="service2">
                <img className="service" src='../002-tag.png' />
                <h3>Affordable Prices</h3>
                <h5>Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</h5>
            </div>
            <div className=" service3">
                <img className="service" src='../003-quick.png' />
                <h3>Quickly Process</h3>
                <h5>Ac, gravida in diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui
                    pellentesque. </h5>
            </div>
        </div>
    )
}
