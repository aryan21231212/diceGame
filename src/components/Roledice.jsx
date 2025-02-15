import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, OutlineButton } from '../styled/Button'
import dice1 from '/public/images/dice/dice_1.png'
import dice2 from '/public/images/dice/dice_2.png'
import dice3 from '/public/images/dice/dice_3.png'
import dice4 from '/public/images/dice/dice_4.png'
import dice5 from '/public/images/dice/dice_5.png'
import dice6 from '/public/images/dice/dice_6.png'

const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
  }


const Roledice = ({curentdice,rand,setscore,settog,tog}) => {
    function resetscore(){
        setscore(0)
    }
    function togg(){
        if(tog === false){
            settog(true)
        }else{
            settog(false)
        }
        
    }
    
  
  return (
    <div>
        <Images>
            <img onClick={rand} src={diceImages[curentdice]} alt="" />
            <p>Click on Dice to roll</p>
            <div className='outbut'>
                <OutlineButton onClick={resetscore}>Reset Score</OutlineButton>
            </div>
            <div className='but'>
                <Button onClick={togg}>Show Rules</Button>
            </div>
        </Images>
        
           
        
    </div>
  )
}

export default Roledice


const Images = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    
    img{
        height: 250px;
        width: 250px;
        cursor: pointer;
    }

    p{
        font-size: 24px;
        line-height: 36px;
        font-weight: 500;
        margin-top: 10px;
    }
    .outbut{
        margin-top: 24px;
    }
    .but{
        margin-top: 24px;
    }
`
