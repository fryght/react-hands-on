const searchFilterReducer = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default searchFilterReducer;