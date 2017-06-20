import credit from '../data/credit';

const creditReducer = (state = credit, action) => {
    return state;
};

export default creditReducer;

export const getNoCreditIds = state => state.filter(entry => entry < 0).sort((a,b) => a - b);