import {Button} from "../../Components/Button/Button.tsx";
import {InputData} from "../../Components/InputData/InputData.tsx";
import {useEffect, useState} from "react";
import type {DataType} from "../../App.tsx";

type setCounterProps = {
    startValue: number
    maxValue: number
    // getMaxValue: (e: number) => void
    // getStartValue: (e: number) => void
    setDataCounter: (e: DataType) => void
}

export const SetCounter = ({startValue, maxValue, setDataCounter}: setCounterProps) => {

    const [startValueInput, setStartValueInput] = useState(startValue);
    const [maxValueInput, setMaxValueInput] = useState(maxValue);
    const [error, setError] = useState(false)

    useEffect(() => {
        if (startValueInput < 0 || maxValueInput < 0 || startValueInput >= maxValueInput) {
            setError(true)
        } else {
            setError(false)
        }
    }, [startValueInput, maxValueInput])

    const onChangeHandlerStart = (e: number) => {
        setStartValueInput(e)
    }

    const onChangeHandlerMax = (e: number) => {
        setMaxValueInput(e)
    }

    const onClickSetHandler = () => {
        setDataCounter({
            startValue: startValueInput,
            maxValue: maxValueInput,
            value: startValueInput,
            stateError: false
        })
    }

    return (
        <div>
            start value:<InputData value={startValueInput} onChange={onChangeHandlerStart}/>
            max value:<InputData value={maxValueInput} onChange={onChangeHandlerMax}/>
            <Button title="set" onClick={onClickSetHandler} disabled={error}/>
        </div>
    );
};

