import React from 'react';
import ResponsiveAppBar from '../components/NavBar';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from "react-router-dom";

import CCH from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';

import {
  styled
} from '@mui/material/styles';

import {Select} from "@mui/material";

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

const SlipPatientInfo11 = styled("div")({
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

const SlipInformation = styled("div")({
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
  width: `188px`,
  height: `52px`,
  position: `absolute`,
  left: `296px`,
  top: `100px`,
});

const Requests = styled("div")({
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
  width: `104px`,
  height: `52px`,
  position: `absolute`,
  left: `296px`,
  top: `540px`,
});

const TopBar = styled("div")({
  height: `80px`,
  width: `100vw`,
  position: `absolute`,
  backgroundColor: 'rgba(146, 193, 240, 1)',
  zIndex: '-5',
});

const SubmitSlip = styled("div")({
  display: 'flex',
  justifyContent:'center',
  position: 'absolute',
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  top: '950px',
  height: '50px',
  width: '300px',
});

const Logo = styled("img")({
  height: `58px`,
  width: `53.83px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `12px`,
  top: `9px`,
  zIndex: '1',
});

const CCHText = styled("div")({
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
  zIndex: '1',
});

const GreyBox = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: `rgba(206, 206, 206, 1)`,
  border: `0.25px solid rgba(42, 92, 118, 1)`,
  boxSizing: `border-box`,
  borderRadius: `3px`,
  width: `830px`,
  height: `350px`,
  position: `absolute`,
  left: `302px`,
  top: `150px`,
});

const Date = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `120px`,
  height: `52px`,
  position: `absolute`,
  left: '20px',
});

const FirstName = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `120px`,
  height: `52px`,
  position: `absolute`,
  left: '20px',
});

const LastName = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `120px`,
  height: `52px`,
  position: `absolute`,
  left: '20px'
});

const Doctor = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Droid Sans`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `120px`,
  height: `36px`,
  position: `absolute`,
  left: '20px',
});

const TextField0 = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `3px`,
  width: `500px`,
  height: `58px`,
});

const TextField1 = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `3px`,
  width: `500px`,
  height: `58px`,
});

const TextField2 = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `3px`,
  width: `500px`,
  height: `58px`,
});

const TextField3 = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `3px`,
  width: `500px`,
  height: `58px`,
});

const Dropdown = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `3px`,
  width: `830px`,
  height: `57px`,
  position: `absolute`,
  top: '590px',
});

const BoxThing = styled("div")({
  display: `flex`,
  position: `fixed`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  alignContent: 'center',
  padding: `0px`,
  boxSizing: `border-box`,
  width: '1440px',
  height: '10px',
});

const Back = styled("div")({
  display: 'flex',
  position: 'absolute',
  height: '80px',
  width: '70px',
  top: '0px',
  right: '0px',
});

function SlipPatientInfo1() {

  let navigate = useNavigate();

  return (
    <SlipPatientInfo11>
      {/* <TopBar/> */}
      <ResponsiveAppBar buttonDisplay="inline"/>
      <div></div>
      {/* <Back>
        <Button variant="contained"onClick={() => {navigate("/");}}>Back</Button>
      </Back>

      <Logo src={CCH} loading='lazy' alt={"Logo"}/>
      <CCHText>
        {`CCH`}
      </CCHText> */}
        
      <BoxThing>
        <SlipInformation>
          {`Slip Information`}
        </SlipInformation>
        <Requests>
          {`Requests`}
        </Requests>
        <SubmitSlip>
          <Button variant="contained"onClick={() => {navigate("/USure");}}>Submit Slip</Button>
        </SubmitSlip>

        <GreyBox>
          <TextField0>
            <TextField id="outlined-basic" variant="outlined" />
            <Date>
              {`Date:`}
            </Date>
          </TextField0>

          <TextField1>
            <TextField id="outlined-basic" variant="outlined" />
            <FirstName>
              {`First Name:`}
            </FirstName>
          </TextField1>   

          <TextField2>
            <TextField id="outlined-basic" variant="outlined" />
            <LastName>
              {`Last Name:`}
            </LastName>
          </TextField2>

          <TextField3>
            <TextField id="outlined-basic" variant="outlined" />
            <Doctor>
              {`Doctor:`}
            </Doctor>
          </TextField3>

        </GreyBox>
        <Dropdown>
          <Select/>
        </Dropdown>
      </BoxThing>
    </SlipPatientInfo11>);

  }

export default SlipPatientInfo1;

  