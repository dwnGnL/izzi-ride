import type { FC, SyntheticEvent } from 'react'
import type { Form as TForm, Input } from '@type/form.type'

import { useAppDispatch } from '@hooks/store'
import { openAlert } from '@store/alert/slice'

import Select from '@common/select/select'
import Button from '@common/button/button'

import styles from './form.module.css'

const Form: FC<TForm> = ({ endpoint, inputs, buttonText, className, children }) => {
    const alertDispatch = useAppDispatch()

    async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData)

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) throw new Error('whoops')

            alertDispatch(openAlert('Successfully sent!'))
        } catch {
            alertDispatch(openAlert('Something went wrong.\n Please try again later!'))
        }
    }

    return (
        <form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
            <div>
                {inputs.map(input => (
                    <Field
                        key={input.name}
                        type={input.type}
                        name={input.name}
                        title={input.title}
                        placeholder={input.placeholder}
                        options={input.options}
                        required={input.required}
                    />
                ))}

                {children ?? children}
            </div>

            <Button title={buttonText} type='submit' className={styles.submit_btn} />
        </form>
    )
}

const Field: FC<Input> = ({ type, name, title, placeholder, required, options }) => {
    const fieldTitle = required ? `${title} (required)` : title
    let field = null

    if (type === 'select' && options) {
        field = <Select type={type} id={name} name={name} title={title} options={options} />
    } else if (type === 'textarea') {
        field = <textarea id={name} name={name} required={required} placeholder={placeholder}></textarea>
    } else {
        field = <input id={name} type={type} name={name} required={required} placeholder={placeholder} />
    }

    return (
        <div className={styles.label}>
            <div className={styles.field_title}>
                <label htmlFor={name}>{fieldTitle}</label>
            </div>
            {field}
        </div>
    )
}

export default Form
