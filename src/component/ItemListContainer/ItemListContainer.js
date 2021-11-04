import React from 'react';


const ItemListContainer = ({greeting}) => {


    return (
        <div className='greeting'>
            <h2 className='text-center' >{greeting}</h2>
            <hr />
        </div>

    );
};

export default ItemListContainer;
