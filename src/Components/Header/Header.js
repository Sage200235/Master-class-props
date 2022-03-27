import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
     <Head>Reliable, efficient delivery </Head>
     <Head2>Powered by Technology</Head2>
     <Para>Our Artificial intelligence powered tools use millions of project data <br/> points to ensure that your project is successful</Para>
    </Container>  
  )
}

const Container = styled.div`
    width: 100%;
    text-align: center;
    line-height: 20px;
`
const Head = styled.h1`
    color: lightgray;
    font-size: 35px;
    font-weight: 400;
`

const Head2 = styled.h1`
    font-size: 35px;
`

const Para = styled.p`
     color: lightgray;
     font-size: 20px;
`