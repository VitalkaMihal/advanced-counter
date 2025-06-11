import {type ChangeEvent, useEffect, useState} from "react";
import "./inputData.css"

type InputDataProps = {
    value: number
    onChange: (e:number) => void
}

export const InputData = ({value, onChange}: InputDataProps) => {

    const [valueInput, setValueInput] = useState(value)
    const [error, setError] = useState(false)


 const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(+e.currentTarget.value)
 }
    useEffect(() => {
        onChange(valueInput)
        if(valueInput < 0){
            setError(true)
        }else{setError(false)}
    }  , [valueInput])

    return (
        <div className="inputData">
        <input type="number"
               value={value}
               onChange={onChangeHandler}
               className={error ? 'inputError inputColor' : ''}
        />
         {error && <div className="inputError">should be more 0</div>}
        </div>
    );
};
