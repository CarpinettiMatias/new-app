import React, { useState, useEffect} from 'react';
import { getData } from '../helper/dataFunction';
import { ItemList } from '../ItemList/ItemList';


const ItemListContainer = () => {

    const [ loading, setLoading ] = useState(false);
    const [ product, setProduct ] = useState([]);



    useEffect(() => {

        setLoading(true)
        getData()
            .then((resp) => {
                setProduct(resp);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);



    return (
        <>
            {
                loading
                        ?  <div class="ui active inverted dimmer">
                            <div class="ui large text loader">Cargando</div>
                           </div>
                        : <ItemList product={product}/>
            }
        </>
    )
}

export default ItemListContainer;
