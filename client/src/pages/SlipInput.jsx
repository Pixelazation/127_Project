import React from 'react';

import ResponsiveAppBar from '../components/NavBar';

import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';

import { Select } from "@mui/material";

import Button from '@mui/material/Button';

import { Box, Stack, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import moment from 'moment/moment';

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
  justifyContent: 'left',
  padding: '15px 0',
  width: '120px',
  height: '55px',
});

const Background = styled("div")({
  height: '1500px',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
});

const Dropdown = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `rgba(243, 243, 243, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.75)`,
  boxSizing: `border-box`,
  borderRadius: `5px`,
  width: `400px`,
  height: `57px`,
});



function isValidDate(dateString, format) {
  return moment(dateString, format, true).isValid();
}

function SlipInput() {
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    fname: "",
    lname: "",
    doctor: "",
    company: ""
  });

  const [isNew, setIsNew] = useState(true);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState("");
  const [requestList, setRequestList] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);

  const columns = [
    {field: 'id', headerName: 'Requests', width: 350 },
    {field: 'delete', headerName:'Delete', width:100, sortable:false, 
      renderCell: (params) => {
        async function onClick(e) {
          e.stopPropagation(); // don't select this row after clicking
          setRequestList(requestList.filter(service => service.id != params.id));
        };
      return <Button onClick={onClick}><DeleteIcon/></Button>;
      }
    },
  ];

  // This method fetches the records from the database.
  useEffect(() => {
    async function getOrders() {
      const response = await fetch("http://localhost:3000/orders");
    
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
    
      var records = await response.json();
    
      setOrders(records);
    }

    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if(!id) return;
      setIsNew(false);
      const response = await fetch(
        `http://localhost:3000/slip/${id}/info`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Slip with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm({
        date: record[0].ORDER_DATE,
        fname: record[0].FNAME,
        lname: record[0].LNAME,
        doctor: record[0].DOCTOR,
        company: record[0].COMPANY
      })
    }

    async function fetchRequests() {
      const id = params.id?.toString() || undefined;
      if(!id) return;
      setIsNew(false);
      const response = await fetch(
        `http://localhost:3000/slip/${id}/orders`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Slip with id ${id} not found`);
        navigate("/");
        return;
      }

      setRequestList(record.map(req => {
        return {id: req.SERV_NAME};
      }))
    }

    getOrders();
    fetchData();
    fetchRequests();
  }, [params.id]);

  function updateForm(value) {
    console.log(form);
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  function orderList() {
    const menu = orders.map(order => {
      return <MenuItem id={order.SERV_NAME} value={order.SERV_NAME}>{order.SERV_NAME}</MenuItem>
    });

    return menu;
  }

  function addRequest() {
    const requests = requestList.map(req => req.id);
    console.log(requests);

    if (requests.includes(currentOrder)) return;

    setRequestList(requestList.concat({id: currentOrder}));
    console.log(requestList);
  }

  // Form submission
  function validateForm() {
    // Non-empty values
    for (let key in form) {
      console.log("doing " + key);
      if (key != "company" && form[key] == "")
        return false;
    }

    // Valid date
    if (!isValidDate(form.date, "YYYY-MM-DD")) 
      return false;

    // At least one submission
    if (requestList.length == 0)
      return false;

    return true;
  }

  async function handleSubmit() {
    if (!validateForm()) {
      console.log("not valid!");
      setDialogOpen(true);
      return;
    }

    const slipInfo = { ...form, requests: requestList.length > 0 ? requestList.map(req => req.id) : []};
    console.log(slipInfo);
    try {
      let response;
      if (isNew) {
        // if we are adding a new record we will POST
        response = await fetch(`http://localhost:3000/slip`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(slipInfo),
        });
      } else {
        // if we are updating a record we will PATCH
        response = await fetch(`http://localhost:3000/slip/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(slipInfo),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({
        date: "",
        fname: "",
        lname: "",
        doctor: "",
        company: ""
      });
      setRequestList([]);
      navigate("/");
    }
  }

  return (
    <>
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
            borderRadius: '10px',
          }}>
            <Stack direction='row' alignItems='center'>
              <Descriptor>
                {`Date`}
              </Descriptor>
              <TextBox>
                <TextField 
                  id="date" 
                  variant="outlined" 
                  placeholder="YYYY-MM-DD" 
                  value = {form.date}
                  onChange={e => updateForm({date: e.target.value})}
                />
              </TextBox>
            </Stack>
            <Stack direction='row' alignItems='center'>
              <Descriptor>
                {`First Name`}
              </Descriptor>
              <TextBox>
                <TextField 
                  id="fname" 
                  variant="outlined" 
                  placeholder='Juan'
                  value = {form.fname}
                  onChange={e => updateForm({fname: e.target.value})}
                />
              </TextBox>
            </Stack>
            <Stack direction='row' alignItems='center'>
              <Descriptor>
                {`Last Name`}
              </Descriptor>
              <TextBox>
                <TextField 
                  id="lname" 
                  variant="outlined" 
                  placeholder='Dela Cruz'
                  value = {form.lname}
                  onChange={e => updateForm({lname: e.target.value})}
                />
              </TextBox>
            </Stack>
            <Stack direction='row' alignItems='center'>
              <Descriptor>
                {`Doctor`}
              </Descriptor>
              <TextBox>
                <TextField 
                  id="doctor" 
                  variant="outlined" 
                  placeholder='Dee'
                  value = {form.doctor}
                  onChange={e => updateForm({doctor: e.target.value})}/>
              </TextBox>
            </Stack>
            <Stack direction='row' alignItems='center'>
              <Descriptor>
                {`Company`}
              </Descriptor>
              <TextBox>
                <TextField 
                  id="company" 
                  variant="outlined" 
                  placeholder='(Optional)'
                  value = {form.company}
                  onChange={e => updateForm({company: e.target.value})}/>
              </TextBox>
            </Stack>
          </Box>

          <MainDescriptor>Requests</MainDescriptor>
          <Stack direction='row' justifyContent='space-evenly' spacing={2}>
            <Dropdown>
              <Select
                labelId="order-select"
                id="order-select"
                value={currentOrder}
                label="Order"
                onChange={event => setCurrentOrder(event.target.value)}
                MenuProps={{ PaperProps: { sx: { maxHeight: 100 } } }}
              >
                {orderList()}
              </Select>
            </Dropdown>
            <Button variant="contained" onClick={() => {addRequest()}}>Add</Button>
          </Stack>


          <div style={{ height: '300px', width: '100%', margin: "auto", padding:"10px 300px 0px 300px"}}>
            <DataGrid
              rows={requestList}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
          
          <Button variant="contained"onClick={() => handleSubmit()}>Submit Slip</Button>
        </Stack>
      </Background>
      
      <Dialog
          open={dialogOpen}
      >
          <DialogTitle id="alert-dialog-title">
              {"Error"}
          </DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
              You have missing required fields or an invalid date
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={() => setDialogOpen(false)} autoFocus>
              Back to Form
          </Button>
          </DialogActions>
        </Dialog>
    </>
  );
}

export default SlipInput;
