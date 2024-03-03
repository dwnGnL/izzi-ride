import type { FC, FormEvent } from 'react'
import type { Form, Input } from '@type/form.type'

import Button from '@common/button/button'

import styles from './form.module.css'

const Form: FC<Form> = ({ endpoint, inputs, buttonText, className, children }) => {
	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const body = Object.fromEntries(formData)

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				body: JSON.stringify(body),
			})

			if (!response.ok) throw new Error('ooops')

			const data = await response.json()

			console.log(data)
		} catch (err: any) {
			console.log(err)
		}
	}

	return (
		<form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
			<div>
				{inputs.map(input => (
					<Input
						key={input.name}
						type={input.type}
						name={input.name}
						placeholder={input.placeholder}
						required={input.required}
					/>
				))}

				{children && children}
			</div>
			
			<Button title={buttonText} type='submit' className={styles.submit_btn} />
		</form>
	)
}

const Input: FC<Input> = ({ type, name, placeholder, required }) => {
	const placeholderText = required ? `${placeholder}*` : placeholder

	return (
		<label>
			<div className={styles.placeholder}>{placeholderText}</div>
			<input type={type} name={name} required={required} />
		</label>
	)
}

export default Form
