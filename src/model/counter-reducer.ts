import {createAction, createReducer} from "@reduxjs/toolkit";

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

export const incrementAC = createAction('counter/incrementCounter');
export const resetAC = createAction('counter/resetCounter');
export const setCounterAC = createAction<{ startValue: number, maxValue: number }>('counter/setCounter');
export const setIsActiveAC = createAction<{isActive: boolean}>('counter/setIsActive');
export const setIncorrectAC = createAction<{incorrect: boolean}>('counter/setIncorrect');
export const setErrorAC = createAction<{stateError: boolean}>('counter/setError');

export const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(incrementAC, (state) => {
        if (state.value < state.maxValue) {
            state.value++
        }
        if (state.value === state.maxValue) {
            state.stateError = true
        }
    })
        .addCase(resetAC, (state) => {
            state.value = state.startValue
            state.stateError = false
        })
        .addCase(setCounterAC, (state, action) => {
            if (action.payload.startValue < action.payload.maxValue && action.payload.startValue >= 0 && action.payload.maxValue > 0) {
                state.startValue = action.payload.startValue
                state.value = action.payload.startValue
                state.maxValue = action.payload.maxValue
                state.stateSet = false
            }
        })
        .addCase(setIsActiveAC, (state, action) => {
            state.stateSet = action.payload.isActive
        })
        .addCase(setIncorrectAC, (state, action) => {
            state.stateIncorrect = action.payload.incorrect
        })
        .addCase(setErrorAC, (state, action) => {
            state.stateError = action.payload.stateError
        })
})
