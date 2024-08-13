import CardNote from '../../components/CardNote/CardNote'
import Layout from '../../components/Layout/Layout'
import styles from './Notes.module.scss'

const NotesPage = () => {
  return (
    <Layout>
      <span>Favoritas</span>
      <div className={styles.boxNotes}>
        <CardNote starred color="carrot" />
        <CardNote starred />
      </div>
      <span>Outras</span>
      <div className={styles.boxNotes}>
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
      </div>
    </Layout>
  )
}

export default NotesPage
