import React from 'react'

import Page from '@/components/page'
import PostsList from '@/components/posts-list'
import getPosts from '@/lib/get-posts'

const Blog = ({ posts }) => {
  return (
    <Page description="Muthukumar personal blog" showTab>
      <article>
        <PostsList posts={posts} as="/" />
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts('posts')

  return {
    props: {
      posts,
    },
  }
}

export default Blog
