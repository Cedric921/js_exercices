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

// init states
const initialState = {
	phones: 10,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return { ...state, phones: state.phones - 1 };

		default:
			return state;
	}
};

// reductStore contient nos states

// getState pour recuperer la data
// dispatch effectuer une action

const store = Redux.createStore(reducer);

const availablePhones = document.querySelector('#count');
availablePhones.innerHTML = store.getState().phones;

document.querySelector('#buy-phone').addEventListener('click', () => {
	//permettre de modifier un state via l'action se trouvant dans buyPhone
	store.dispatch(buyPhone());
});

//ecouter si le state a ete modifier
store.subscribe(() => {
	console.log(store.getState());
	availablePhones.innerHTML = store.getState().phones;
});
