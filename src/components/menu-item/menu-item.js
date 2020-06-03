import React from 'react';
import './menu-item.scss';


const Menuitem = (props) => (
    <div
        className={`${props.product.size} menu-item`}>

        <div
            style={{
                backgroundImage: `url(${props.product.imageUrl})`
            }}
            className='background-image'
        />

        <div className='content'>
            <h1 className='title'>{props.product.title}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
)

export default Menuitem;