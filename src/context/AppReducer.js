export default (state, { type, payload }) => {
    if (type == "ADD_TO_CART") {
        return {
            ...state,
            [payload.id]: payload.data,
        };
    } else if (type == "DELETE_FROM_CART") {
        console.log(state)
        delete state[payload.id]; 
        
        return state;
        // return {...Object.keys(state).filter((e) => e != payload.id).map(e=>state[e])};
    } else return state;
};
