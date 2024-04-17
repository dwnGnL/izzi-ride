import type { Input } from '@type/form.type'

export const inputs: Input[] = [
    {
        type: 'text',
        name: 'name',
        title: 'Name',
        placeholder: 'John Doe',
        required: true,
    },
    {
        type: 'email',
        name: 'email',
        title: 'Email',
        placeholder: 'youtemail@gmail.com',
        required: true,
    },
    {
        type: 'number',
        name: 'phone',
        title: 'Phone number',
        placeholder: '+15323425343',
    },
    {
        type: 'select',
        name: 'subject',
        title: 'Subject',
        required: true,
        options: ['Join the Beta', 'Bug', 'Advertising', 'Suggest'],
    },
    {
        type: 'textarea',
        name: 'message',
        title: 'Message',
        placeholder: 'Write you message here',
    },
]
