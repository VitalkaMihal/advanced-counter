import {Button} from "../../Components/Button/Button.tsx";
import {Display} from "../display/Display.tsx";
import "./counter.css"
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {incrementAC} from "../../model/counter-reducer.ts";

export const Counter = () => {
    const data = useAppSelector(selectCounter)
    const {maxValue, value, stateError, stateSet} = data;

    const dispatch = useAppDispatch()

    useEffect(() => {
            if (value >= maxValue) {
                dispatch({type: 'setStateError'})}},
        [value])



    const onClickHandlerCounter = () => {
        dispatch(incrementAC())
    }

    const onClickHandlerReset = () => {
        dispatch({type: 'resetCounter'})
    }
    return (
        <div className="counter">
            <div className="counter-display">
                <Display/>
            </div>
            <div className="counter-counter-button">
                <Button title="inc" onClick={onClickHandlerCounter} disabled={stateError || stateSet}/>
                <Button title="reset" onClick={onClickHandlerReset} disabled={stateSet}/>
            </div>
        </div>
    );
};
