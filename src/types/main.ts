export interface MainState {
    loader: boolean;
    addresses: string[];
    mnemonics: string[];
    counter: number;
}

export enum MainActionTypes {
    SET_LOADER = 'SET_LOADER',
    SET_ADDRESSES = 'SET_ADDRESSES',
    SET_MNEMONICS = 'SET_MNEMONICS',
    INCREASE_COUNTER = 'INCREASE_COUNTER'
} 
interface SetLoaderAction {
    type: MainActionTypes.SET_LOADER;
    payload: boolean;
}
interface SetAddressesAction {
    type: MainActionTypes.SET_ADDRESSES;
    payload: string[];
}
interface SetMnemonicsAction {
    type: MainActionTypes.SET_MNEMONICS;
    payload: string[];
}
interface IncreaseCounterAction {
    type: MainActionTypes.INCREASE_COUNTER;
    payload: number;
}

export type MainAction = 
    SetLoaderAction |
    SetAddressesAction |
    SetMnemonicsAction |
    IncreaseCounterAction;
    