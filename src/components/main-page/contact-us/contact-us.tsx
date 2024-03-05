import Link from 'next/link'
import { motion } from 'framer-motion'

import Form from '@common/form/form'

import { inputs } from './constant'

import styles from './contact-us.module.css'

const animation = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
	}
}

const ContactUs = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}
			variants={animation}
			className={styles.contact_section}
			data-title={'contact us'}
		>
			<div>
				<Form
					endpoint='http://ezride.pro/api/v1/client/complaint'
					inputs={inputs}
					buttonText='Send Message'
					className={styles.form}
				>
					<div className={styles.form_copy}>
						By creating an account you agree with our{' '}
						<Link href='/' title='Terms of Service'>Terms of Service</Link>,{' '}
						<Link href='/' title='Privacy Policy'>Privacy Policy</Link>,<br />
						and our default <Link href='/' title='Notification Settings'>Notification Settings</Link>.
					</div>
				</Form>
			</div>
		</motion.section>
	)
}

export default ContactUs
