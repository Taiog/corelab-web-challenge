import { useState } from 'react'
import { colors, TColors } from '../../styles/colors'
import styles from './CardNote.module.scss'

interface CardNoteProps {
  starred?: boolean
  color?: TColors
}
function CardNote({ starred, color = 'white' }: CardNoteProps) {
  const [toggleColorPick, setToggleColorPick] = useState<boolean>(false)
  const [editEnabled, setEditEnabled] = useState<boolean>(false)
  const colorsMap = Object.values(colors)
  return (
    <div className={styles.boxCardNote} style={{ backgroundColor: colors[color] }}>
      <div className={styles.headerCardNote}>
        <input type="text" placeholder="Título" readOnly={!editEnabled} />
        <img src={starred ? './starMarked.png' : './Star.png'} onClick={() => {}} />
      </div>
      <div className={styles.boxTextArea}>
        <textarea
          placeholder="Criar nota..."
          style={{ width: '100%', height: '100%' }}
          id="auto-resize-textarea"
          readOnly={!editEnabled}
        />
      </div>
      <div className={styles.footerCardNote}>
        <div className={styles.footerEdit}>
          <div
            className={styles.icon}
            onClick={() => setEditEnabled(!editEnabled)}
            style={{ backgroundColor: editEnabled ? '#FFE3B3' : 'transparent' }}
          >
            <img src="./pencil.png" height={24} width={24} />
          </div>
          <div
            className={styles.icon}
            onClick={() => setToggleColorPick(!toggleColorPick)}
            style={{ backgroundColor: toggleColorPick ? '#FFE3B3' : 'transparent' }}
          >
            <img src="./bucket.png" height={17} width={18} className={styles.colorIcon} />
          </div>
          <div className={styles.colorPicker} style={{ display: toggleColorPick ? 'block' : 'none' }}>
            {colorsMap.map((cor, index) => (
              <div className={styles.colorOption} style={{ backgroundColor: cor }} key={index}></div>
            ))}
          </div>
        </div>
        <img src="./VectorX.png" />
      </div>
    </div>
  )
}

export default CardNote
