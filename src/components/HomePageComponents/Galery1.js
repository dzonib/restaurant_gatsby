import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import {styles, Section} from '../../utils'
import Img from 'gatsby-image'

const GET_IMAGES = graphql`
  
    {
      getImages: allFile(filter: {relativeDirectory: {eq: "homeGallery"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  
`

export default function Gallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
      const images = data.getImages.edges
      return (
        <Section>
          <StyledGallery>
            {images.map( ({node}, index) => {
              return (
                <div key={index} className={`item item-${index+1}`}>
                  <Img fluid={node.childImageSharp.fluid} />
                  <p className="info"> awesome pizza </p>
                </div>
              )
            })}
          </StyledGallery>
        </Section>
      )
    }}/>
  )
}

const StyledGallery = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  height: 100%;
  column-gap: 1rem;
  row-gap: 1rem;
  
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

    .gatsby-image-wrapper {
      height: 100%;
    }
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