import React from 'react';
import ResponsiveAppBar from '../components/NavBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import { Container } from '@mui/material';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function total(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    {id:'LIPID PANEL',price:825},
    {id:'HBA1C',price:770},
    {id:'SGOT',price:303},
    {id:'SGPT',price:303},
    {id:'BUN',price:303},
    {id:'BUA',price:303},
    {id:'CREATININE',price:330},
];

const Total = total(rows);

function ViewRow() {
  return (
    <>
        <ResponsiveAppBar/>
        <Stack sx={{p:3}} direction="row" alignItems="flex-start" justifyContent="space-evenly" spacing={-10}> 
                <div>
                    <Typography sx={{fontWeight:'bold'}} variant="h4" gutterBottom>Profile</Typography>
                    <Typography sx={{fontSize:'1.3rem'}}>
                        <Stack direction="row" spacing={7}>
                            <div>CS Number: 0</div>                    
                            <div>Date: 06/04/24</div>
                        </Stack>
                        Name: Dee, Francis Philippe<br/>
                        Doctor: Dr Dee<br/>
                        Company: Microsoft<br/>
                    </Typography>
                </div>
            <Divider variant="middle" style={{ border: "1px solid green" }} />
            <Stack direction="column">
                <Typography sx={{fontWeight:'bold'}} align="center" variant="h4" gutterBottom>Procedures</Typography>
                <TableContainer component={Paper} sx={{width: 375, p:1 }}>
                        <Table sx={{ width: 350 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Laboratory Request</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow style={{borderTop:'5px solid black', borderBottom:'2px solid white'}} >
                                    <TableCell sx={{fontWeight:'bold'}}>TOTAL</TableCell>
                                    <TableCell sx={{fontWeight:'bold'}} align="right">{ccyFormat(Total)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
        </Stack>
    </>
    );
  }

export default ViewRow;

