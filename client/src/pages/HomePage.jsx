import React from 'react';

import Rectangle5Image from '../testAsset/images/homepage_Rectangle_5.png';

import LifesaversPaperWokImage from '../testAsset/images/homepage_Lifesavers_Paper_Wok.png';

import Ellipse1Image from '../testAsset/images/homepage_Ellipse.png';

import Image1Image from '../testAsset/images/homepage_image_1.png';

import Rectangle7Image from '../testAsset/images/homepage_Rectangle_7.png';

import Photo621766538281941Image from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';

import MyButton from '../MyButton';

import {
  styled
} from '@mui/material/styles';

const HomePage1 = styled("div")({
  backgroundColor: `rgba(230, 247, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100vw`,
  height: `100vh`,
  justifyContent: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const TopBar = styled("img")({
  height: `54px`,
  width: `100vw`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

//The thing on the right
const BrowseRequest = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286.02px`,
  height: `308px`,
  top: `200px`,
  right: '200px'
});

//The thing on the left
const AddForms = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286.02px`,
  height: `308px`,
  top: `200px`,
  left: '200px'
});

//This is the rectangle thing on the addslip and view slip
const Rectangle11 = styled("div")({
  display: 'flex',
  backgroundColor: `rgba(181, 218, 255, 1)`,
  borderRadius: `20px`,
  width: `286.02px`,
  height: `238.4px`,
  position: `absolute`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: 'center',
  top: `10px`,
});

//There are two icon divs, it's so that the ellipse and the image are under one div
const Icon = styled("div")({
  display: 'flex',
  backgroundColor: `rgba(181, 218, 255, 1)`,
  borderRadius: `20px`,
  width: `286.02px`,
  height: `238.4px`,
  position: `absolute`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: 'center',
  top: `10px`,
});

const Ellipse1 = styled("img")({
  display: 'flex',
  height: `120px`,
  width: `120px`,
  position: `absolute`,
  top: `0px`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: 'center',
});

//The icon on the viewslip
const Image1 = styled("img")({
  height: `92.27px`,
  width: `98.64px`,
  objectFit: `cover`,
  position: `absolute`,
  top: `15px`,
});

//The icon for the addslip
const LifesaversPaperWok = styled("img")({
  height: `110px`,
  width: `110px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `90px`,
  top: `5px`,
});

const BrowseButton = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `162.03px`,
  height: `65.48px`,
  left: `60px`,
  top: `150px`,
});

//These are buttons for the viewslip and addslip
const Button = styled("div")({
  display: 'flex',
  backgroundColor: `rgba(146, 193, 240, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `35px`,
  width: `162.03px`,
  height: `65.48px`,
  position: `absolute`,
  top: `0px`,
  justifyContent: 'center',
});

//As its name implies
const ButtonText = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `JejuMyeongjo`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `145px`,
  position: `absolute`,
  left: `7px`,
  top: `16px`,
});

const NavBar = styled("div")({
  display: `flex`,
  position: `fixed`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `58px`,
  height: `54px`,
  right: '0px',
  top: `0px`,
  borderWidth: '1px',
  borderColor: 'black'
});

//This is a div which contains both the addslip and viewslip, to prevent them from overlapping when window size changes
const BoxThing = styled("div")({
  display: `flex`,
  position: `fixed`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: 'center',
  padding: `0px`,
  boxSizing: `border-box`,
  width: '1200px',
  height: '10px',
  top: '10%',
});

//Rectangles 7, 8, and 6 are just the three bar things on the nav bar
const Rectangle7 = styled("img")({
  height: `5.28px`,
  width: `39.16px`,
  position: `absolute`,
  left: `9px`,
  top: `38px`,
});

const Rectangle8 = styled("img")({
  height: `5.28px`,
  width: `39.16px`,
  position: `absolute`,
  left: `8px`,
  top: `24px`,
});

const Rectangle6 = styled("img")({
  height: `5.28px`,
  width: `39.16px`,
  position: `absolute`,
  left: `9px`,
  top: `9px`,
});

//The logo on top-left corner
const Photo621766538281941 = styled("img")({
  height: `49px`,
  width: `48px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `22px`,
  top: `3px`,
});

//The text right beside the logo on top-left corner
const CareAndCureHub = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `JejuMyeongjo`,
  fontWeight: `400`,
  fontSize: `36px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `388px`,
  height: `62px`,
  position: `absolute`,
  left: `18px`,
  top: `-4px`,
});



function HomePage() {
  return (
    <HomePage1>
      <TopBar src={Rectangle5Image} loading='lazy' alt={"Rectangle 5"}/>
      <BoxThing>
        <AddForms>
          <Rectangle11>
            <Icon>
              <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse"}/>
              <LifesaversPaperWok src={LifesaversPaperWokImage} loading='lazy' alt={"1LifesaversPaperWokImage"}/>
            </Icon>
            <BrowseButton>
              <Button>
                <ButtonText>
                  {`ADD SLIPS`}
                </ButtonText>
              </Button>
            </BrowseButton>
          </Rectangle11>
        </AddForms>
        <BrowseRequest>
          <Rectangle11>
            <Icon>
              <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse"}/>
              <Image1 src={Image1Image} loading='lazy' alt={"image 1"}/>
            </Icon>
            <BrowseButton>
              <Button>
                <ButtonText>
                  {`VIEW SLIPS`}
                </ButtonText>
              </Button>
            </BrowseButton>
          </Rectangle11>
        </BrowseRequest>
      </BoxThing>
      <NavBar>
        <Rectangle7 src={Rectangle7Image} loading='lazy' alt={"Rectangle 7"}/>
        <Rectangle8 src={Rectangle7Image} loading='lazy' alt={"Rectangle 7"}/>
        <Rectangle6 src={Rectangle7Image} loading='lazy' alt={"Rectangle 7"}/>
      </NavBar>
      <Photo621766538281941 src={Photo621766538281941Image} loading='lazy' alt={"photo_6217665382819412830_m-removebg-preview 1"}/>
      <CareAndCureHub>
        {`Care and Cure Hub`}
      </CareAndCureHub>
    </HomePage1>
    
    );
  }

export default HomePage;  