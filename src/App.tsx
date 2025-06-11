import {SetCounter} from "./layout/setCounter/SetCounter.tsx";
import {Counter} from "./layout/counter/Counter.tsx";
import {useEffect, useState} from "react";
import "./App.css"

export type DataType = {
    startValue: number
    maxValue: number
    value: number
    stateError: boolean
    stateSet: boolean
    stateIncorrect: boolean
}

export function App() {

    const [data, setData] = useState<DataType>({
        startValue: 0,
        maxValue: 5,
        value: 0,
        stateError: false,
        stateSet: false,
        stateIncorrect: false,
    });

    const {startValue, maxValue, value, stateError, stateSet, stateIncorrect} = data;

    useEffect(() => {
            if (value >= maxValue) {
                setData({...data, stateError: true})}},
        [value])

    useEffect(() => {
            if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
                setData({...data, stateIncorrect: true})}
        else{setData({...data, stateIncorrect: false})}},
        [maxValue, startValue])

    const counterHandler = () => {
        setData({...data, value: value + 1})
    }
    const setDataCounter = (e: DataType) => {
        setData(e)
        localStorage.setItem('user', JSON.stringify(e))
    }

    const resetCounter = () => {
        setData({...data, value: startValue, stateError: false})
    }

    const getStartValue = (e: number) => {
        setData({...data, stateSet: true, stateError: false, startValue: e})
    }
    const getMaxValue = (e: number) => {
        setData({...data, stateSet: true, stateError: false, maxValue: e})
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setData(JSON.parse(storedUser));
            } catch (e) {
                console.error('Ошибка парсинга JSON:', e);
            }
        }
    }, []);

    return (
        <div className="App">
            <Counter
                value={value}
                stateError={stateError}
                stateSet={stateSet}
                counterHandler={counterHandler}
                resetCounter={resetCounter}
                stateIncorrect={stateIncorrect}/>
            <SetCounter
                startValue={startValue}
                maxValue={maxValue}
                getStartValue={getStartValue}
                getMaxValue={getMaxValue}
                setDataCounter={setDataCounter}/>
        </div>
    )
}

