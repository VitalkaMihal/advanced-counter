import {Button} from "../../Components/Button/Button.tsx";
import {InputData} from "../../Components/InputData/InputData.tsx";
import {useEffect, useRef, useState} from "react";
import "./setCounter.css"
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {setCounterAC, setErrorAC, setIncorrectAC, setIsActiveAC} from "../../model/counter-reducer.ts";

export const SetCounter = () => {
    const data = useAppSelector(selectCounter)
    const {startValue, maxValue} = data;
    const [startValueLocal, setStartValueLocal] = useState<number>(startValue);
    const [maxValueLocal, setMaxValueLocal] = useState<number>(maxValue);

    useEffect(() => {
            if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
                dispatch({type: 'stateIncorrect', stateIncorrect: true})}
            else{ dispatch({type: 'stateIncorrect', stateIncorrect: false})}},
        [maxValue, startValue])

    const dispatch = useAppDispatch()

    const [disabled, setDisabled] = useState<boolean>(true);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setDisabled(false)
        if (startValueLocal < 0 || maxValueLocal < 0 || startValueLocal >= maxValueLocal) {
            setDisabled(true)
            dispatch(setIncorrectAC({incorrect: true}))
            dispatch(setErrorAC({stateError: true}))
        }else{
            dispatch(setIncorrectAC({incorrect: false}))
            dispatch(setErrorAC({stateError: false}))
            dispatch(setIsActiveAC({isActive: true}))
        }
    }, [startValueLocal, maxValueLocal])

    const onChangeHandlerStart = (e: number) => {
        setStartValueLocal(e)
    }

    const onChangeHandlerMax = (e: number) => {
        setMaxValueLocal(e)
    }

    const onClickSetHandler = () => {
        dispatch(setCounterAC({startValue: startValueLocal, maxValue: maxValueLocal}))
        setDisabled(true)
    }

    return (
        <div className="setCounter">
            <div className="setCounter-container">
                <div className="setCounter-input"> start value:<InputData value={startValueLocal} onChange={onChangeHandlerStart}/></div>
                <div className="setCounter-input">max value:<InputData value={maxValueLocal} onChange={onChangeHandlerMax}/></div>
            </div>

            <Button className="setCounter-button" title="set" onClick={onClickSetHandler} disabled={disabled}/>
        </div>
    );
};

