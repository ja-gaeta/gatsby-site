import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <h3>this is awesom image</h3>
            <img
              src={node.data.target.fields.file["en-US"].url}
              width="400"
              alt="awesome place"
            />
            <p>images provided by john doe</p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is other post : {title["en-US"]}</h1>
            <img src={image["en-US"].fields.file["en-US"].url} alt="post img" />
            {documentToReactComponents(text["en-US"])}
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }

  const capitalize = str => {
    let pieces = str.split(" ")
    for (let i = 0; i < pieces.length; i++) {
      let j = pieces[i].charAt(0).toUpperCase()
      pieces[i] = j + pieces[i].substr(1)
    }
    return pieces.join(" ")
  }

  return (
    <Layout>
      <SEO title={capitalize(title)} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query getPost($slug: String!) {
//     post: contentfulPost(slug: { eq: $slug }) {
//       title
//       published(formatString: "MMMM Do, YYYY")
//       text {
//         json
//       }
//     }
//   }
// `

export default Blog
