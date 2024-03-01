import type { Feature } from './features'

import review from '@public/icons/reviews-icon.svg'
import chat from '@public/icons/chat-icon.svg'
import trip from '@public/icons/trip-icon.svg'
import payment from '@public/icons/payment-icon.svg'

export const featureList: Feature[] = [
	{
		icon: review,
		title: 'Reviews',
		copy: 'You will be able to leave reviews and read reviews from other users about our application',
	},
	{
		icon: chat,
		title: 'Safely trip',
		copy: 'The application is very safe for traveling, because we will have the ability to evaluate the driver and the fellow traveler, so you can travel with comfort',
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
