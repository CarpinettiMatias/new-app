import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react'

export const Item = ({prod}) => {


    return (

        <Card key={prod.id} className='card m-3' style={{width:'20rem'}}>
            <Image src={prod.img} style={{width:'75px'}} />
            <Card.Content>
            <Card.Header>{prod.name}</Card.Header>
            <Card.Description>${ prod.price}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button class="ui grey button">Detalle</Button>
            </Card.Content>
    </Card>
    )
};

