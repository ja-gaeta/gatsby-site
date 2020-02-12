import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Início" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Bem vindo Geek"
        info="Cursos em vídeo, crônicas divertidas e um blog de artigos técnicos. Um ponto de encontro de velhos (e novos) Geeks"
      >
        <AniLink to="/tours" className="btn-white">
          conheça os cursos
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "siteImage.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
