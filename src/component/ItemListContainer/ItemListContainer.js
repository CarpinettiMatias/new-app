import React from 'react';


const ItemListContainer = ({greeting}) => {
    const estilos = {
        margin:'10px',
        color:'pink',
        fontSize: '50px'
    }

    return (
        <div className='greeting'>
            <h2 className='text-center' style={estilos}>{greeting}</h2>
            <hr />
        </div>

    );
};

export default ItemListContainer;
