import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../CartContext/CartContext';
//Icono
import { Icon } from 'semantic-ui-react';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (

        <div className='CartWidget'>
           <Icon disabled name='cart' className="circular inverted users icon"/>
            <p>{totalQuantity()}</p>
       </div>
    );
};
export default CartWidget;
