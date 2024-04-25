import type { Feature } from './features'

import review from '@public/icons/reviews-icon.svg'
import chat from '@public/icons/chat-icon.svg'
import trip from '@public/icons/trip-icon.svg'
import payment from '@public/icons/payment-icon.svg'
import start from '@public/icons/stars-icon.png'

export const featureList: Feature[] = [
    {
        icon: start,
        title: 'Ai tehnologies',
        copy: 'AI technologies will be used for Predicting travel prices and personalizing recommendations Real-time travel optimization and assistance Enhancing travel safety and security',
    },
    {
        icon: review,
        title: 'Reviews',
        copy: 'You will be able to leave reviews and read reviews from other users about our application',
    },
    {
        icon: chat,
        title: 'Safely trip',
        copy: 'Safety of App is our priority and we do our best to keep it safe for drivers and riders. Every time after the trip ends, drivers and riders will have the ability to rate each other and write a review about their experience. Our rating system is designed to measure the quality on the iZZi RIDE platform and keep it safe for all members.',
    },
    {
        icon: trip,
        title: 'Trip Request',
        copy: 'Soon there will be an option to leave a request for a trip along your route. You won’t have to look for a suitable driver anymore. You’ll simply create your route and the driver will contact you',
    },
    {
        icon: payment,
        title: 'Online payment',
        copy: 'You will be able to pay for the trip with a card in the app',
    },
]
