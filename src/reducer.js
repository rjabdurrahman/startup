const reducer = function (state = {}, { type, payload }) {
    if (type === 'CLICK_ON_REGISTER') {
        return {
            ...state,
            showRegister: true
        }
    }
    return state;
}

export default reducer;