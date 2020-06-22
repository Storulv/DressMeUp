import React, { useState } from 'react';
import dataDresses from './Dressing/Dresses.json';
import dataJeans from './Dressing/Jeans.json';
import dataShirts from './Dressing/Shirts.json';
import dataShorts from './Dressing/Shorts.json';
import dataSkirts from './Dressing/Skirts.json';
import dataTankShirts from './Dressing/TankShirts.json';
import dataTops from './Dressing/Tops.json';
import dataTshirts from './Dressing/Tshirts.json';
import './Card.css';

const Card = props => {
    const tshirt = dataTshirts.tshirt
    const top = dataTops.Tops
    const tankShirt = dataTankShirts.tankShirt
    const skirt = dataSkirts.skirts
    const short = dataShorts.shorts
    const shirt = dataShirts.shirt
    const jeans = dataJeans.jeans
    const dress = dataDresses.dress


    const listOfCardsOne = ['Shorts', 'Jeans', 'Skirts', 'Dress']
    const listOfCardsTwo = ['T-shirts', 'Shirts', 'Tank-Tops', 'Tops']

    const [drawResult, setDrawResult] = useState();

    const draw = (card) => {
        console.log("card", card)
        if (card === 'Shorts') {
            setDrawResult(short[Math.floor(Math.random() * short.length)])
        } else if (card === 'Jeans') {
            setDrawResult(jeans[Math.floor(Math.random() * jeans.length)])
        } else if (card === 'Skirts') {
            setDrawResult(skirt[Math.floor(Math.random() * skirt.length)])
        } else if (card === 'Dress') {
            setDrawResult(dress[Math.floor(Math.random() * dress.length)])
        } else if (card === 'T-shirts') {
            setDrawResult(tshirt[Math.floor(Math.random() * tshirt.length)])
        } else if (card === 'Shirts') {
            setDrawResult(shirt[Math.floor(Math.random() * shirt.length)])
        } else if (card === 'Tank-Tops') {
            setDrawResult(tankShirt[Math.floor(Math.random() * tankShirt.length)])
        } else if (card === 'Tops') {
            setDrawResult(top[Math.floor(Math.random() * top.length)])
        }
    }

    return (
        <div className='Card'>
            <div className='ClothingIcon'>
                {
                    listOfCardsOne.map(card =>
                        <div key={card} className='ClothingIconType' onClick={() => draw(card)}>
                            <p>{card}</p>
                        </div>
                    )
                }
            </div>
            <div className='ClothingIcon'>
                {
                    listOfCardsTwo.map(card =>
                        <div key={card} className='ClothingIconType' onClick={() => draw(card)}>
                            <p>{card}</p>
                        </div>
                    )
                }
            </div>
            <p>your DressUp is... <br /><br />{drawResult}<br /></p>
        </div>
    )
}



export default Card;