import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "barracuda.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="sobre" subtitle="mim" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Eu no Barracuda em Miami"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>o ponto g++ e eu...</h4>
          <p>
            Desenvolvi este Site para compartilhar minhas experiências, ideias e{" "}
            <em>hobbies</em>, aproveitando para treinar meus conhecimentos de
            programação e desenvolvimento Web.
          </p>
          <p>
            Agora que estou aposentado, sobra tempo para rechear estas páginas
            de conteúdo. Grato pela visita. Espero que aproveite o material
            publicado e volte sempre.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
