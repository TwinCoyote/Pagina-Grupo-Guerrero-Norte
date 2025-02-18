import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index} id="Servicios">
          <div key={index}>
            <ProductImg
              src={item.node.img.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
            />
            <ProductInfo>
              <TextWrap>
                <ImLocation />
                <ProductTitle>{item.node.name}</ProductTitle>
              </TextWrap>
              <Button
                to="/trips"
                primary="true"
                round="true"
                css={`
                  position: absolute;
                  top: 420px;
                  font-size: 14px;
                `}
              >
                {item.node.button}
              </Button>
            </ProductInfo>
          </div>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 3vw, 4rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
  @media screen and (max-width: 1200px) {
    margin-bottom: -10rem;
  }
  @media screen and (max-width: 390px) {
    margin-bottom: -2rem;
  }
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 9rem;
    padding: 1rem 6rem;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-top: 9rem;
    padding: 1rem 6rem;
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    padding: 2rem;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  @media screen and (min-width: 1320px) {
    aspect-ratio: 3/4;
  }
`

const ProductImg = styled(Img)`
  height: 600px;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 5%;

  &:hover {
    filter: brightness(100%);
  }
  @media screen and (max-width: 1200px) {
    height: 500px;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3rem;
  margin-left: 1rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
