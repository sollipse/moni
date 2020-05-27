import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Center } from '../Styles/Layout'

const ScrollableCenter = styled(Center)`
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll;
`
const AboutGraphic = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const SlideSide = (amt) => keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(${amt});
    }
`
const Title = styled.div`
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 65px;
    animation: ${SlideSide("95px")} 1s ease forwards;
    animation-delay: 1s;
    @media(max-width: 791px) {
        font-size: 60px;
        position: absolute;
        left: 0;
        color: white;
        animation: ${SlideSide("235px")} 2s ease forwards;
        margin-top: 14vh;
        margin-left: -200px;
    }
`
const CoverImage = styled.img`
    width: 70vw;
    max-width: 500px;
    z-index: -3;
    @media(max-width: 791px) {
        font-size: 60px;
        width: 90vw;
        max-width: none;
    }
    height: 70vw;
    max-height: 400px;
    object-fit: cover;
`

const BodyText = styled.div`
    padding: 30px 20px 30px 113px;
    font-size: 15px;
    font-family: Lato;
    font-weight: 100; 
    max-width: 660px;
    text-align: justify;
    @media(max-width: 791px) {
        padding: 35px;
        max-width: none;
    }
    line-height: 1.6em;
`
const BolderName = styled.div`
    font-size: 21px;
    margin-bottom: 20px;
    font-weight: 500;
`
const TouchButton = styled.div`
    margin-top: 30px;
    cursor: pointer;
    width: fit-content;
    border: 2px solid black;
    padding: 5px 15px;
    border-radius: 20px;
    transition: all .35s ease-in-out;
    &:hover {
        color: green;
        border: 2px solid green;
    }
    font-weight: bold;
`
export default props => <ScrollableCenter>
    <AboutGraphic>
        <Title>
            Artist <span style={{color: "white"}}>Bio</span>
        </Title>
        <CoverImage 
            src="https://monica-site-assets.s3-us-west-2.amazonaws.com/24831054_2044754239093781_6861309707650959878_o.jpg"
        />
    </AboutGraphic>
    <BodyText>
        <BolderName>
            Monica <span style={{fontFamily: "Josefin Sans"}}>"Momo"</span> Mera
        </BolderName>
        With the love and encouragement of my father, I've been drawing since I was old enough to hold a pen. 
        I've pursued this passion for art my whole life, from my small town in California, to the Art Institute of California -San Francisco, where I graduated with a degree in Media Arts and Animation. 
        <br/>
        <br/>
        As an artist, my focus lies in illustration, design, and typography. I'm always expanding my influences, and avoid limiting myself to a single style.
        <br/>
        I currently live in Seattle with my partner where I work as a freelance illustrator and designer. 
        <br/>
        <a style= {{textDecoration: "none", color:"black"}} href="mailto:monicameraillustration@gmail.com?subject=Professional%20inquiry">
        <div style={{width: "100%", display: "flex", "justifyContent": "center"}}>
            <TouchButton>
                Get In Touch
            </TouchButton>
        </div>
        </a>
        
    </BodyText>
   
</ScrollableCenter>