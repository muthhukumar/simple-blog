import { memo } from 'react'
import cn from 'classnames'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

import Link from '@/components/link'
import styles from './text.module.css'
import { getMinutesToRead } from '@/lib/getMinutesRead'

const TextEntry = ({ data, date, title, href, category, as, description }) => {
  return (
    <li className={cn(styles.item, !category && styles.request)}>
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title}`}
        className={styles.link}
      >
        <span className={cn(styles.title, 'clamp', !category && styles.new)}>
          {title}
        </span>
      </Link>
      <p
        style={{
          margin: 0,
          marginTop: '2px',
          marginBottom: '2px',
          lineHeight: 1.3,
        }}
      >
        {description}
      </p>
      <div className={styles.dateDetails}>
        Published on <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.minuteRead}>
        <AccessTimeIcon fontSize="inherit" />{' '}
        <span>{getMinutesToRead(data)} min read</span>
      </div>
    </li>
  )
}

export default memo(TextEntry)
