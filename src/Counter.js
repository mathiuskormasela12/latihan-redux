import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
	return(
		<div>
			<p>Point anda : { props.point }</p>
			<button type="button" onClick={ props.handleTambah }>Tambah</button>
			<button type="button" onClick={ props.handleKurang }>Kurangi</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		point: state.point
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleTambah() {
			dispatch({ type: 'TAMBAH' });
		},
		handleKurang() {
			dispatch({ type: 'KURANG' });
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
