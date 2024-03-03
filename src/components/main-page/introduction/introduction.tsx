import Image from 'next/image'

import Button from '@common/button/button'

import car from '@public/images/car.svg'

import styles from './introduction.module.css'

const Introduction = () => {
    return (
        <section className={styles.section}>
            <div className={styles.image}>
                <Image src={car} alt='car' className={styles.car} />
                <div className={styles.car}></div>

            </div>

            <h2 className={styles.headline}>
                Do you often drive
                <br /> to another state by car?
                <br /> Then earn with
                <br /> IZZI RIDE
            </h2>

            <Button href='/' title='Download app' className={styles.download_btn} />
        </section>
    )
}

export default Introduction
