import React from 'react';
import './Counter.css';
import s from './Counter.module.css'

export type PropsType = {
	counter: number,
	maxcounter: number
}

export function Counter(props: PropsType) {

	/* 	const addcCounter = () => {
			if (props.counter === 5) {
				return
			}
			props.addcCounter();
	
		}
		const resetCounter = () => {
			props.resetCounter();
	
		} */
	return <div className={s.counter}>
		<div className={props.counter >= props.maxcounter ? s.error : s.h1}>{props.counter}</div>
	</div>


}