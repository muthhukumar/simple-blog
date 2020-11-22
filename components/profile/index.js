// import Image from 'next/image'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="/profile.jpg"
          className={`${styles.headerHomeImage} ${styles.borderCircle}`}
          height="128"
          width="128"
          alt={'profile'}
        />
        <h1 className={styles.heading2Xl}>Profile</h1>
        <div className={styles.headingMd}>
          <p>
            Hello, I'm<b> MuthuKumar</b>, I'm a Tech Enthusiast and MERN full
            stack developer. I love React, Nextjs and coding more than anything
            in the world. You can contact me on{' '}
            <a
              href="https://twitter.com/0_void_"
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              Twitter
            </a>
          </p>
        </div>
      </header>
    </div>
  )
}

export default Profile
