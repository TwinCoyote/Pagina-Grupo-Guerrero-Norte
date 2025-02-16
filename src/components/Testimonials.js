import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/.(jpg)|.(png)|.(jpg)|.(jpeg)/" }
          name: { in: ["c1", "c2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People Are Sayig</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>Sean Michaels</h3>
            <p>
              "I love the way this site looks and feels. It's easy to navigate
              and provides a great user experience."
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb />
            <h3>Sara king</h3>
            <p>
              "I love the way this site looks and feels. It's easy to navigate
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-with: 768px) {
    grift-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-with: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
