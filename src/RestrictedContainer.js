import React from 'react';

class RestrictedContainer extends React.Component {
	render() {
		if (localStorage.getItem('token')) {
			return (this.props.children);
		}
		return <div>Voce não possui permissao para acessar essa tela</div>
	}
}

export default RestrictedContainer;