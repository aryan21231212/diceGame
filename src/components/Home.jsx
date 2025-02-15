import React from 'react'
import styled from 'styled-components'
import {Button} from '../styled/Button'
import dice from '/public/images/dices 1.png'

const Home = ({isgamestarted,setisgamestarted}) => {

    function toggle(){
        if(isgamestarted === false){
            setisgamestarted(true)
        }
    }
    return (
        <Container>
            <div className='img'>
                <img src={dice} alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <div className='but'>
                <Button onClick={toggle}>Play Now</Button>
                </div>
                
            </div>

        </Container>
    )
}

export default Home

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .img{
        width: 649px;
        height: 522px;
    }

    .content h1{
        font-size: 96px;
        font-weight: 700;
        line-height: 144px;
    }

    .but{
        display: flex;
        justify-content: flex-end;
    }

`;

