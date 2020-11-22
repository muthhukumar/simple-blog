import Head from 'next/head'

import Page from '@/components/page'
import Link from '@/components/link'

const Error = ({ missingTerm, status }) => {
  return (
    <Page title={status || 'Error'} showSlug={false}>
      <Head>
        <title>{[status]}</title>
      </Head>

      {status === 404 && (
        <>
          <h1>404</h1>
          <p>
            The term <strong>{missingTerm}</strong> doesn’t exist yet.
          </p>

          <Link underline href="/">
            Go Home
          </Link>
        </>
      )}
    </Page>
  )
}

export default Error
