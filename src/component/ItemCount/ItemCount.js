import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';

//css
import './ItemCount.css';

const ItemCount = ({stock = 10 , initial = 1, onAdd }) => {


    const [itemStock , setItemStock] = useState(stock);
    const [itemQuantity,setItemQuantity] = useState(initial);


    const addQuantity = () => {
        if( itemStock === 0){
            alert('No hay mas stock')
        }else{
            setItemQuantity(itemQuantity + 1);
            setItemStock(itemStock -1);
        };
    };
    const subtractQuantity = () => {
        if(itemQuantity === 0){
            alert('No hay "-1" prendas')
        }else{
            setItemQuantity(itemQuantity - 1);
            setItemStock( itemStock + 1);
        };
    };
    const add = () => {
        onAdd (itemQuantity);
    };



    return (
        <div className='ContainerCounter'>
            <h1>Productos</h1>
                <div className='counter'>
                    <Button onClick={subtractQuantity} className="ui inverted pink button"> - </Button>
                    <p>{itemQuantity}</p>
                    <Button onClick={addQuantity} className="ui inverted pink button"> + </Button>
                </div>
            <Button onClick={add} className="ui inverted pink button">Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;
