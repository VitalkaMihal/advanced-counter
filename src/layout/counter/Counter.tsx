import {Button} from "../../Components/Button/Button.tsx";
import {Display} from "../display/Display.tsx";

type CounterProps = {
    value: number
    stateError: boolean
    counterHandler: () => void
    resetCounter: () => void;
}


export const Counter = ({stateError, value, counterHandler, resetCounter}: CounterProps) => {

    const onClickHandlerCounter = () => {
        counterHandler()
    }

    const onClickHandlerReset = () => {
        resetCounter()
    }

    return (
        <>
            <Display title={value} error={stateError}/>
            <Button title="inc" onClick={onClickHandlerCounter} disabled={stateError}/>
            <Button title="reset" onClick={onClickHandlerReset}/>
        </>
    );
};
