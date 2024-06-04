import React from 'react';
import ResponsiveAppBar from '../components/NavBar';
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';

import { Select } from "@mui/material";

import Button from '@mui/material/Button';

import { Box, Stack, TextField } from '@mui/material';

const TextBox = styled("div")({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  height: '55px',
  backgroundColor: 'rgba(243, 243, 243, 1)',
  position: 'relative',
  borderRadius: '5px',
});

const AppendText = styled("div")({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '600px',
  height: '55px',
  position: 'relative',
  borderRadius: '5px', 
});

const MainDescriptor = styled("div")({
  width: '200px',
  height: '50px',
  justifyContent: 'center',
  display: 'flex',
  top: '100px',
  alignItems: 'flex-end',
  fontSize: 24
});

const Descriptor = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  width: '100px',
  height: '55px',
});

const Background = styled("div")({
  height: '1500px',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(230, 247, 255, 1)',
});

const Dropdown = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `5px`,
  width: `830px`,
  height: `57px`,
});


function SlipPatientInfo1() {
  //let navigate = useNavigate();

  return (
    <Background>
      <Stack 
        direction='column' 
        spacing={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%' }}
      >
        <ResponsiveAppBar buttonDisplay="inline"/>
        <MainDescriptor>Slip Information</MainDescriptor>
        <Box sx={{
          bgcolor: 'rgba(201, 223, 234, 1)',
          height: '350px',
          width: '1000px',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <AppendText>
            <Descriptor>
              {`Date:`}
            </Descriptor>
            <TextBox>
              <TextField id="outlined-basic" variant="outlined" />
            </TextBox>
          </AppendText>
          <AppendText>
            <Descriptor>
              {`First Name:`}
            </Descriptor>
            <TextBox>
              <TextField id="outlined-basic" variant="outlined" />
            </TextBox>
          </AppendText>
          <AppendText>
            <Descriptor>
              {`Last Name:`}
            </Descriptor>
            <TextBox>
              <TextField id="outlined-basic" variant="outlined" />
            </TextBox>
          </AppendText>
          <AppendText>
            <Descriptor>
              {`Doctor:`}
            </Descriptor>
            <TextBox>
              <TextField id="outlined-basic" variant="outlined" />
            </TextBox>
          </AppendText>
        </Box>
        <MainDescriptor>Requests</MainDescriptor>
        <Dropdown>
          <Select/>
        </Dropdown>
        <Button variant="contained"onClick={() => {navigate("/USure");}}>Submit Slip</Button>
      </Stack>
    </Background>
  );
}

export default SlipPatientInfo1;
