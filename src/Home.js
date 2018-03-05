import React from 'react';
import { TextField, Button, Dialog } from 'material-ui';


const Home = (props) => {
	return (
		<div className="wrapper">
			<TextField label="Informe seu CPF" helperText="Sem pontos" value={props.cpf} onChange={props.onChangeCPF} /> 
			<div style={{ marginLeft: '15px' }}><Button variant="raised" color="primary" onClick={props.onSubmitCPF}>Consultar CPF</Button></div>
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
