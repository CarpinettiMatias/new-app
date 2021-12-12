import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getData } from '../helper/dataFunction';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

    const [ loading, setLoading ] = useState(false);
    const [ product, setProduct ] = useState([]);

     const {catId} = useParams()


    useEffect(() => {

        setLoading(true)
        getData()
            .then((resp) => {
                    if(!catId){
                    setProduct(resp)
                }else{
                    setProduct( resp.filter( prod =>prod.category === catId))
                }
                })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [catId]);

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
    );
};

export default ItemListContainer;
