import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import {styles, Section} from '../../utils'
import Img from 'gatsby-image'

const GET_SINGLE_IMAGE = graphql `
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid

        return (
          <Section>
          <StyledGallery>
            <div className="item item-1">
              <Img fluid={img1}/>
              <div className="info"> awesome pizza</div>
            </div>
            <div className="item item-2">
              <Img fluid={img2}/>
              <div className="info"> awesome pizza</div>
            </div>
            <div className="item item-3">
              <Img fluid={img3}/>
              <div className="info"> awesome pizza </div>
            </div>
          </StyledGallery>
          </Section>
        )
      }}/>
  )
}

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  
  .item {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media(min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
      'big big small'
      'big big small2';

    .item-1 {
      grid-area: big;
    }
    .item-2 {
      grid-area: small;
    }
    .item-3 {
      grid-area: small2;
    }
  }
  
`