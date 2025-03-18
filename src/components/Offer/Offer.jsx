import React from 'react'
import './Offer.css'
import Timer from '../Timer/Timer'
import Button from '../Button/Button'

export default function Offer() {
    return (
        <div className='offer'>
            <Timer />
            <div className="offer-discount-block">
                <div className="offer-discount-desc">
                    <p className='offer-price-desc'>Звичайна ціна:</p>
                    <span className='offer-price offer-old-price'>275 грн</span>
                </div>
                <div className="offer-discount-desc">
                    <p className='offer-price-desc'>Ціна за акцією:</p>
                    <span className='offer-price offer-new-price'>249 грн</span>
                </div>
            </div>
            <div className="offer-btn">
                <Button />
            </div>
        </div>
    )
}
