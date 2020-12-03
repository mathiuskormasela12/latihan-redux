import { createStore } from 'redux';

const initialState = {
	point: 0
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TAMBAH' :
			return Object.assign({}, state, { point: state.point + 1 });
		break;
		case 'KURANG' :
			return Object.assign({}, state, { point: state.point - 1 });
		break;
		default:
			return state;
	}
	return state;
}

export default createStore(reducer);
