import {Button} from "../../Components/Button/Button.tsx";
import {InputData} from "../../Components/InputData/InputData.tsx";
import {useEffect, useState} from "react";
import type {DataType} from "../../App.tsx";

type setCounterProps = {
    startValue: number
    maxValue: number
    getStartValue: (e: number) => void
    getMaxValue: (e: number) => void
    setDataCounter: (e: DataType) => void
}

export const SetCounter = ({startValue, maxValue, getStartValue, getMaxValue, setDataCounter}: setCounterProps) => {

    const [error, setError] = useState(false)
    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }, [startValue, maxValue])

    const onChangeHandlerStart = (e: number) => {
        getStartValue(e)
        setDisabled(false)
    }

    const onChangeHandlerMax = (e: number) => {
        getMaxValue(e)
        setDisabled(false)
    }

    const onClickSetHandler = () => {
        setDataCounter({
            startValue: startValue,
            maxValue: maxValue,
            value: startValue,
            stateError: false,
            stateSet: false,
            stateIncorrect: false,
        })
        setDisabled(true)
    }

    return (
        <div>
            start value:<InputData value={startValue} onChange={onChangeHandlerStart}/>
            max value:<InputData value={maxValue} onChange={onChangeHandlerMax}/>
            <Button title="set" onClick={onClickSetHandler} disabled={error || disabled}/>
        </div>
    );
};

