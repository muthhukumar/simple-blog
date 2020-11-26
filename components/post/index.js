import Head from 'next/head'

import Navigation from './navigation'
import Page from '@/components/page'

const Post = ({
  title,
  slug,
  html,
  hidden,
  // og,
  description,
  date,
  previous,
  next,
  path
}) => {
  return (
    <Page
      slug={slug}
      title={title}
      description={description}
      
    >
      <Head>
        {hidden && <meta name="robots" content="noindex" />}
        {date && <meta name="date" content={date} />}
      </Head>

      <article
        dangerouslySetInnerHTML={{
          __html: `${html}`,
        }}
      />

      <Navigation previous={previous} next={next} path={path}/>
    </Page>
  )
}

export default Post
