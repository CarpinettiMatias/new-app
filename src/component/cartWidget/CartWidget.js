import React from 'react';
import './CartWidget.css'


//Icono
import { Icon } from 'semantic-ui-react';


const CartWidget = () => {


    return (
        <div className='CartWidget'>
            <Icon disabled name='cart'/>
        </div>
    )
};

export default CartWidget;
