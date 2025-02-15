import React, { useState } from 'react'
import Score from './Score'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Roledice from './Roledice'
import { Button } from '../styled/Button'
import Showrules from './Showrules'

const Playgame = () => {
        const [selected,setselected] = useState()
        const [curentdice, setcurentdice] = useState(1)
        const [score, setscore] = useState(0)
        const [error, seterror] = useState()
        const [tog, settog] = useState(false)

       

        function generatenumber(){
            return Math.floor(Math.random()*6)+1;
        }

        function rand(){
            if(!selected){
                seterror("You have not selected any number")
                return
            }   
            seterror("")
            const randomnumber = generatenumber();
            setcurentdice((prev)=> randomnumber)
            
            if(selected === randomnumber){
                setscore((prev) => prev+ randomnumber)
            }else{
                setscore((prev) => prev+ -2)
            }
            setselected(undefined)
        }
      
    return (
        <Container>
            <Big>
                <Score score ={score}></Score>
                <Numberselector 
                error = {error}
                seterror = {seterror}
                selected={selected}
                setselected={setselected}></Numberselector>
            </Big>
            <div>
                <Roledice 
                settog={settog}
                tog= {tog}
                setscore = {setscore}
                curentdice={curentdice}
                rand = {rand}></Roledice>
                
            </div>
            <div className='rules'>
                {tog?<Showrules></Showrules>:""}
            </div>
        </Container>



    )
}

export default Playgame



const Container = styled.div`
    .rules{
        display: flex;
        justify-content: center;
        margin-top: 25px;
    }
`

const Big = styled.div`
    height: 170px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`