import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderLink from './HeaderLink'

const MenuArea = styled.div`
    display: flex;
    flex-direction: column;
    position:relative;
    width: ${p => p.width || "auto"}px;
`
const MenuItemsContainer = styled.div`
    background: rgba(255, 255, 255, ${p => p.isHovering ? 1 : 0});
    transition: .18s linear;
    margin-left: -10px;
    margin-top: 10px;
    border-radius: 4px;
    padding: 0px 10px 0px 10px;
    width: max-content;
    z-index: 10;
`
const MenuItem = styled(HeaderLink)`
`
const MenuItemIndirectContainer = styled.div`
    pointer-events: ${p => p.isHovering ? "all" : "none"};
    height: 30px;
    width: 100%;
    opacity: ${p => p.isHovering ? 1 : 0};
    transform: translateX(${p => p.isHovering ? 0 : -2}px);
    transition: 
        color .18s, 
        opacity .18s linear ${p => 
            (p.isHovering ? p.index : 2 - p.index ) * 60}ms,
        transform .18s linear ${p => 
            (p.isHovering ? p.index : 2 - p.index ) * 60}ms
    ;
`
export default props => {
    let [isHovering, setHover] = useState(0);
    return <MenuArea
        width={props.width} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <HeaderLink href={props.promptLink}>
            {props.prompt}
        </HeaderLink>
        <MenuItemsContainer
            isHovering={isHovering}
        >
        {props.links.map(([linkName, link], index) => 
            <MenuItemIndirectContainer
            index={index}
            isHovering={isHovering}
            >
            <MenuItem
                href={link}
                isHovering={isHovering}
                index={index}>{linkName}</MenuItem>
            </MenuItemIndirectContainer>
        )}
        </MenuItemsContainer>
    </MenuArea>
}