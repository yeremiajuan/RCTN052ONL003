
const initialState = {
    movies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH MOVIES":
            return {
                ...state,
                movies: action.payload
            }
        case "FETCH MOVIES BY SEARCH":
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
