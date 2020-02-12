import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getCursos = graphql`
  {
    cursos: allContentfulCurso {
      edges {
        node {
          titulo
          videos
          horas
          minutos
          contentful_id
          imagem {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const Tours = () => {
  const { cursos } = useStaticQuery(getCursos)
  return <TourList tours={cursos} />
}

export default Tours
