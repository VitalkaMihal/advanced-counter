import {Button} from "../../Components/Button/Button.tsx";
import {InputData} from "../../Components/InputData/InputData.tsx";
import {useEffect, useRef, useState} from "react";
import "./setCounter.css"
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";

export const SetCounter = () => {
    const data = useAppSelector(selectCounter)
    const {startValue, maxValue} = data;

    useEffect(() => {
            if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
                dispatch({type: 'stateIncorrect', stateIncorrect: true})}
            else{ dispatch({type: 'stateIncorrect', stateIncorrect: false})}},
        [maxValue, startValue])

    const dispatch = useAppDispatch()

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
        dispatch({type: 'startValue', startValue: e})
    }

    const onChangeHandlerMax = (e: number) => {
        dispatch({type: 'maxValue', maxValue: e})
    }

    const onClickSetHandler = () => {

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

