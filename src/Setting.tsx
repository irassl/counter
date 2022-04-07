import React from "react";
import { Button } from "./component/Button";
import { Input } from "./component/Input";
import s from './Counter.module.css'


type PropsTypeSettings = {
    minCounter: number,
    maxCounter: number,
    setSettings: () => void,
    setCounter: (value:number)=> void,
    setMaxCounter: (value:number)=> void
  

}
export function Settings(props: PropsTypeSettings) {

    const setValue=()=>{

        props.setSettings()
    }


    return <>
        <div className={s.counter}>
            {/* <div className={s.input}> max value: <input type="number" onChange={onChangeHandlerMaxCounter} value={props.counter}/></div> */}
            <div className={s.input}> max value: <Input type="number" callBack={props.setMaxCounter} 
            value={props.maxCounter} /></div>

            <div className={s.input}> start value: <Input type="number"  callBack={props.setCounter} value={props.minCounter}  /></div>

        </div>
        <div className={s.table}>
            <Button callBack={setValue} name={'set'} counter={props.minCounter} disabled={false} />
        </div>
    </>

}