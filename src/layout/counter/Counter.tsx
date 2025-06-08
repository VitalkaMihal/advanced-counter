import {useState} from "react";
import {Button} from "../../Components/Button/Button.tsx";
import {Display} from "../display/Display.tsx";

export const Counter = () => {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState(0)

    const onClickHandlerCounter = () => {
        setCount(count + 1)
    }

    const onClickHandlerReset = () => {
        setCount(start)
    }

    return (
        <>
            <Display title={count}/>
            <Button title="inc" onClick={onClickHandlerCounter}/>
            <Button title="reset" onClick={onClickHandlerReset}/>
        </>
    );
};
