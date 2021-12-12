import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getData } from '../../helper/dataFunction';
import ItemDetail from '../../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [ item, setItem ] = useState();
    const [ loading, setLoading ] = useState(false);

    const { detailId } = useParams();

    console.log(detailId);

    useEffect(() => {
        setLoading(true)
        getData()
            .then(resp => {
                setItem( resp.find( prod => prod.id === Number(detailId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    },[]);


    return (


        <>
        {
            loading
            ? <div class="ui active inverted dimmer">
                <div class="ui large text loader">Cargando</div>
             </div>
            : <ItemDetail {...item}/>
        }

        </>
    );
};

export default ItemDetailContainer;
