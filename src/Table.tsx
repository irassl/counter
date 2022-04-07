import React from 'react';
import s from './Counter.module.css'
import { Button } from './component/Button';

type PropsTypeTable = {
	counter: number,
	maxcounter: number,
	addCounter: () => void,
	resetCounter: () => void

}

export function Table(props: PropsTypeTable) {

	const addCounter = () => {
		if (props.counter === props.maxcounter) {
			return
		}
		props.addCounter();

	}
	const resetCounter = () => {
		props.resetCounter();

	}

	return <div className={s.table}>
		<Button  name={'icr'} callBack={addCounter} counter={props.counter} disabled={props.counter === props.maxcounter} />
		<Button name={'reset'} callBack={resetCounter} counter={props.counter} disabled={props.counter <= 0} />
	</div>
}