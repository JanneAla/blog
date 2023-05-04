
import styles from '@/styles/layout.module.css'
import { ReactElement } from 'react'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: {children: ReactElement}) {
    return (
        <div className={styles.container}>
            <main>{children}</main>
        </div>
    )
}