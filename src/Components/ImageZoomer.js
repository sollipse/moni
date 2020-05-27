import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import {Center} from '../Styles/Layout'
const FadeIn = keyframes`
    from {opacity: 0; }
    to {opacity: 1; }
`
const ModalZone = styled(Center)`
    position: fixed;
    z-index: 3;
    background: rgba(0, 0, 0 );
    top: 60px;
    height: calc(100% - 60px);
    width: 100%;
    animation: ${FadeIn} .35s ease-in-out;
    flex-direction: column;
    overflow-y: hidden;
    background: rgba(0, 0, 0, .8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const ZoomImage = styled.img`
    padding: 30px;
    transition: all .35s ease;
    opacity: ${p => p.isLoaded ? 1 : 0};
    max-height: 90%;
    max-width: 90%;
`

export default props => {
    const [isLoaded, setLoaded] = useState(false)
    return window.innerWidth < 700 ? null : <ModalZone onClick={props.onClick}>
        <ZoomImage 
            isLoaded={isLoaded}
            onLoad = {() => setLoaded(true)}src={props.src} />
    </ModalZone>
}