import React from 'react';
import { TextField, Button, Dialog } from 'material-ui';

const Home = (props) => {
	return (
		<div><TextField value={props.cpf} onChange={props.onChangeCPF} /> 
		<Button onClick={props.onSubmitCPF}>Consultar CPF</Button>
			<Dialog open={props.showDialog} onClose={props.onCloseModal}>
		{props.success ? (
		<div>
		Seu nome está limpo!
		</div>
		) : (
		<div>
		Você tem restrições no seu nome!
		</div>
		)}
		</Dialog>
		</div>
	)
}

export default Home;
