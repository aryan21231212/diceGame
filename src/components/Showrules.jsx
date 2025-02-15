import React from 'react'
import styled from 'styled-components'

const Showrules = () => {
  return (
    <Container>
        <div>
            <h1>How to play dice game</h1>
        </div>
        <div className='para'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </Container>
  )
}

export default Showrules


const Container = styled.div`
    background-color: #FBF1F1;
    width: 794px;
    height: 208px;
    padding: 20px;
    gap: 24px;
    
    p{ 
        font-size: 1rem;
        line-height: 24px;
        font-weight: 500;
    }
    h1{
        font-size: 24px;
        line-height: 36px;
        font-weight: 700;
    }
    .para{
        margin-top: 10px;
    }
`