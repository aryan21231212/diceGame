import React, { useState } from 'react'
import styled from 'styled-components'

const Numberselector = ({selected,setselected,error,seterror}) => {
    let arr = [1,2,3,4,5,6]

    
    

  return (
    <Container>
        <p className='error'>{error}</p>
    <Bigbox>
        {arr.map((value,i)=>(
            <Box isSelected ={selected ===value}  onClick={()=>setselected(value)} key={i}>{value}</Box>
        ))}
      
    </Bigbox>
    <Seelect>
        <p>Select Number</p>
    </Seelect>
    </Container>
  )
}

export default Numberselector

const Container = styled.div`
    .error{
        color: red;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        display: flex;
        justify-content: flex-end;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;

    background-color: ${(props) =>(props.isSelected?"black":"white")};
    color: ${(props) =>(!props.isSelected?"black":"white")};


`

const Bigbox = styled.div`
    
    display: flex;
    gap:24px;
`

const Seelect = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 10px;
    
    p{
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
    }
`