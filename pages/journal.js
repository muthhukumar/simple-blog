import React from 'react'

import Page from '@/components/page'
import PostsList from '@/components/posts-list'
import getPosts from '@/lib/get-posts'

const Journal = ({ posts }) => {
  return (
    <Page description="Muthukumar personal Journal" title="Journal" showTab>
      <article>
        <PostsList posts={posts} href="/journal/[slug]" as="/journal/"/>
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts('journal')

  return {
    props: {
      posts
    }
  }
}

export default Journal
