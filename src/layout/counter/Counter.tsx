import {Button} from "../../Components/Button/Button.tsx";
import {Display} from "../display/Display.tsx";
import "./counter.css"
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {incrementAC, resetAC} from "../../model/counter-reducer.ts";

export const Counter = () => {
    const data = useAppSelector(selectCounter)
    const {stateError, stateSet} = data;

    const dispatch = useAppDispatch()

    const onClickHandlerCounter = () => {
        dispatch(incrementAC())
    }

    const onClickHandlerReset = () => {
        dispatch(resetAC())
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
