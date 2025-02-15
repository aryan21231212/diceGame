import React from 'react'
import styled from 'styled-components'


const Score = ({score}) => {
  return (
    <Main>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Main>
  )
}

export default Score

const Main = styled.div`
width: 135px;
display: flex;
flex-direction: column;
align-items: center;

h1{
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;

}

p{
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
}
   


`