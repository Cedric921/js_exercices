const BUY_PHONE = 'BUY_PHONE';
const BUY_TAB = 'BUY_TAB';
const BUY_TV = 'BUY_TV';

const buyPhone = () => {
	// Action
	return {
		type: BUY_PHONE,
	};
};
const buyTab = () => {
	// Action
	return {
		type: BUY_TAB,
	};
};
const buyTv = () => {
	// Action
	return {
		type: BUY_TV,
	};
};

// Reducer
// _______

// init states
const initialState = {
	phones: 5,
	tablettes: 10,
	tv: 2,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return { ...state, phones: state.phones - 1 };
		case BUY_TAB:
			return { ...state, tablettes: state.tablettes - 1 };
		case BUY_TV:
			return { ...state, tv: state.tv - 1 };

		default:
			return state;
	}
};

// reductStore contient nos states

// getState pour recuperer la data
// dispatch effectuer une action

//  attacher le store au reducer
// _____________________________

const store = Redux.createStore(reducer);

const availablePhones = document.querySelector('#count-phone');
availablePhones.innerHTML = store.getState().phones;

const availableTablettes = document.querySelector('#count-tab');
availableTablettes.innerHTML = store.getState().tablettes;

const availableTv = document.querySelector('#count-tv');
availableTv.innerHTML = store.getState().tv;

//dispacther les actions
// _____________________

document.querySelector('#buy-phone').addEventListener('click', () => {
	//permettre de modifier un state via l'action se trouvant dans buyPhone
	store.dispatch(buyPhone());
	// store.dispatch({ type: BUY_PHONE });  //alternative
});
document.querySelector('#buy-tab').addEventListener('click', () => {
	//permettre de modifier un state via l'action se trouvant dans buyPhone
	store.dispatch(buyTab());
	// store.dispatch({ type: BUY_TAB }); //alternative
});
document.querySelector('#buy-tv').addEventListener('click', () => {
	//permettre de modifier un state via l'action se trouvant dans buyPhone
	store.dispatch(buyTv());
	// store.dispatch({ type: BUY_TV }); //alternative
});

//ecouter si le state a ete modifier et update le dom
// _________________________________
store.subscribe(() => {
	availablePhones.innerHTML = store.getState().phones;
	availableTablettes.innerHTML = store.getState().tablettes;
	availableTv.innerHTML = store.getState().tv;
});
