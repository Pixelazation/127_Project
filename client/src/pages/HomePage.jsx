import React from 'react';

import { useNavigate } from "react-router-dom";

import LifesaversPaperWokImage from '../testAsset/images/homepage_Lifesavers_Paper_Wok.png';

import FolderIcon from '../testAsset/images/homepage_image_1.png';

import CCH from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';

import Button from '@mui/material/Button';

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
  backgroundColor: 'rgba(146, 193, 240, 1)',
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

//There are two icon divs, it's so that the ellipse and the image are under one div
const Icon = styled("div")({
  display: 'flex',
  backgroundColor: `rgba(181, 218, 255, 1)`,
  borderRadius: `20px`,
  width: `290px`,
  height: `245px`,
  position: `absolute`,
  justifyContent: `center`,
  alignContent: 'center',
  top: `10px`,
});

const Ellipse1 = styled("div")({
  width: '120px',
  height: '120px',
  backgroundColor: 'rgba(146, 193, 240, 1)',
  borderRadius: '50%', 
  top: '20px',
  borderWidth: '1px',
  borderColor: 'black'
});

//The icon on the viewslip
const Folder = styled("img")({
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
  height: `6px`,
  width: `40px`,
  position: `absolute`,
  left: `9px`,
  top: `39px`,
  background: 'rgba(230, 247, 255, 1)',
});

const Rectangle8 = styled("img")({
  height: `6px`,
  width: `40px`,
  position: `absolute`,
  left: `9px`,
  top: `24px`,
  background: 'rgba(230, 247, 255, 1)',
});

const Rectangle6 = styled("img")({
  height: `6px`,
  width: `40px`,
  position: `absolute`,
  left: `9px`,
  top: `9px`,
  background: 'rgba(230, 247, 255, 1)',
});

//The logo on top-left corner
const Logo = styled("img")({
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
  //let history = useHistory();
let navigate = useNavigate();

  return (
    <HomePage1>
      <TopBar/>
      <BoxThing>
        <AddForms>
            <Icon>
              <Ellipse1/>
              <LifesaversPaperWok src={LifesaversPaperWokImage} loading='lazy' alt={"1LifesaversPaperWokImage"}/>
            </Icon>
            <BrowseButton>
              <Button variant="contained" onClick={() => {navigate("/AddFormInfo");}}>Add Slips</Button>
            </BrowseButton>
        </AddForms>
        <BrowseRequest>
            <Icon>
              <Ellipse1/>
              <Folder src={FolderIcon} loading='lazy' alt={"image 1"}/>
            </Icon>
            <BrowseButton>
              <Button variant="contained" onClick={() => {navigate("/ViewSlips");}}>View Slips</Button>
            </BrowseButton>
        </BrowseRequest>
      </BoxThing>
      <NavBar>
        <Rectangle7/>
        <Rectangle8/>
        <Rectangle6/>
      </NavBar>
      <Logo src={CCH} loading='lazy' alt={"photo_6217665382819412830_m-removebg-preview 1"}/>
      <CareAndCureHub>
        {`Care and Cure Hub`}
      </CareAndCureHub>
    </HomePage1>
    
    );
  }

export default HomePage;  