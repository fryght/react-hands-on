import lunch from '../data/lunch';

const lunchReducer = (state = lunch, action) => {
    const {type, lunchDate, id} = action;
    switch(type) {
        case 'TOGGLE_LUNCH_DATE':
            const dateSet = state.get(parseInt(id, 10));
            let newDateSet = new Set();
            if (dateSet.has(lunchDate)) {
                newDateSet = dateSet.delete(lunchDate);
            } else {
                newDateSet = dateSet.add(lunchDate);
            }
            const newState = state.set(id, newDateSet);
            return newState;
        default:
            return state;
    }
};

export default lunchReducer;
