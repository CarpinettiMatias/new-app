import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'

//css
import './ItemCount.css';

const ItemCount = ({stock=20 , initial}) => {
    const [counter, setCounter] = useState(initial=1);

    const addQuantity = () => (stock > counter) ? setCounter(counter + 1) : alert('No hay mas de este producto');
    const subtractQuantity = () => (counter > 1) ? setCounter(counter - 1) : alert('No hay -1 productos');

    const onAdd = () => {alert(`Tenes ${counter} en el carrito`)};

    return (
        <div className='ItemCount'>
                <div className='counter'>
                    <button onClick={subtractQuantity} className='btn btn-secondary'
                                    style={{width:'40px',
                                    borderRadius:'15px',
                                    boxShadow:'1px 1px 2px gray'}}>
                            <div class="hidden content"></div>
                            <div class="visible content">
                                 <i class="minus icon"></i>
                            </div>
                    </button>
                <p>{counter}</p>
                    <button onClick={addQuantity} className='btn btn-secondary'
                                    style={{width:'40px',
                                    borderRadius:'15px',
                                    boxShadow:'1px 1px 2px gray'}}>
                            <div class="hidden content"></div>
                            <div class="visible content">
                                <i class="plus icon"></i>
                            </div>
                    </button>
                    <button onClick={onAdd} className='btn btn-secondary'
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
    );
};

export default ItemCount;
