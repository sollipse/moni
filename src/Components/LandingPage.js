import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { Center as CenterLayout } from '../Styles/Layout'

const SlowSpin = keyframes`
    0%   { transform: rotateZ(0deg) scaleX(-1) }
    100% { transform: rotateZ(360deg) scaleX(-1) }
`

const Center = styled(CenterLayout)`
    overflow:hidden;
    height: calc(100% - 100px);
    position: relative;
    position: absolute;
`

const DracURL = "https://s3-us-west-2.amazonaws.com/monica-site-assets/compressed_dragon.jpg"
const TextContainer = styled.div`
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const Name = styled.span`
    padding: 5px;
    border-radius: 10px;
    padding-top: 15px;
    background:  rgba(255, 255, 255, .95);
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 60px;
`
const Occupation = styled.span`
    font-size: 17px;
    background:  rgba(255, 255, 255, .95);
    font-weight: 100;
`
const Dracarys = styled.img`
    opacity: ${p => p.isLoaded ? 1 : 0};
    animation: ${SlowSpin} 50s linear infinite;
    transition: 1.5s linear;
    transition-delay: .2s;
    height: 70vh;
    width: 70vh;
    position: absolute;
    z-index: -2;
`

export default (props) => {
    const [isLoaded, setLoaded] = useState(false);

    return <Center>
        <TextContainer>
            <Name>
                MONICA <span style={{color: "rgb(198, 49, 33)"}}>MERA</span>
            </Name>
            <div style={{height: 10}}/>
            <Occupation>
                illustrator &nbsp; / &nbsp; designer
            </Occupation>
        </TextContainer>
        <Dracarys 
            isLoaded = {isLoaded}
            onLoad = {() => setLoaded(true)}
            src={DracURL}
        />
    </Center>
}