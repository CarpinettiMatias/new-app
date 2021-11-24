
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const Item = ({name, img, price, id}) => {


    return (
        <Card key={id} className='card m-3' style={{width:'20rem'}}>
            <Image src={img} style={{width:'400px'}} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>${ price}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Link to={`/detail/${id}`} className='btn btn-secondary'>Ver Detalle</Link>
            </Card.Content>
        </Card>
    );
};

export default Item;
