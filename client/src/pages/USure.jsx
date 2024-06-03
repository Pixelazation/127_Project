import React from 'react';

import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

import Photo621766538281941Image from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';

import {
  styled
} from '@mui/material/styles';

const USure1 = styled("div")({
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
  height: `80px`,
  width: `100vw`,
  position: `absolute`,
  backgroundColor: 'rgba(146, 193, 240, 1)',
  zIndex: '-5',
});

const Photo621766538281941 = styled("img")({
  height: `58px`,
  width: `53.83px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `12px`,
  top: `9px`,
});

const Cch = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `JejuMyeongjo`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `150px`,
  height: `52px`,
  position: `absolute`,
  left: `26px`,
  top: `12px`,
});

const GreyBox = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `2px solid rgba(42, 92, 118, 1)`,
  boxSizing: `border-box`,
  borderRadius: `25px`,
  width: `505px`,
  height: `194px`,
  position: `absolute`,
  top: `194px`,
});

const Group6 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `182px`,
  height: `42px`,
  left: '50px',
  top: '120px'
});

const Group7 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `182px`,
  height: `42px`,
  right: '50px',
  top: '120px'
});

const Submit = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `100px`,
  height: `50px`,
  position: `absolute`,
  top: '100px',
  left: '110px',
});


const Cancel = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `100px`,
  height: `50px`,
  position: `absolute`,
  top: '100px',
  right: '110px',

});

const AreYouSureYouWantToS = styled("div")({
  display: `flex`,
  textAlign: `center`,
  justifyContent:'center',
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  top: '30px',
});

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
});


function USure() {
  
  let navigate = useNavigate();

  return (
    <USure1>
      <Photo621766538281941 src={Photo621766538281941Image} loading='lazy' alt={"photo_6217665382819412830_m-removebg-preview 3"}/>
      <Cch>
        {`CCH`}
      </Cch>
      <TopBar/>

      <BoxThing>
        <GreyBox>
          <Submit>
            <Button variant="contained" onClick={() => {navigate("/AddFormInfo");}}>Submit</Button>
          </Submit>
          <Cancel>
            <Button variant="contained" onClick={() => {navigate("/AddFormInfo");}}>Cancel</Button>
          </Cancel>
          <AreYouSureYouWantToS>
            {`Are you sure you want to submit the slip?`}
          </AreYouSureYouWantToS>
        </GreyBox>

      </BoxThing>
    </USure1>);

  }

export default USure;

  