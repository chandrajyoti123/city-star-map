import React from 'react';
import './FamousPlaceCard.css'
import {breakString} from '../../utils/string'

export default function FamousPlaceCard({image, title, description,no }){
    return(
        <div className="topplacecard-container">
            <div>
                <img className='toppalaceimage' src={image} alt=""/>
            </div>
            <p className='titleplace'><span className='number-box'>{no}</span>{title}</p>
            <p className='description-place'>{breakString(description, 175 )}{'...'}</p>    
        </div>
    )
}

