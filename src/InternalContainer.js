import React from 'react';
import Home from './Home';

class InternalContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			debtor_value: '',
			customer_defaulter: '',
			store_id: '',
		}
	}

	onSubmitCPF = (value) => {
		const cpf = this.state.cpf;
		const self = this;
		fetch(`https://localhost:2323/consultar-cpf?cpf=${cpf}`)
			.then((response) => {
				if (response.status === '200') {
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
		return(<Home {...this.state} onCloseModal={this.onCloseModal} onChangeCPF={this.onChangeCPF} onSubmitCPF={this.onSubmitCPF} />)
	}
}

export default InternalContainer;