import type { Input } from '@type/form.type'

export const inputs: Input[] = [
	{
		type: 'text',
		name: 'name',
		placeholder: 'Name',
	},
	{
		type: 'number',
		name: 'phone',
		placeholder: 'Phone number',
	},
	{
		type: 'email',
		name: 'email',
		placeholder: 'Email',
		required: true,
	},
]
