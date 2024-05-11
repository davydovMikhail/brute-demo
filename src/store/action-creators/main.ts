import { MainAction, MainActionTypes } from "../../types/main";

export function SetLoader(loader: boolean): MainAction {
    return {type: MainActionTypes.SET_LOADER, payload: loader}
}
export function SetAddresses(addresses: string[]): MainAction {
    return {type: MainActionTypes.SET_ADDRESSES, payload: addresses}
}
export function SetMnemonics(mnemonics: string[]): MainAction {
    return {type: MainActionTypes.SET_MNEMONICS, payload: mnemonics}
}
export function IncreaseCounter(count: number): MainAction {
    return {type: MainActionTypes.INCREASE_COUNTER, payload: count}
}