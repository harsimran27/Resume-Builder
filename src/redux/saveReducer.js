let initialState = {
    loading: null,
    err: null,
    id: "",
}

export const saveReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SAVE_CREATOR":
            return {
                ...state,
                loading: true
            };

        case "ERR_CREATOR":
            return {
                ...state,
                loading: false,
                err: action.payload
            }

        case "COMPLETE_CREATOR":
            return {
                ...state,
                loading: false,
                id: action.payload
            };

        default:
            return state;
    }
}