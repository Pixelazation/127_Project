import React from 'react';

import Rectangle14Image from '../testAsset/images/slippatientinfo_Rectangle_14.png';

import Photo621766538281941Image from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';

import Rectangle19Image from '../testAsset/images/USURE_Rectangle_19.png';

import Rectangle191Image from '../testAsset/images/USURE_Rectangle_19.png';

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

const Rectangle14 = styled("img")({
  height: `29px`,
  width: `830px`,
  position: `absolute`,
  top: `26px`,
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

const Rectangle22 = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: `rgba(217, 217, 217, 1)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
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

const Rectangle19 = styled("img")({
  height: `42px`,
  width: `182px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Submit = styled("div")({
  textAlign: `center`,
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
  width: `80px`,
  height: `23px`,
  position: `absolute`,
  left: `51px`,
  top: `2.5px`,
});

const Rectangle191 = styled("img")({
  height: `42px`,
  width: `182px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Cancel = styled("div")({
  textAlign: `center`,
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
  width: `80px`,
  height: `23px`,
  position: `absolute`,
  left: `51px`,
  top: `2.5px`,
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
  return (
    <USure1>
      <Photo621766538281941 src={Photo621766538281941Image} loading='lazy' alt={"photo_6217665382819412830_m-removebg-preview 3"}/>
      <Cch>
        {`CCH`}
      </Cch>
      <BoxThing>
        <Rectangle14 src={Rectangle14Image} loading='lazy' alt={"Rectangle 14"}/>
        <Rectangle22>
          <Group6>
            <Rectangle19 src={Rectangle19Image} loading='lazy' alt={"Rectangle 19"}/>
            <Submit>
              {`Submit`}
            </Submit>
          </Group6>
          <Group7>
            <Rectangle191 src={Rectangle191Image} loading='lazy' alt={"Rectangle 19"}/>
            <Cancel>
              {`Cancel`}
            </Cancel>
          </Group7>
          <AreYouSureYouWantToS>
            {`Are you sure you want to submit the slip?`}
          </AreYouSureYouWantToS>
        </Rectangle22>

      </BoxThing>
    </USure1>);

  }

export default USure;

  