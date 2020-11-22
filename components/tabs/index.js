import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './tabs.module.css'

const Tabs = ({ tabs }) => {
  const pathName = useRouter().route
  const route = pathName.substring(1, pathName.length)

  return (
    <div className={styles.noScrollBar + ' ' + styles.tabs} data-geist-tabs="">
      {tabs.map(tab => (
        <Link href={`/${tab.value}`} key={tab.value}>
          <a className={styles.link}>
            <div className={styles.tabContainer} role="button">
              <div
                className={`${styles.tab} ${route === tab.value &&
                  styles.activeTab}`}
              >
                <div>{tab.title}</div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Tabs
