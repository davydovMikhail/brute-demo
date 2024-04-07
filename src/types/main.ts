export interface MainState {
    loader: boolean;
}

export enum MainActionTypes {
    SET_LOADER = 'SET_LOADER'
} 
interface SetLoaderAction {
    type: MainActionTypes.SET_LOADER;
    payload: boolean;
}

export type MainAction = 
    SetLoaderAction ;
    