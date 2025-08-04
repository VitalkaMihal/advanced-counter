
export type DataType = {
    startValue: number
    maxValue: number
    value: number
    stateError: boolean
    stateSet: boolean
    stateIncorrect: boolean
}

const initialState: DataType = {
    startValue: 0,
    maxValue: 5,
    value: 0,
    stateError: false,
    stateSet: false,
    stateIncorrect: false,
};



export const counterReducer = (state: DataType = initialState, action: any): DataType => {
    switch (action.type) {
        case 'increment':
            return {...state, value: state.value < state.maxValue ? state.value + 1 : state.value};
        case 'setStateError':
            return {...state, stateError: true}
        case 'resetCounter':
            return {...state, value: state.startValue, stateError: false}
        case 'set': {
            return {...state, maxValue: action.maxValue, startValue: action.startValue, value: action.startValue}
        }
        case 'stateIncorrect':
            return {...state, stateIncorrect: action.stateIncorrect}
        default:
            return state;
    }
}