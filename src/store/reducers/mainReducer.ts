import { MainState, MainAction, MainActionTypes } from "../../types/main"

const initialState: MainState = {
    loader: false
}

export const mainReducer = (state: MainState = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.SET_LOADER:
            return {...state, loader: action.payload}
        default:
            return state
    }
}