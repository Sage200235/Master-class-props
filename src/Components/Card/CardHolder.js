import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch,
         AiFillHome,
         AiFillBulb
} from "react-icons/ai";
import { IoDesktopOutline }from "react-icons/io5";
import Card from './Card'

function CardHolder() {
  return (
    <MainContainer>
        <HoldingContain>
            <LeftCard>
                <Card 
                heading='Supervisor'
                border='6px solid green'
                text='Monitors activity to identify roadblocks'
                icon={<AiOutlineSearch/>}
                colour='green'/>
            </LeftCard>
            <MiddleCards>
                <Card 
                heading='Team Builder'
                border='6px solid red'
                text='Scans our talent network to create the optimal team for your project'
                icon={<AiFillHome/>}
                colour='red'
                />

                <Card 
                heading='Karma'
                border='6px solid yellow'
                text='Regularly evaluates our talent to ensure quality'
                icon={<AiFillBulb/>}
                colour='yellow'
                />
            </MiddleCards>
            <RightCard>
                <Card 
                heading='Calculator'
                border='6px solid blue'
                text=' Uses data from past projects to provide better delivery estimates'
                icon={<IoDesktopOutline/>}
                colour='blue'
                />
            </RightCard>
        </HoldingContain>
    </MainContainer>
  )
}

export default CardHolder

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const HoldingContain = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`

const LeftCard = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MiddleCards = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RightCard = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

