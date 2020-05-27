import React, {useState} from 'react';
import styled from 'styled-components';
import ImageZoomer from "./ImageZoomer"
const getUrl = end => `https://s3-us-west-2.amazonaws.com/monica-site-assets/portfolio/${end}`;
const GridGallery = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: ${p => p.isZoomed ? "hidden" : "scroll"};
`
const GridImage = styled.img`
    object-fit: cover;
    object-position: top;
    transition: all 1s ease;
    height: 101%;
    width: 100%;
    transform: translate3d(0, ${p => p.isHovering ? "-1%": 0}, 0);
    transition: all .35s ease-in-out;

`
const ImageContainer = styled.div`
    cursor: pointer;
    margin: 1.7vw; 
    padding: 5px;
    position: relative;
    background: white;
    transition: all .35s ease-in-out;
    opacity: ${p => p.isLoaded ? 1 : 0};
    transition-delay: .3s;
`
const RelativeContainer = styled.div`
    @media screen and (max-width: 600px) { 
        height: 96vw;
        width: 96vw;
    }
    @media screen and (min-width: 601px) and (max-width: 999px) { 
        height: 44vw;
        width: 44vw;
    }
    height: 28vw;
    width: 28vw;

    position: relative;
    overflow: hidden;
`
const ImageTitle = styled.div`
    justify-content: space-between;
    font-family: Josefin Sans;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 0 5%;
    width: 90%;
    height: 70px;
    background: white;
    position: absolute;
    bottom: 0;
    transform: translate3d(0, ${p => p.isHovering ? "2%" : "120%"}, 0);
    transition: all .35s ease-in-out;
`
const GradientContainer = styled.div`
    transition: all .35s ease-in-out;
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    opacity: ${p => p.isHovering ? 1 : 0};
`

const OrderMeButton = styled.div`
    border-image: linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53), white) 100%;
    border: 2px solid;
    padding: 10px;
    border-radius: 20px;
    transition: all .35s ease-in-out;
    color: orangered;
    &:hover {
        color: green;
    }
`
const GenerateOrderLink = ArtName =>`mailto:monicameraillustration@gmail.com?subject=I'd%20like%20to%20order%20a%20print!&amp;body=Hey%20Monica!%20I%20stumbled%20onto%20your%20piece%20${ArtName}%20on%20your%20resume%20site%20and%20would%20like%20to%20purchase%20a%20physical%20copy.%20%0A`
const HoverImage = ({src, title, onClick}) => {
    const [isHovering, setHover] = useState(window.innerWidth < 600)
    const [isLoaded, setLoaded] = useState(false)
    
    return <ImageContainer 
        onMouseEnter={() => setHover(true)}    
        onMouseLeave={() => setHover(window.innerWidth < 600)} 
        onTouchStart={() => setHover(!isHovering)} 
        isLoaded={isLoaded}
    >
        <GradientContainer 
            isHovering={isHovering}
        />
        <RelativeContainer>
            <GridImage
                onLoad={() => setLoaded(true)}
                isHovering={isHovering}
                src={src} 
                onClick={() => onClick(src)}
            />
            <ImageTitle isHovering={isHovering}>
                {title}
            </ImageTitle>
        </RelativeContainer>
    </ImageContainer>
}
export default (images) => (props) => {
    const [zoomTarget, setZoomTarget] = useState("");
    return <React.Fragment>
        {zoomTarget && <ImageZoomer 
            onClick={() => setZoomTarget("")} 
            src={zoomTarget} 
        />}
        <GridGallery isZoomed={window.innerWidth < 700 ? false : zoomTarget}>
            {images.map(([link, title]) => 
                <HoverImage onClick={src => setZoomTarget(src)} title={title} src={getUrl(link)} />)}
        </GridGallery>
    </React.Fragment>
};