import React from 'react';
import Home from './Home';
import { withRouter } from 'react-router-dom';

class HomeContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			cpf: '',
			usuario: '',
			senha: '',
			success: false,
			showDialog: false
		}
	}

	onClickAdmin = () => {
		// this.props.history.replace({
		//   path: '/internal'
		// })

	}

	onSubmitCPF = (value) => {
		const cpf = this.state.cpf;
		const self = this;
		fetch(`http://localhost:4000/customer/${cpf}`, {'mode': 'no-cors'})
			.then((response) => {
				if (response.status === '200') {
					console.log(response);
					response.json();
				}
				 if (response.status >= 400) {
				      throw new Error("Bad response from server");
				    }
			}).then((data) => {
				self.setState({ success: data.success, showDialog: true })
			}).catch((err) => {
				console.log(err);
				self.setState({ showDialog: true })
			})
	}
	onCloseModal = () => {
		this.setState({ showDialog: false })
	}
	onChangeCPF = (e) => {
		const valor = e.target.value;
		this.setState({ 
			cpf: valor
		})
	}

	render() {
		return(<Home {...this.state} onCloseModal={this.onCloseModal} onChangeCPF={this.onChangeCPF} onSubmitCPF={this.onSubmitCPF}/>)
	}
}

export default withRouter(HomeContainer);