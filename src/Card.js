import React, { useState } from 'react';
import './Card.css';

const Card = props => {
    const listOfCardsOne = ['Shorts', 'Jeans', 'Skirts', 'Dress']
    const listOfCardsTwo = ['T-shirts', 'Shirts', 'Tank-Tops', 'Tops']

    const [drawResult, setDrawResult] = useState();

    const draw = (card) => {
        console.log("card", card)
        if (card === 'Shorts') {
            setDrawResult(Math.floor((Math.random() * 4) + 1))
        } else if (card === 'Jeans') {
            setDrawResult(Math.floor((Math.random() * 8) + 1))
        } else if (card === 'Skirts') {
            setDrawResult(Math.floor((Math.random() * 4) + 1))
        } else if (card === 'Dress') {
            setDrawResult(Math.floor((Math.random() * 9) + 1))
        } else if (card === 'T-shirts') {
            setDrawResult(Math.floor((Math.random() * 5) + 1))
        } else if (card === 'Shirts') {
            setDrawResult(Math.floor((Math.random() * 6) + 1))
        } else if (card === 'Tank-Tops') {
            setDrawResult(Math.floor((Math.random() * 18) + 1))
        } else if (card === 'Tops') {
            setDrawResult(Math.floor((Math.random() * 7) + 1))
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
    );
};

export default Card;