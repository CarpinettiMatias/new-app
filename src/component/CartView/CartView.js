import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import ItemCartView from './ItemCartView';
import { Link } from 'react-router-dom'




const CartView = () => {

    const{cart, deleteCart } =useContext(CartContext)

    return (
        <div>
            {
                cart.length > 0
                ?  <>
                        <h1>Mi carrito</h1>
                        <hr />

                        <section>
                            {
                                cart.map((prod) => <ItemCartView key={prod.id} {...prod} />)
                            }
                        </section>
                        <hr />
                        <div>
                            <button className='btn btn-danger' onClick={deleteCart}>Vaciar Carrito</button>
                            <button className='btn btn-success' onClick={deleteCart}>Terminar mi compra</button>
                        </div>
                    </>
                    :
                    <>
                        <h2>No hay nada en el carrito</h2>
                        <hr />
                        <Link to='/' className='btn btn-primary'>Volver</Link>

                    </>
            }
        </div>
        
    )
}

export default CartView;
