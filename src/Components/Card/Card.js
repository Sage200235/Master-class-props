import React from 'react'
import {
    CardContainer,
    Heading,
    Paragraph,
    Icon 
} from './Card.Element'

function Card(props) {
  return (
        <CardContainer border={props.border} >
        <Heading>{props.heading}</Heading>
        <Paragraph>{props.text}</Paragraph>
        <Icon colour={props.colour}>{props.icon}</Icon>
        </CardContainer>
  )
}

export default Card