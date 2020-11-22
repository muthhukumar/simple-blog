import SEO from '@/components/seo'
import Header from '@/components/header'
import styles from './page.module.css'

const Page = ({
  slug,
  title,
  description,
  image,
  showSlug = true,
  children,
  showTab = false,
}) => {
  return (
    <div className={styles.wrapper}>
      <SEO
        title={`${
          (title ? `MK Blog - ${title}` : 'MK Blog') +
          ' ・ My Personal Blogs and other stuff'
        }`}
        description={description}
        image={image}
      />

      {showSlug && (
        <Header
          slug={showSlug && slug}
          title={showSlug && title}
          showTab={showTab}
        />
      )}
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
