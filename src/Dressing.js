import React from 'react';
import dataDresses from './Dressing/Dresses.json';
import dataJeans from './Dressing/Jeans.json';
import dataShirts from './Dressing/Shirts.json';
import dataShorts from './Dressing/Shorts.json';
import dataSkirts from './Dressing/Skirts.json';
import dataTankShirts from './Dressing/TankShirts.json';
import dataTops from './Dressing/Tops.json';
import dataTshirts from './Dressing/Tshirts.json';
import './Dressing.css';

const Dressing = props => {

    const tshirt = dataTshirts.tshirt
    const top = dataTops.Tops
    const tankShirt = dataTankShirts.tankShirt
    const skirt = dataSkirts.skirts
    const short = dataShorts.shorts
    const shirt = dataShirts.shirt
    const jeans = dataJeans.jeans
    const dress = dataDresses.dress

    return (
        <div>
            <div className='listOfMy'>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataTshirts)}</div>
                    {tshirt.map(tshirt => <li key={tshirt}>{tshirt}</li>)}
                </div>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataTops)}</div>
                    {top.map(top => <li key={top}>{top}</li>)}
                </div>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataTankShirts)}</div>
                    {tankShirt.map(tankShirt => <li key={tankShirt}>{tankShirt}</li>)}
                </div>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataSkirts)}</div>
                    {skirt.map(skirt => <li key={skirt}>{skirt}</li>)}
                </div>
            </div>
            <div className='listOfMy'>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataShorts)}</div>
                    {short.map(short => <li key={short}>{short}</li>)}
                </div>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataShirts)}</div>
                    {shirt.map(shirt => <li key={shirt}>{shirt}</li>)}
                </div>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataJeans)}</div>
                    {jeans.map(jeans => <li key={jeans}>{jeans}</li>)}
                </div>
                <div className='oneListOfMy'>
                    <div className='listTitle'>{Object.keys(dataDresses)}</div>
                    {dress.map(dress => <li key={dress}>{dress}</li>)}
                </div>
            </div>
        </div>
    )
}

{/*Object.keys(dressing.top[0])}
{Object.values(dressing.top[0])*/}

/*function Dressing() {

    return (
        <div className='Dressing'>
            <h4>My dressing</h4>
            <div className='myDressing'>
                <div>
                    <p>Shorts</p>
                    <ul>
                        <li>1 : Bleu</li>
                        <li>2 : Bleu ciel</li>
                        <li>3 : Noire</li>
                        <li>4 : Blanc</li>
                    </ul>
                </div>
                <div>
                    <p>Jeans</p>
                    <ul>
                        <li>1 : Bleu ciel</li>
                        <li>2 : Bleu foncé</li>
                        <li>3 : Vert</li>
                        <li>4 : Bleu délavé</li>
                        <li>5 : Noir</li>
                        <li>6 : Noir délavé</li>
                        <li>7 : Noir troué</li>
                        <li>8 : Gris</li>
                    </ul>
                </div>
                <div>
                    <p>Skirts</p>
                    <ul>
                        <li>1 : Patineuse noire</li>
                        <li>2 : Mouflante noire</li>
                        <li>3 : Marron</li>
                        <li>4 : Triskel</li>
                    </ul>
                </div>
                <div>
                    <p>Robe</p>
                    <ul>
                        <li>1 : Carreaux noire et blanc</li>
                        <li>2 : Tête de mort</li>
                        <li>3 : Blanche</li>
                        <li>4 : Rayure</li>
                        <li>5 : Noir ample</li>
                        <li>6 : Noir patineuse</li>
                        <li>7 : Tête de mort moulante</li>
                        <li>8 : Constellation</li>
                        <li>9 : Carreaux</li>
                    </ul>
                </div>
            </div>
            <div className='myDressing'>
                <div>
                    <p>T-Shirts</p>
                    <ul>
                        <li>1 : Volcom</li>
                        <li>2 : Dentelle Blanc</li>
                        <li>3 : Vert</li>
                        <li>4 : Pokemon</li>
                        <li>5 : Tête de mort</li>
                    </ul>
                </div>
                <div>
                    <p>Shirts</p>
                    <ul>
                        <li>1 : Rayée</li>
                        <li>2 : Blanche</li>
                        <li>3 : Noire</li>
                        <li>4 : Blanc manches courtes</li>
                        <li>5 : Bleu pastel</li>
                        <li>6 : Blanc manches longues</li>
                        <li>7 : Noir trouée</li>
                        <li>8 : Gris</li>
                    </ul>
                </div>
                <div>
                    <p>Tank-shirts</p>
                    <ul>
                        <li>1 : Noire</li>
                        <li>2 : Gris</li>
                        <li>3 : Blanc</li>
                        <li>4 : Violet</li>
                        <li>5 : Jaune</li>
                        <li>6 : Vert</li>
                        <li>7 : Rouge</li>
                        <li>8 : LSM</li>
                        <li>9 : Gris strilles</li>
                        <li>10 : Shaka ponk gris</li>
                        <li>11 : Shaka ponk blanc</li>
                        <li>12 : Kadavera</li>
                        <li>13 : Vert gris motif coeur</li>
                        <li>14 : Moon</li>
                        <li>15 : Pikachu</li>
                        <li>16 : Noir fluide</li>
                        <li>17 : Marron</li>
                        <li>18 : Shaka ponk bang bang</li>
                    </ul>
                </div>
                <div>
                    <p>Robe</p>
                    <ul>
                        <li>1 : Gilet noire</li>
                        <li>2 : Gilet sable</li>
                        <li>3 : Gilet bleu soleil</li>
                        <li>4 : Gilet marron fleur</li>
                        <li>5 : Gilet bleu foncé</li>
                        <li>6 : Top rayure</li>
                        <li>7 : Sable</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}*/

export default Dressing;