import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import {IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const useStyles=makeStyles((theme) =>({
    modal:{
      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      padding:'16px 32px 24px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
    textField:{
      width: '100%',
    },
  
  }));

  const ModalCart =() => {

  const { removeCart } = useContext(CartContext);

  const{cart, deleteCart } =useContext(CartContext)

  const styles=useStyles();

  const [modal, setModal] = useState(false)

  const abrirCerrarModal = () => {
    setModal(!modal)
  };

  const body =({id, name, img,  price, counter}) => {
    <div className={styles.modal}>
                <Container>
                    <Card style={{ width: '18rem' ,
                                    margin:'10px'}}>
                        <Card.Body>
                            <Col xs={6} md={4}>
                                <Image src={img} thumbnail />
                            </Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Cantidad: {counter}</Card.Subtitle>
                            <Card.Text>Precio: USD ${price}</Card.Text>
                        </Card.Body>
                        <IconButton color="primary" aria-label="delete" onClick={() => {removeCart(id)}}>
                            <DeleteIcon />
                    </IconButton>
                    </Card>
                </Container>
        <Button onClick={() => abrirCerrarModal()}>Cancelar</Button>
    </div>

  };

    return (

      <div>
        {
                cart.length > 0
                ?  <>
                        <h1>Mi carrito</h1>
                        <hr />

                        <section>
                            {
                                cart.map((prod) => <ModalCart prod={prod.id} {...prod} />)
                            }
                        </section>
                        <hr />
                        <div>
                            <button className='btn btn-danger' onClick={deleteCart}>Vaciar Carrito</button>
                            <button className='btn btn-success' onClick={deleteCart}>Terminar mi compra</button>
                        </div>
                        <Button className={styles.button} onClick={() => abrirCerrarModal()}>
                          Abrir Modal
                      <Modal
                        open={modal}
                        onClose={abrirCerrarModal}>
                          {body}
                      </Modal>
                      </Button> 
                    </>
                    :
                    <>
                        <h2>No hay nada en el carrito</h2>
                        <hr />
                        <Link to='/' className='btn btn-primary'>Volver</Link>
                    </>
        }
      </div>

    );
};

export default ModalCart;
