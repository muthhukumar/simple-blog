import { useState } from 'react'

import TextEntry from '@/components/entry/text'
import styles from './posts-list.module.css'

const Posts = ({ href = '/[slug]', as, posts, paginate }) => {
  const [showMore, setShowMore] = useState(3)

  return (
    <>
      <ul className={styles.container}>
        {posts.slice(0, paginate ? showMore : undefined).map((post) => {
          return (
            <TextEntry
              key={`post-item-${post.slug}`}
              href={href}
              as={`${as}${post.slug}`}
              title={`${post.title}`}
              category={post.category}
              date={post.date}
              data={post.body}
              description={post.description}
              lastUpdated={post.lastUpdated}
            />
          )
        })}
        {paginate && showMore < posts.length && (
          <button
            onClick={() => {
              setShowMore(showMore + 3)
            }}
            className={styles.button}
          >
            Show More
          </button>
        )}
      </ul>
    </>
  )
}

export default Posts
