import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function total(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}


function ViewRow() {
  const [info, setInfo] = useState({
    SLIP_ID: 1,
    ORDER_DATE: "2023-10-02",
    FNAME: "Levi",
    LNAME: "Cruz",
    DOCTOR: "M",
    COMPANY: "ELINK"
  });
  const [rows, setRows] = useState([
    {id: 0, price: 0}
  ]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(data) {
      const id = params.id?.toString() || undefined;

      if(!id) return;

      console.log(id);
      
      const response = await fetch(
        `http://localhost:3000/slip/${params.id.toString()}/${data}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }

      const record = await response.json();

      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      return record;
    }

    async function loadPageData() {
        const infoArr = await fetchData("info");
        const orders = await fetchData("orders");

        setInfo(infoArr[0]);
        setRows(orders.map(order => {
            return {
                id: order.SERV_NAME,
                price: parseInt(order.PRICE)
            }
        }));
    }

    loadPageData()

    return;
  }, [params.id, navigate]);

  return (
    <>
        <ResponsiveAppBar/>
        <Stack sx={{p:3}} direction="row" alignItems="flex-start" justifyContent="space-evenly" spacing={-10}> 
                <div>
                    <Typography sx={{fontWeight:'bold'}} variant="h4" gutterBottom>Profile</Typography>
                    <Typography sx={{fontSize:'1.3rem'}}>
                        <Stack direction="row" spacing={7}>
                            <div>CS Number: {info.SLIP_ID}</div>                    
                            <div>Date: {info.ORDER_DATE}</div>
                        </Stack>
                        Name: {`${info.LNAME}, ${info.FNAME}`}<br/>
                        Doctor: Dr {info.DOCTOR}<br/>
                        {info.COMPANY != null ? `Company: ${info.COMPANY}` : ""}<br/>
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
                                    <TableCell sx={{fontWeight:'bold'}} align="right">{ccyFormat(total(rows))}</TableCell>
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

