'use client'
import Link from 'next/link'
import AnimBlock from '@hoc/animated-block/animated-block'
import Form from '@common/form/form'

import { CONTACT_US } from '@constants/section'
import { CONTACT_US_ENDPOINT, PRIVACY_POLICY } from '@constants/links'
import { inputs } from './constant'
import styles from './contact-us.module.css'

const ContactUs = () => {
	return (
		<section className={styles.contact_section} data-title={CONTACT_US}>
			<AnimBlock>
				<Form
					endpoint={CONTACT_US_ENDPOINT}
					inputs={inputs}
					buttonText='Send Message'
					className={styles.form}
				>
					<div className={styles.form_copy}>
						By creating an account you agree with our{' '}
						<Link href='/' target='_blank' title='Terms of Service'>Terms of Service</Link>,{' '}
						<Link href={PRIVACY_POLICY} target='_blank' title='Privacy Policy'>Privacy Policy</Link>,<br />
						and our default <Link href='/' target='_blank' title='Notification Settings'>Notification Settings</Link>.
					</div>
				</Form>
			</AnimBlock>
		</section>
	)
}

export default ContactUs
