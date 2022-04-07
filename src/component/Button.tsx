import React from 'react'
import s from '../Counter.module.css'
type ButtonType = {
	name: string,
	callBack: () => void,

	disabled: boolean

}

export const Button = (props: ButtonType) => {

	const onCkickHandler = () => {
		props.callBack()
	}
	return (
		<button className={s.btn}
			disabled={props.disabled}
			onClick={onCkickHandler}> {props.name} </button>

	)
}