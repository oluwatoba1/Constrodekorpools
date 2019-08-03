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
import constrodekorpools1 from '../images/constrodekorpools1.jpg';

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
  position: relative;
  background-color: #165b7a;
  padding: 30px 30px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  @media (max-width: 720px) {
    padding: 30px 20px;
}

`

const WhyUsImage = styled.img`

height: 250px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
transition: 0.8s cubic-bezier(0.35, 0.4, 0.35, 1);
justify-self: center;

@media (max-width: 720px) {
  height: 135px;
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
  text-transform: uppercase;
  color: #09162a;

  @media (max-width: 720px) {
  font-size: 20px;
}

`

const WhyUsBody = styled.p`

  font-size: 18px;
  text-align: center;
  color: #fff;

  @media (max-width: 720px) {
  font-size: 16px;
}

`

// const CellGroup = styled.div`

// `

// const Cell = styled.div`

// `

// const CellIcon = styled.img`

// `

// const CellTitle = styled.p`

// `

// const CellCaption = styled.p`

// `

const QuoteGroup = styled.div`

  padding: 35px 70px;

`

const Quote = styled.div`

  background-color: #000;
  padding: 60px;
  height: 500px;
  width: 600px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;

  h4 {
    color: #fff;
    font-size: 28px;
    text-transform: capitalize;
    margin: 0;
  }

  @media (max-width: 720px) {
    height: 600px;
    width: 300px;

  h4 {
    font-size: 24px;
  }
  
}

`

const Form = styled.form`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 25px 0; 

  input, textarea {
    border: none;
    border-bottom: 2px solid #808080;
    background-color: #000;
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    outline: none;

    ::placeholder {
      color: #fff;
    }
  }

  input {
    height: 25px;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin: 40px 0;

    input, textarea {
    margin-bottom: 30px;
    }

    textarea {
      margin-bottom: 0;
    }
  }

`
const Name = styled.input`
  
`

const PhoneNumber = styled.input`


`

const Email = styled.input`


`

const Subject = styled.input`

  

`

const Message = styled.textarea`

  

`

const SubmitButton = styled.button`

  height: 40px;
  align-self: flex-end;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  background: linear-gradient(104deg, #0d66da 0%, #062f64 100%);
  cursor: pointer;
  color: #fff;
  margin-bottom: 20px;

  &:hover {
    background: #000;
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
      <WhyUsImage src={constrodekorpools1} />
      <WhyUsGroup>
        <WhyUsTitle>Why Us?</WhyUsTitle>
        <WhyUsBody>Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie. Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React. Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.</WhyUsBody>
      </WhyUsGroup>
    </WhyUs>
    <QuoteGroup>
      <Quote>
        <h4>Request a quote</h4>
        <Form>
          <Name placeholder="Name*" />
          <PhoneNumber placeholder="Phone number*" />
          <Email placeholder="Email*" />
          <Subject placeholder="Subject*" />
          <Message rows="10" placeholder="Message*" />
          <SubmitButton>Send Message</SubmitButton>
        </Form>
      </Quote>
    </QuoteGroup>
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
