import React, { useState } from 'react';
import './Draw.css';

const Draw = props => {

    const [drawResult, setDrawResult] = useState();

    const draw = () => {
        console.log('Draw', draw)
        setDrawResult(Math.floor((Math.random() * 8) + 1))
    }

    return (
        <div className='Draw'>
            <button className='Draw' onClick={draw}>Draw it</button>
            <p>{drawResult}</p>
        </div>
    );
};

export default Draw;