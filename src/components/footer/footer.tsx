import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import GithubIcon from '@/../public/github-mark-white.svg'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.item}>
                    <h3>Created by</h3>
                    <p>Janne Alaranta</p>
                    <a href="mailto:janne.alaranta@gmail.com">janne.alaranta@gmail.com</a>
                </div>
                <div className={styles.item}>
                    <h3><span>Socials</span></h3>
                    <a href='https://github.com/JanneAla/blog' target="_blank">
                        <Image
                            priority
                            src={GithubIcon}
                            alt={'Github logo'}
                            width={25}
                            height={25}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}