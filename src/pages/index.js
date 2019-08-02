import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import forklift from '../images/forklift.png';
import desk from '../images/desk.png';
import building from '../images/building.png';
import electricitytower from '../images/electricitytower.png';
import constrodekorpools from '../images/constrodekorpools.jpg';

const WhatWeDo = styled.div`

  background: #fff;
  padding: 40px 20px;
`
const WhatWeDoTitle = styled.p`
  margin: 0;
  color: #062f64;
  text-transform: uppercase;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-family: 'Abel', sans-serif;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`

const WhatWeDoText = styled.p`
  margin: 0 auto;
  color: #000;
  width: 350px;
  text-transform: capitalize;
  font-size: 28px;
  padding: 10px;
  text-align: center;
  font-family: 'Abel', sans-serif;

  @media (max-width: 720px) {
    width: 250px;
    font-size: 20px;
  }

`

const WhatWeDoCellGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  justify-content: center;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 40%);
  }
`

const WhatWeDoCell = styled.div`


  position: relative;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    color: rgba(0, 0, 0, 0.4);
  }

`

const WhatWeDoCellIcon = styled.img`
  height: 60px;
  width: 60px;
`

const WhatWeDoCellTitle = styled.h3`

font-size: 18px;

@media(max-width: 720px) {
  font-size: 16px;
}

`

const WhatWeDoCellBody = styled.p`

  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);

  @media(max-width: 720px) {
  font-size: 14px;
  }

`

const WhyUs = styled.div`
  background-color: #165b7a;
  padding: 40px 40px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 15px;

  @media (max-width: 720px) {
    padding: 30px 20px;
}

`

const WhyUsImage = styled.img`

height: 250px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
transition: 0.8s cubic-bezier(0.35, 0.4, 0.35, 1);
justify-self: center;

&:hover {
  transform: scale(1.1);
}

@media (max-width: 720px) {
  width: 600px;
  height: 150px;
}

`
const WhyUsGroup = styled.div`

  align-content: center;
  padding: 0 20px;
  display: grid;
  grid-template-rows: 30px auto;
  grid-gap: 20px;

  @media (max-width: 720px) {
    grid-gap: 10px;
  }

`

const WhyUsTitle = styled.h3`

  font-size: 24px;
  text-align: center;

  @media (max-width: 720px) {
  font-size: 20px;
}

`

const WhyUsBody = styled.p`

  font-size: 18px;
  text-align: center;

  @media (max-width: 720px) {
  font-size: 16px;
}

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WhatWeDo>
      <WhatWeDoTitle>What we do</WhatWeDoTitle>
      <WhatWeDoText>We are the leading industry of pool construction. We love what we do</WhatWeDoText>
      <WhatWeDoCellGroup>
        <WhatWeDoCell>
          <span>01</span>
          <WhatWeDoCellIcon src={building}/>
          <WhatWeDoCellTitle>Professional team</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
        <WhatWeDoCell>
          <span>02</span>
          <WhatWeDoCellIcon src={desk}/>
          <WhatWeDoCellTitle>Great ideas</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
        <WhatWeDoCell>
          <span>03</span>
          <WhatWeDoCellIcon src={forklift}/>
          <WhatWeDoCellTitle>Quality building</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
        <WhatWeDoCell>
          <span>04</span>
          <WhatWeDoCellIcon src={electricitytower}/>
          <WhatWeDoCellTitle>Quality works</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
      </WhatWeDoCellGroup>
    </WhatWeDo>
    <WhyUs>
      <WhyUsImage src={constrodekorpools} />
      <WhyUsGroup>
        <WhyUsTitle>Why Us?</WhyUsTitle>
        <WhyUsBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie. Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React. Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.</WhyUsBody>
      </WhyUsGroup>
    </WhyUs>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
