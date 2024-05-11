import { MainState, MainAction, MainActionTypes } from "../../types/main"

const initialState: MainState = {
    loader: false,
    mnemonics: ['kid script peace patch eternal hobby chimney lady return return embody tower', 
                'potato citizen swarm desert brief truck spoon unable phone note false latin', 
                'live just deer what post plug will top negative dynamic hope purity', 
                'armor taste move income gaze glimpse veteran spawn witness beyond assume develop', 
                'gorilla side prepare poem attack fit permit crime twin pill mix banner', 
                'fever labor abandon rabbit pride credit glow best travel spread method unhappy', 
                'asthma jelly mosquito unfold island frost sign pitch hold genius use turtle', 
                'know pupil resist cruise robust tooth keep deputy cradle tape violin shrimp', 
                'opera huge powder asset science napkin hello industry duty cool catalog object', 
                'situate cover boat update mixture simple width water sell gather actress magic', 
                'until immune away piano document legal recycle damp dutch wink leopard bring', 
                'pulp seat wedding choose enemy rare hand health rent fish fashion alter', 
                'kiwi cute street moral destroy oval lucky gaze eight rocket example tail', 
                'race celery cactus expect drift replace defense loyal shuffle model pudding proud', 
                'inject sunny dynamic spirit skill aunt fire own fuel giraffe sunny despair', 
                'area parent relief rule kiss canyon where hamster chief whip easy million', 
                'anchor make vicious stumble cigar walnut tape taxi index health antenna onion', 
                'search main dizzy diamond model point disease tomorrow engage fatigue opinion razor', 
                'captain add dentist laugh effort anger exclude correct salad acoustic pottery marriage', 
                'cash action search lounge air tunnel wet art nature action hybrid smile'],
    addresses: ['0xf27c994385287094eA61f17C51391f19d84a82e3', 
                '0x9a3E70303f68dA2624Da5db3a92F508003d103D5', 
                '0xcb848Fa71Ed53713C62fef5AdB8592E0fA43877e', 
                '0xb8B8f474057016De8Ed7fA11D10f6f8Ef7Fe3f9A', 
                '0xcF72E795b3e910079298f6C0ce14A31e6FE697A2', 
                '0xeA27AaFCd97A942DDdaCE0911647EA4e68a34571', 
                '0xd3356586A88bB9FEdF9c5111776936BBA685C479', 
                '0x1cE3b935eaC9cBbb70e06762265Aff84B8537e5a', 
                '0x8A5c1811d7d31C36E38cBd7e75B1CcD0e2c4d6B5', 
                '0xA2dc6611A6AE965c942AAe62D781B9eAae367496', 
                '0xcCE088F054EE69343F1575678cf37B31B4047236', 
                '0xe1de978D61cdDE95a7042Cb6669EFAB61828EE29', 
                '0x215473d26167EBa6754e1bC26AA2c87F92e8e23c', 
                '0x21aE65c0948084d3B791C5d9742eaEaADC06F157', 
                '0x378b704bC0dcA7c882F5EdE91d573DEd784a31F1', 
                '0xBdB54314c3d4aAC3F34288891D90B0Cec73384C4', 
                '0x032e911E43CfAfbB505fe0FAb9003AE428f3f859', 
                '0xB9E9c9a93136a78b8d35f5CAB4A0aa51AF9b6901', 
                '0x80e14F1424Ef5826399802BD5c7452bc2B488529', 
                '0xFCbd27D55d98c4723CAaF0eD5c1FA1200d06fD00'],
    counter: 0
}

export const mainReducer = (state: MainState = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.SET_LOADER:
            return {...state, loader: action.payload}
        case MainActionTypes.SET_ADDRESSES:
            return {...state, addresses: action.payload}
        case MainActionTypes.SET_MNEMONICS:
            return {...state, mnemonics: action.payload}
        case MainActionTypes.INCREASE_COUNTER:
            return {...state, counter: state.counter + action.payload}
        default:
            return state
    }
}