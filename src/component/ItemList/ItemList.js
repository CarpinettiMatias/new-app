import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Item } from '../Item/Item';


export const ItemList = ({product}) => {


    return (
        <Container className='my-5'>
            <h3>Mis Productos</h3>
            <hr />
        <Row>
            {product.map( (prod) => <Item prod={prod}/>) }
        </Row>


        </Container>
    );
};

