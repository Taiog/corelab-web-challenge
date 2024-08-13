import React, { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <div className={styles.header}>
      <div className={styles.boxLogoSearch}>
        <div className={styles.boxLogo}>
          <img src="./image_notes.png" />
          <span>CoreNotes</span>
        </div>
        <div className={styles.boxSearch}>
          <input type="text" placeholder="Pesquisar notas" value={search} onChange={(e) => setSearch(e.target.value)} />
          {search.length > 0 ? (
            <img src="./VectorX.png" onClick={() => setSearch('')} className={styles.clearSearch} />
          ) : (
            <img src="./search.png" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
