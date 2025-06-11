import {Button} from "../../Components/Button/Button.tsx";
import {InputData} from "../../Components/InputData/InputData.tsx";
import {useEffect, useRef, useState} from "react";
import type {DataType} from "../../App.tsx";
import "./setCounter.css"

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
        if (isFirstRender.current <= 2) {
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
        <div className="setCounter">
            <div className="setCounter-container">
                <div className="setCounter-input"> start value:<InputData value={startValue} onChange={onChangeHandlerStart}/></div>
                <div className="setCounter-input">max value:<InputData value={maxValue} onChange={onChangeHandlerMax}/></div>
            </div>

            <Button className="setCounter-button" title="set" onClick={onClickSetHandler} disabled={disabled}/>
        </div>
    );
};

