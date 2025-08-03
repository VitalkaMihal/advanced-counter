import "./styles.css"
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counter-selectors.ts";


export const Display = () => {
    const data = useAppSelector(selectCounter)
console.log(data)

    return (
        <div className={data.stateError ? "error" : undefined}>
            {data.stateSet ? data.stateIncorrect ? "Incorrect value!" : "enter values and press 'set'" : data.value}
        </div>
    );
};
