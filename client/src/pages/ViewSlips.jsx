import React from 'react';

import Rectangle5Image from '../testAsset/images/homepage_Rectangle_5.png';

import Photo621766538281941Image from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';

import Rectangle50Image from '../testAsset/images/viewslips_Rectangle_50.png';

import Rectangle54Image from '../testAsset/images/viewslips_Rectangle_54.png';

import {
  styled
} from '@mui/material/styles';
import { Container } from '@mui/material';

const ViewSlips1 = styled("div")({
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

//A div which make everything is centered
const BoxThing = styled("div")({
  display: `flex`,
  position: `fixed`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: 'center',
  padding: `0px`,
  boxSizing: `border-box`,
  width: '1440px',
  height: '10px',
  top: '10%',
});

//Blue rectangle on the top
const Rectangle5 = styled("img")({
  height: `67px`,
  width: `100vw`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

//Text beside the logo on the top-left
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
  left: `36px`,
  top: `11px`,
});

//Logo on the top-left
const Photo621766538281941 = styled("img")({
  height: `58px`,
  width: `53.83px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `24px`,
  top: `5px`,
});

//Rectangles which make up the table
const Rectangle50 = styled("img")({
  height: `63px`,
  width: `1262px`,
  position: `absolute`,
  left: `78px`,
  top: `321px`,
});

const Rectangle53 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `1262px`,
  height: `62px`,
  position: `absolute`,
  left: `78px`,
  top: `259px`,
});

const Rectangle51 = styled("div")({
  backgroundColor: `rgba(177, 202, 215, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `1262px`,
  height: `63px`,
  position: `absolute`,
  left: `78px`,
  top: `196px`,
});

const Rectangle52 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `1262px`,
  height: `62px`,
  position: `absolute`,
  left: `78px`,
  top: `134px`,
});

const Rectangle54 = styled("img")({
  height: `63px`,
  width: `1262px`,
  position: `absolute`,
  left: `78px`,
  top: `571px`,
});

const Rectangle55 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `1262px`,
  height: `62px`,
  position: `absolute`,
  left: `78px`,
  top: `509px`,
});

const Rectangle56 = styled("div")({
  backgroundColor: `rgba(177, 202, 215, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `1262px`,
  height: `63px`,
  position: `absolute`,
  left: `78px`,
  top: `446px`,
});

const Rectangle57 = styled("div")({
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  width: `1262px`,
  height: `62px`,
  position: `absolute`,
  left: `78px`,
  top: `384px`,
});

const Patient = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `117px`,
  top: `151px`,
});

const HealthcareNumber = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `365px`,
  top: `149px`,
});

const HealthcareNumber1 = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `758px`,
  top: `153px`,
});

const Action = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1122px`,
  top: `149px`,
});


function ViewSlips() {
  return (
    <ViewSlips1>
      <Rectangle5 src={Rectangle5Image} loading='lazy' alt={"Rectangle 5"}/>
      <Cch>
        {`CCH`}
      </Cch>
      <Photo621766538281941 src={Photo621766538281941Image} loading='lazy' alt={"photo_6217665382819412830_m-removebg-preview 2"}/>
      <BoxThing>  
        <Rectangle50 src={Rectangle50Image} loading='lazy' alt={"Rectangle 50"}/>
        <Rectangle53>
        </Rectangle53>
        <Rectangle51>
        </Rectangle51>
        <Rectangle52>
        </Rectangle52>
        <Rectangle54 src={Rectangle54Image} loading='lazy' alt={"Rectangle 54"}/>
        <Rectangle55>
        </Rectangle55>
        <Rectangle56>
        </Rectangle56>
        <Rectangle57>
        </Rectangle57>
        <Patient>
          {`Patient`}
        </Patient>
        <HealthcareNumber>
          {`Healthcare Number`}
        </HealthcareNumber>
        <HealthcareNumber1>
          {`Healthcare Number`}
        </HealthcareNumber1>
        <Action>
          {`Action`}
        </Action>
    </BoxThing>
    </ViewSlips1>);

  }

export default ViewSlips;

  