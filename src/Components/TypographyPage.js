import React, {useState} from 'react'
import styled from 'styled-components'
import {Center} from '../Styles/Layout'
import ImageZoomer from './ImageZoomer'

const Container = styled(Center)`
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll;
`
const Title = styled.div`
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 45px;
    text-align: center;
    line-height: 1.4em;
    padding: 40px 0px;
`
const getUrl = end => `https://s3-us-west-2.amazonaws.com/monica-site-assets/portfolio/${end}`
const PreviewImages = [
    "Typography/IMG_2808.JPG",
    "Typography/Photo+Mar+21%2C+2+45+14+PM.jpg",
    "Typography/Photo+Oct+26%2C+8+44+26+AM.jpg"
]
const PreviewImageStrip = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;
const PreviewContainer = styled.div`
    width: 23vw;
    margin: 1vw;
    ${p => p.normalize ? {
        width: p.customWidth || "100%",
        height: "auto",
        margin: "0"
    }: {}}
    cursor: pointer;
    @media (max-width: 600px) {
        width: 98vw;
        margin: 1vw;
    }
    object-fit: cover;
    overflow: hidden;
    opacity: ${p => p.isLoaded ? 1 : 0};
    transition: .35s ease-in-out;
    transition-delay: .35s;
`
const PreviewImage = styled.img`
    max-width: 100%;
    max-width: 100%;
    margin-left: 0%;
    text-align: center;
    &:hover {
       transform: scale(1.1);
    }
    transition: .35s ease-in-out;
`
const BodyText = styled.div`
    font-size: 17px;
    font-family: Lato;
    font-weight: 100; 
    text-align: justify;
    max-width: 900px;
    line-height: 1.6em;
    padding: 20px;
`

const NosFarURL =  getUrl("Typography/NM6ZED6l.jpeg")
const NosNosURL = "Typography/80333093_595922181229655_5432173283342548992_n.jpg"
const ColdBrewURL ="Typography/web_layout_type_coldbrew.jpg";
const EthiopiaURL = getUrl("Typography/web_layout_type_ethiopia.2.jpg")
const ColumbiaURL = getUrl("Typography/web_layout_type_colombia.2.jpg")
const ColdBrewSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

const SideText = styled(BodyText)`
    padding: 5px 0px;
    max-width: 600px;
    text-align: left;
    @media (max-width: 790px) {
        max-width: none;
    }
`
const HalfImageContainer = styled.div`
    width: 100vw;
     display: flex;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 790px) {
        width: 99vw;
        height: 99vw; 

    }
`

const FullImageContainer = styled.img`
    width: 80vw;
    max-height: 80vw; 
    max-width: 900px;

`
export default props => {
    const [zoomTarget, setZoomTarget] = useState("");
    return <React.Fragment>
        {zoomTarget && <ImageZoomer  
            src={zoomTarget}
            onClick={() => setZoomTarget("")}
        />}
        <Container>
      
            <Title>
                STARBUCKS MERCHANDISE 
                <br/>
                CHALK BOARDS
            </Title>
            <PreviewImageStrip>
                {PreviewImages.map( src => 
                    <PreviewImageGroup 
                        setZoomTarget={setZoomTarget}
                        src={src} 
                    />)}
            </PreviewImageStrip>
            <BodyText style={{padding: "40px 20px"}}>
            As a shift manager for Starbucks, my responsibilities include translating simple product outlines into concrete physical displays that fit the unique location and brand of my store. 
            Below are several successful campaigns I have completed during my time with the company.
            </BodyText>
            <ColdBrewSection>
                <HalfImageContainer>
                <PreviewImageGroup 
                    {...{normalize: true, setZoomTarget}}
                    onClick={() => setZoomTarget(ColdBrewURL)}
                    src={ColdBrewURL} 
                />
                </HalfImageContainer>
            <SideText>
                    <b style={{fontFamily:"Josefin Sans", fontSize: 18}}> Chocolate Coconut Coldbrew </b> was a beverage launched by Starbucks in the summer of 2017.
                    I chose a flowing cursive font for the title to communicate a sense of smoothness.
                    <br />
                    I contrasted this title text with a handwritten font similar to the Charcuterie Sans typeface, to give the customer a sense of friendliness and personability, matching the tone of the copy.
                    <br />
                    We launched this product to rave reviews, hitting the top 10% in overall sales for our area, with our Coconut Coldbrew as a clear front-runner.
                </SideText>
            </ColdBrewSection>
            <FullImageContainer style={{marginTop: 40}} src={EthiopiaURL} onClick={() => setZoomTarget(EthiopiaURL)}/>
            <BodyText style={{padding: "40px 20px 40px 20px"}}>
                    Our <b style={{fontFamily:"Josefin Sans", fontSize: 18}}> Ethiopia and Columbia Single Origin Blends </b> were part of a marketing push in 2017. 
                    For both launches, I personally crafted the in-store displays using a combination of chalk markers and wood blocks. 
                    <br/>
                    The designs for each display were extrapolated from the covers on the packaging, allowing each display to melt seamlessly into the bright, colorful wrapping of the product itself.
            </BodyText>
            <FullImageContainer onClick={() => setZoomTarget(ColumbiaURL)} src={ColumbiaURL}/>

            <br/>
            <br/>
            <br/>
            <Title>
                NOS NOS CAFE
            </Title>
            <ColdBrewSection>
                <HalfImageContainer>
                <PreviewImageGroup 
                    customWidth={"80%"}
                    {...{normalize: true, setZoomTarget}}
                    onClick={() => setZoomTarget(NosNosURL)}
                    src={NosNosURL} 
                />
                </HalfImageContainer>
            <SideText>
                    <br/>
                    In November 2019, I started a collaboration with <b style={{fontFamily:"Josefin Sans", fontSize: 18}}> Nos Nos Cafe </b> to help launch their business.
                    After consulting with the owners and employees, I drafted a menu which communicated the warm, inviting nature of the space, while simultaneously encouraging engagment via social media.
                    
                </SideText>
            </ColdBrewSection>
            <BodyText style={{padding: "40px 20px 40px 20px"}}>
                This was a fun challenge to take on, because any menu design had to play well with the vibrant and tropical character of Nos Nos. I suggested, 
                and ultimately created a design which drew on botanical, as well as typographical cues to draw customers into the lush environment, and momentarily lose themselves in the space.
            </BodyText>
            <FullImageContainer onClick={() => setZoomTarget(NosFarURL)} src={NosFarURL}/>
        </Container>
    </React.Fragment>
}

const PreviewImageGroup = ({src, setZoomTarget, normalize, customWidth}) => {
    const [isLoaded, setLoaded] = useState(false)
    return <PreviewContainer {...{isLoaded, normalize, customWidth}}>
        <PreviewImage
            onLoad={() => setLoaded(true)}
            onClick={() => setZoomTarget(getUrl(src))}
            src={getUrl(src)}
        />
    </PreviewContainer>
}