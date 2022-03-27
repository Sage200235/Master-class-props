import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 400px;
    height: 250px;
    border-top: ${({border}) => border};
    border-radius: 3px;
    margin-top: 20px;
    padding-left: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const Heading = styled.h2`
     font-size: 25px;
`

export const Paragraph = styled.p`
     font-size: 20px;
     color: lightgray;
`

export const Icon = styled.div`
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 55px;
    color: ${({colour}) => colour};
`