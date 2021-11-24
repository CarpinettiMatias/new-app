import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, detail, price }) => {

    const handleOut = () => {
        window.location.replace('/')
    }
    return (
        <>
        <div className='ItemDetail'>
            <div className='contentImg'>
                    <button className='btn btn-secondary' style={{width:'40px', borderRadius:'15px'}} onClick={handleOut}>
                    <div class="visible content">
                        <i class="angle left icon"></i>
                    </div>
                </button>
                <img src={img} alt={name}  />
            </div>
            <div className='item'>
                <h1>{name}</h1>
                <p>{detail}</p>
                <p>USD ${price}</p>
                <button className='btn btn-secondary'
                style={{width:'80px',
                        borderRadius:'15px',
                        boxShadow:'1px 1px 2px gray'}}>
                    <div class="hidden content"></div>
                    <div class="visible content">
                        <i class="shopping cart icon"></i>
                    </div>
                </button>
            </div>
        </div>
        </>
    );
};

export default ItemDetail;
