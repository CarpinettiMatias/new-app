import React,{ useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, detail, price, stock}) => {

    const navigate = useNavigate()

    const [counter, setCounter] = useState(0);
    const [ viewAdd, setViewAdd ] = useState();
    const onAdd = () => {
        if(counter > 0){
            console.log(`Items agregados: `,{
                id,
                name,
                price,
                counter
                });

            setViewAdd(true);
        };
    };

    const handleOut = () => {
        //Vuelve una navegacion anterior
        navigate(-1)
    }
    return (
        <>
        <div className='ItemDetail' key={id}>
            <div className='contentImg'>
                    <button className='btn btn-secondary' style={{width:'40px', borderRadius:'15px'}} onClick={handleOut}>
                    <div class="visible content">
                        <i class="angle left icon"></i>
                    </div>
                </button>
                <img src={img} alt={name}  />
            </div>
            <div className='item'>
                <h1>{name}</h1>
                <p>{detail}</p>
                <p>USD ${price}</p>
            {
                !viewAdd
                ?
                <ItemCount
                    stock={stock}
                    counter={counter}
                    setCounter={setCounter}
                    onAdd={onAdd}/>
                : <>
                    <Link to='/Cart' className='btn btn-secondary'>Terminar mi compra</Link>
                    <button className='btn btn-secondary' 
                            style={{width:'60px', borderRadius:'5px'}} 
                            onClick={handleOut}>
                                Atras
                                </button>
                  </>


            }
            </div>
        </div>
        </>
    );
};

export default ItemDetail;
