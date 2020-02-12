import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="oops fim da linha">
          <AniLink fade to="/" className="btn-white">
            voltar ao início
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
