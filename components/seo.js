import NextHead from 'next/head'

const Head = ({
  title = 'MK Blog',
  description = 'My Personal Blog and other stuff',
  image,
  children,
}) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      <meta name="twitter:site" content="@0_void_" />
      <meta name="apple-mobile-web-app-title" content="Blog" />
      <meta name="author" content="Muthukumar" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="icon" href="/profile.jpg" />

      {/* Inter font */}
      <link
        rel="preload"
        href="/assets/inter.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {children}
    </NextHead>
  )
}

export default Head
