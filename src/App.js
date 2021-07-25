import logo from './logo.svg';
import { Button, Menu, Modal, Typography } from '@jota-ds/lib-react';
import './App.css';
import { useState } from 'react';

function App() {
  const [modalIsOpen, setOpenModal] = useState(false);

  const openModal = () => {
    setOpenModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button label="Jota DS" type="primary" onColor={true} handleClick={openModal}/>
        <Modal isOpen={modalIsOpen} firstActionLabel="Ok" secondActionLabel="Cancel" isDoubleAction={true} handleConfirm={() => console.log("confirmou")} handleCancel={() => console.log("cancelou")} handleClose={() => setOpenModal(false)}>
          <Typography component="heading" size="large">Hello, World!</Typography>
          <br></br>
          <Typography component="paragraph" size="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum cumque perspiciatis nobis accusantium provident recusandae libero voluptatum maxime placeat.</Typography>
          <br></br>
          <Typography component="paragraph" size="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum cumque perspiciatis nobis accusantium provident recusandae libero voluptatum maxime placeat.</Typography>
        </Modal>
      </header>
    </div>
  );
}

export default App;
