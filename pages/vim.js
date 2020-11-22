import React from 'react'

import Page from '@/components/page'
import PostsList from '@/components/posts-list'
import getPosts from '@/lib/get-posts'

const Vim = ({ posts }) => {
  return (
    <Page description="Muthukumar personal blog" showTab title="Vim">
      <article>
        <PostsList posts={posts} href="/vim/[slug]" as="/vim/" />
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts('vim')

  return {
    props: {
      posts
    }
  }
}

export default Vim
