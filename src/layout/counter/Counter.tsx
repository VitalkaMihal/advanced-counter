import {Button} from "../../Components/Button/Button.tsx";
import {Display} from "../display/Display.tsx";
import "./counter.css"

type CounterProps = {
    value: number
    stateError: boolean
    stateSet: boolean
    stateIncorrect: boolean
    counterHandler: () => void
    resetCounter: () => void;
}


export const Counter = (
    {stateError, value, stateSet, stateIncorrect, counterHandler, resetCounter}: CounterProps) => {

    const onClickHandlerCounter = () => {
        counterHandler()
    }

    const onClickHandlerReset = () => {
        resetCounter()
    }

    return (
        <div className="counter">
            <div className="counter-display">
                <Display
                    title={stateSet ? stateIncorrect ? "Incorrect value!" : "enter values and press 'set'" : value}
                    error={stateError || stateIncorrect}/>
            </div>
            <div className="counter-counter-button">
                <Button title="inc" onClick={onClickHandlerCounter} disabled={stateError || stateSet}/>
                <Button title="reset" onClick={onClickHandlerReset} disabled={stateSet}/>
            </div>
        </div>
    );
};
