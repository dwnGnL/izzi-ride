import { HTMLInputTypeAttribute, ReactNode } from 'react'

export type Form = {
    endpoint: string
    inputs: Input[]
    buttonText: string
    className?: string
    children?: ReactNode
}

export type Input = {
	type: HTMLInputTypeAttribute
	placeholder: string
	name: string
    required?: boolean
}
