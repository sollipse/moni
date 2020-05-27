import React from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink'
import HoverMenu from './HoverMenu'
import ContactIcon from './ContactIcon'

const Container = styled.div`
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    max-height: 40px;
    z-index: 10;
    background: white;
    position: fixed;
`
const AdjustIcon = styled.div`
    margin-top: -3px;
    height: 23px;
    width: 23px;
    &:hover {
        transform: translateY(-1px);
    }
    transition: all .3s ease-in-out;
`
export default () => {
    return <Container>
        <HeaderLink href={"/"}>
            Home
        </HeaderLink>
        <div style={{width: 20}}/>
        <HoverMenu 
            width={60}
            key={window.location.href}
            prompt="Portfolio"
            links = {[
                ["Digital", "#/portfolio/digital"],
                ["Typography", "#/portfolio/typography"],
                ["Traditional","#/portfolio/traditional"]
            ]}
        />
        <div style={{width: 20}}/>
        <HoverMenu 
            width={80}
            key={window.location.href}
            prompt="About Me"
            promptLink="#/about"
            links = {[
                ["Contact", "#/contact"]
            ]}
        />
        <div style={{width: 20}}/>
        <AdjustIcon>
            <ContactIcon 
                width={30}
                icon="facebook"
                link="https://www.facebook.com/monica.mera.378"
            />
        </AdjustIcon>
        <div style={{width: 20}}/>
        <AdjustIcon>
            <ContactIcon 
                width={30}
                icon="instagram"
                link="https://www.instagram.com/moni_camera/"
            />
        </AdjustIcon>
        <AdjustIcon>
            <ContactIcon 
                width={30}
                icon="s6"
                link="https://society6.com/moni_camera"
            />
        </AdjustIcon>
        <div style={{width: 35}}/>
    </Container>
}