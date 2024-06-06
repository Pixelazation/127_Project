import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ResponsiveAppBar from '../components/NavBar';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function HomePage() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [toggle, toggler] = useState(false);

  // Functions
  async function getRows() {
    const response = await fetch("http://localhost:3000/slip");
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.error(message);
      return;
    }
    var records = await response.json();
  
    records = records.map(record => {
      return {
        id: record.SLIP_ID, 
        date: record.ORDER_DATE, 
        firstName: record.FNAME, 
        lastName: record.LNAME,  
        company: record.COMPANY, 
        doctor: record.DOCTOR
      }
    });

    setRows(records);
  }

  async function deleteRow(id) {
    const response = await fetch(`http://localhost:3000/slip/${id}`, {
      method: "DELETE",
    });

    if (!response) {
      const message = `An error occurred: ${response.statusText}`;
      console.error(message);
      return;
    } else {
      getRows();
    }
  }

  const columns = [
    {field: 'preview', headerName:'Preview', width:100, sortable:false, 
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();
          navigate(`/ViewRow/${params.row.id}`);
        };
      return <Button onClick={onClick}><PreviewIcon/></Button>;
      }
    },
    {field: 'id', headerName: 'CS No.', width: 75 },
    {field: 'date', headerName: 'Date', width: 120,},
    {field: 'firstName', headerName: 'First Name', width: 150 },
    {field: 'lastName', headerName: 'Last Name', width: 150 },
    {field: 'company', headerName: 'Company', width: 150 },
    {field: 'doctor', headerName: 'Doctor', width: 150 },
    {field: 'edit', headerName:'Edit', width:100, sortable:false, 
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          navigate(`/EditFormInfo/${params.row.id}`);
        };
  
        return <Button onClick={onClick}><EditIcon/></Button>;
      }
    },
    {field: 'delete', headerName:'Delete', width:100, sortable:false, 
      renderCell: (params) => {
        async function onClick(e) {
          e.stopPropagation(); // don't select this row after clicking
          await deleteRow(params.row.id);
        };
        return <Button onClick={onClick}><DeleteIcon/></Button>;
      }
    },
  ];

  useEffect(() => {
    getRows();
    console.log("effect!");
  }, [rows.length, toggle])

  return (
    <>
      <ResponsiveAppBar buttonDisplay="inline"/>
      <div style={{ height: '600px', width: '100%', margin: "auto", padding:"4px"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  )
} 