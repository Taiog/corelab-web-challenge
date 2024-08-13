import { ReactNode } from 'react'
import styles from './Layout.module.scss'
import Header from '../Header/Header'
import CardCreate from '../CardCreate/CardCreate'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <CardCreate />
        {children}
      </div>
    </div>
  )
}

export default Layout
