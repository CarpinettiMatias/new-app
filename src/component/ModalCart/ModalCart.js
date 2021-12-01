import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';



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
  
const ModalCart = () => {

    const styles=useStyles();

  const [modal, setModal] = useState(false)

  const abrirCerrarModal = () => {
    setModal(!modal)
  };

  const body =(
    <div className={styles.modal}>
      <div align='center'>
            <h2>Formulario</h2>
      </div>
      <hr />
      <TextField label='Nombre' className={styles.textField}/>
      <hr />
      <TextField label='Apellido' className={styles.textField}/>
      <hr />
      <TextField label='Email' className={styles.textField}/>
      <div>
        <Button>Enviar</Button>
        <Button onClick={() => abrirCerrarModal()}>Cancelar</Button>
      </div>
    </div>
  );

    return (
        <Button className={styles.button} onClick={() => abrirCerrarModal()}>
            Abrir Modal
        <Modal
          open={modal}
          onClose={abrirCerrarModal}>
            {body}
        </Modal>
        </Button> 
    );
};

export default ModalCart;
