import {SetCounter} from "./layout/setCounter/SetCounter.tsx";
import {Counter} from "./layout/counter/Counter.tsx";
import {useEffect, useState} from "react";

export type DataType = {
    startValue: number
    maxValue: number
    value: number
    stateError: boolean
}

export function App() {

    const [data, setData] = useState<DataType>({
        startValue: 0,
        maxValue: 0,
        value: 0,
        stateError: false,
    });

    const {startValue, maxValue, value, stateError} = data;

    // const getStartValue = (e: number) => {
    //     setData({...data, startValue: e})
    // }
    //
    // const getMaxValue = (e: number) => {
    //     setData({...data, maxValue: e})
    //
    // }

    useEffect(() => {
        if(value >= maxValue){setData({...data, stateError: true})}},
        [value])

    const counterHandler = () => {
        setData({...data, value: value + 1})
    }
    const setDataCounter = (e: DataType) => {
        setData(e)
    }

    const resetCounter = () => {
        setData({...data, value: startValue, stateError: false})
    }

    return (
        <>
            <Counter
                value={value}
                stateError={stateError}
                counterHandler={counterHandler}
                resetCounter={resetCounter}/>
            <SetCounter startValue={startValue}
                        maxValue={maxValue}
                // getMaxValue={getMaxValue}
                // getStartValue={getStartValue}
                        setDataCounter={setDataCounter}/>
        </>
    )
}

