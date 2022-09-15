import { CLIQUE_UPDATE_VALOR } from "../Actions/actionTypes";

const initialState = {
    newValue: " ",
};

export const cliqueReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIQUE_UPDATE_VALOR:
            return {
                //para preservar a o restante do estado
                ...state,
                newValue: action.newValue,
            }
        
        default:
            return state;
    }
}
