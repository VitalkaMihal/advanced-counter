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
    }  ,[valueInput])

    return (
        <>
        <input type="number"
               value={valueInput}
               onChange={onChangeHandler}
               className={error ? 'error' : ''}
        />
            {error && <span className="error">should be more 0</span>}
        </>
    );
};
