import React, { ChangeEvent } from 'react'
type InputType = {
	callBack: (value: number) => void,
	type: string,
	value: number,
}

export const Input = (props: InputType) => {

	

	const onCkickHandler = (e: ChangeEvent<HTMLInputElement>) => {
		//let newIsDoneValue = e.currentTarget.value;
		props.callBack(parseInt(e.currentTarget.value))
	}
	return (
		<input 
			type={props.type}
			onChange={onCkickHandler}
			value={props.value} 
			/>

	)
}