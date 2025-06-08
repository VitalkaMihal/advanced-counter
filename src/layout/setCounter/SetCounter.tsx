import {Button} from "../../Components/Button/Button.tsx";
import {InputData} from "../../Components/InputData/InputData.tsx";
import {useEffect, useRef, useState} from "react";
import type {DataType} from "../../App.tsx";

type setCounterProps = {
    startValue: number
    maxValue: number
    getStartValue: (e: number) => void
    getMaxValue: (e: number) => void
    setDataCounter: (e: DataType) => void
}

export const SetCounter = ({startValue, maxValue, getStartValue, getMaxValue, setDataCounter}: setCounterProps) => {

    const [disabled, setDisabled] = useState<boolean>(true);
    const isFirstRender = useRef(0);

    useEffect(() => {
        if(isFirstRender.current <= 2){
            isFirstRender.current++;
            return;
        }
        setDisabled(false)
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
            setDisabled(true)
        }
    }, [startValue, maxValue])

    const onChangeHandlerStart = (e: number) => {
        getStartValue(e)
    }

    const onChangeHandlerMax = (e: number) => {
        getMaxValue(e)
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
            <Button title="set" onClick={onClickSetHandler} disabled={disabled}/>
        </div>
    );
};

