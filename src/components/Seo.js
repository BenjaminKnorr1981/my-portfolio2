import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
          twitterUsername
        }
      }
    }
  `)

  return (
    <>
      <title>{title} | {data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="image" content={data.site.siteMetadata.image} />
      <meta property='og:title' content={data.site.siteMetadata.title}/>
      <meta property="og:description" content={data.site.siteMetadata.description}/>
      <meta property="og:image" content={data.site.siteMetadata.image}/>
      <meta property="og:url" content={data.site.siteMetadata.siteUrl}/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:url" content={data.site.siteMetadata.siteUrl} />
      <meta name="twitter:description" content={data.site.siteMetadata.description} />
      <meta name="twitter:image" content={data.site.siteMetadata.image} />
      <meta name="twitter:creator" content={data.site.siteMetadata.twitterUsername} />

    </>
  )
}

export default Seo