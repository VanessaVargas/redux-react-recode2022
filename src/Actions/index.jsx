import { CLIQUE_UPDATE_VALOR } from "./actionTypes";

//criação da Action Creator (função)
export const cliqueButton = (value) => ({
    type: CLIQUE_UPDATE_VALOR,
    newValue: value,
})