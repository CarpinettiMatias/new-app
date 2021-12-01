
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import  Item  from '../Item/Item';


const ItemList = ({product = []}) => {


    return (
        <Container className='text-center' >
            <h3 className='text-center' style={{fontSize:'30px'}}>Productos</h3>
            <hr />
        <Row>
            {product.map(prod => <Item prod={prod.id} {...prod}/>) }
        </Row>


        </Container>
    );
};

export default ItemList;
