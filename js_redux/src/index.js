console.log('welcome');
const BUY_PHONE = 'BUY_PHONE';

const buyPhone = () => {
	// Action
	return {
		type: BUY_PHONE,
	};
};

// Reducer

// (prevState, action) => newState

// init state
const initialState = {
	phones: 5,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return { ...state, phones: state.phones - 1 };

		default:
			return state;
	}
};
