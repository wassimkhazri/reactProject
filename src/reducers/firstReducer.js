const initState = {
    x: 0
}

const reducer = (state = initState, action) => {
    if (action.type === "INCREMENT") {
        return { x: state.x + 1 }
    }
    else if (action.type === "DECREMENT") {
        return { x: state.x - 1 }
    }
     else {
        return state 
    }

}

export default reducer;