import Post from '@/components/post'
import getPosts from '@/lib/get-posts'
import renderMarkdown from '@/lib/render-markdown'

const PostPage = (props) => {
  return <Post {...props} path="/"/>
}

export const getStaticProps = ({ params: { slug } }) => {
  const posts = getPosts('posts')
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const post = posts[postIndex]
  const { body, ...rest } = post

  return {
    props: {
      previous: posts[postIndex - 1] || null,
      next: posts[postIndex + 1] || null,
      ...rest,
      html: renderMarkdown(body),
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: getPosts('posts').map((p) => `/${p.slug}`),
    fallback: false,
  }
}

export default PostPage
