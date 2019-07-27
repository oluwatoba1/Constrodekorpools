import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const WhatWeDo = styled.div`
  background: #fff;
  padding: 40px 20px;
`
const WhatWeDoTitle = styled.p`
@import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
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
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
  margin: 0 auto;
  color: #000;
  width: 350px;
  text-transform: capitalize;
  font-size: 28px;
  padding: 10px;
  justify-items: center;
  font-family: 'Abel', sans-serif;

  @media (max-width: 720px) {
    width: 250px;
    font-size: 20px;
  }

`

const WhatWeDoCellGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 170px);
  }
`

const WhatWeDoCell = styled.div`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');


  position: relative;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  span {
    font-family: 'Abel', sans-serif;
    position: absolute;
    top: 10px;
    right: 10px;
    color: rgba(0, 0, 0, 0.4);
  }

`

const WhatWeDoCellIcon = styled.span`

`

const WhatWeDoCellTitle = styled.h3`

font-family: 'Abel', sans-serif;
font-size: 24px;

@media(max-width: 720px) {
  font-size: 18px;
}

`

const WhatWeDoCellBody = styled.p`


  font-family: 'Abel', sans-serif;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);

  @media(max-width: 720px) {
  font-size: 14px;
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
          <WhatWeDoCellIcon />
          <WhatWeDoCellTitle>Professional team</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
        <WhatWeDoCell>
          <span>02</span>
          <WhatWeDoCellIcon />
          <WhatWeDoCellTitle>Great ideas</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
        <WhatWeDoCell>
          <span>03</span>
          <WhatWeDoCellIcon />
          <WhatWeDoCellTitle>Quality building</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
        <WhatWeDoCell>
          <span>04</span>
          <WhatWeDoCellIcon />
          <WhatWeDoCellTitle>Quality works</WhatWeDoCellTitle>
          <WhatWeDoCellBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie</WhatWeDoCellBody>
        </WhatWeDoCell>
      </WhatWeDoCellGroup>
    </WhatWeDo>
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
