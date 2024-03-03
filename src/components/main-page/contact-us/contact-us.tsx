import Link from 'next/link'

import Form from '@common/form/form'

import { inputs } from './constant'

import styles from './contact-us.module.css'

const ContactUs = () => {
	return (
		<section className={styles.contact_section}>
			<div>
				<Form
					endpoint='https://jsonplaceholder.typicode.com/posts'
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
		</section>
	)
}

export default ContactUs
