export default (state, { type, payload }) => {
    if (type == "ADD_TO_CART") {
        return {
            ...state,
            [payload.id]: payload.data,
        };
    } else if (type == "DELETE_FROM_CART") {
        delete state[payload.id];
        return state;
    } else return state;
};
