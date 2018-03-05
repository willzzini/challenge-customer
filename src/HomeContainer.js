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
			disabled: true,
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
		fetch(`http://localhost:4000/customer/${cpf}`, 
			{'Content-Type': 'application/json'})
			.then((response) => {
				if (response.status === 200) {
					console.log(response);
					return response.json()
				}
				 if (response.status >= 400) {
				      throw new Error("Bad response from server");
				    }
			}).then((data) => {
				self.setState({ success: data.customer_defaulter, showDialog: true })
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
		this.setState({disabled: valor.length === 0,
			cpf: valor
		})
	}

	render() {
		return(<Home {...this.state} onCloseModal={this.onCloseModal} onChangeCPF={this.onChangeCPF} onSubmitCPF={this.onSubmitCPF}/>)
	}
}

export default withRouter(HomeContainer);