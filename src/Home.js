import React from 'react';
import { TextField, Button, Dialog } from 'material-ui';

const Home = (props) => {
	return (
		<div><TextField value={props.cpf} onChange={props.onChangeCPF} /> 
		<Button onClick={props.onSubmitCPF}>Consultar CPF</Button>
			<Dialog open={props.showDialog} onClose={props.onCloseModal}>ASASASS</Dialog>
		</div>
	)
}

export default Home;
