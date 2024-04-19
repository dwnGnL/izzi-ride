import { HTMLInputTypeAttribute, ReactNode } from 'react'

export type InputTypeField = HTMLInputTypeAttribute | 'select' | 'textarea'

export type Form = {
    endpoint: string
    inputs: Input[]
    buttonText: string
    className?: string
    children?: ReactNode
}

export type Input = {
	type: InputTypeField
	title: string
	placeholder?: string
	name: string
    required?: boolean
    options?: string[]
}
