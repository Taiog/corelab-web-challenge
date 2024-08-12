import { useState } from 'react'
import styles from './CardCreate.module.scss'

function CardCreate() {
  const [starred, setStarred] = useState<boolean>(false)

  const textarea = document.getElementById('auto-resize-textarea')

  textarea?.addEventListener('input', function () {
    this.style.height = 'auto'
    this.style.height = Math.min(this.scrollHeight, 350) + 'px'
  })

  return (
    <div className={styles.boxCardCreate}>
      <div className={styles.headerCardCreate}>
        <input type="text" placeholder="Título" />
        <img src={starred ? './starMarked.png' : './Star.png'} onClick={() => setStarred(!starred)} />
      </div>
      <div className={styles.boxTextArea}>
        <textarea placeholder="Criar nota..." style={{ width: '100%', maxHeight: '3500px' }} id="auto-resize-textarea" />
      </div>
    </div>
  )
}

export default CardCreate
