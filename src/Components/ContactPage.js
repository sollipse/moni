import React from 'react'
import styled from 'styled-components';
import { Center } from '../Styles/Layout'
import ContactIcon from './ContactIcon'

const Container = styled(Center)`
    flex-direction: column;
    font-family: Josefin Sans;
    padding-top: 200px;
`
const Title = styled.div`
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 40px;
`

const IconRow = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-around;
    padding: 35px;
`

export default props => <Container>
    <Title>
        LET'S TALK
    </Title>
    <div style={{fontSize: 20, paddingTop: 20}}>
        monicameraillustration@gmail.com
    </div>
    <IconRow>
        <ContactIcon 
            width={30}
            icon="facebook"
            link="https://www.facebook.com/monica.mera.378"
        />
        <ContactIcon 
            width={30}
            icon="instagram"
            link="https://www.instagram.com/moni_camera/"
        />
    </IconRow>
</Container>