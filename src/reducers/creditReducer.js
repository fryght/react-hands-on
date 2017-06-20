import credit from '../data/credit';

const creditReducer = (state = credit, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return state.set(action.id, [...state.get(action.id), action.payment]);
        default:
            return state;
    }
};

export default creditReducer;
