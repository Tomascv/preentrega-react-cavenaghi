import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({ name, image, price, id, stock }) => {

    return (
        <div className="col">
            <div className="card cardStyle">
                <img src={image} alt={name} className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price}</p>
                    <button className="btn btn_ver">Ver</button>
                    
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}
