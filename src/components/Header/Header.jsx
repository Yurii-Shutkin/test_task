import React from 'react'
import './Header.css'
import data from '../../data/fakeData'

export default function Header() {
    return (
        <div className='header container'>
            {data.map((item, ind) => {
                return (
                    <div className='header-items' key={ind}>
                        <span className="item-title">{item.title}</span>
                        <span className="item-desc">{item.desc}</span>
                    </div>
                )
            })}
        </div>
    )
}
