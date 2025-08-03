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
        }
    }, [startValueLocal, maxValueLocal])

    const onChangeHandlerStart = (e: number) => {
        console.log('1')
        setStartValueLocal(e)
    }

    const onChangeHandlerMax = (e: number) => {
        setMaxValueLocal(e)
        console.log('2')
    }

    const onClickSetHandler = () => {
        dispatch({type: 'set', maxValue: maxValueLocal, startValue: startValueLocal})
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

