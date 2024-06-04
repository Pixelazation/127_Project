import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../components/NavBar';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  {field: 'preview', headerName:'Preview', width:100, sortable:false, 
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        const api = params.api;
        const thisRow = {};
        api
        .getAllColumns()
        .filter((c) => c.field !== "__check__" && !!c)
        .forEach(
          (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        );
        return alert(JSON.stringify(thisRow, null, 4));
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
        const id = params.row.id
        console.log(id);
      };

      return <Button onClick={onClick}><EditIcon/></Button>;
    }
  },
  {field: 'delete', headerName:'Delete', width:100, sortable:false, 
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        const id = params.row.id
        console.log(id);
      };
    return <Button onClick={onClick}><DeleteIcon/></Button>;
    }
  },
];

// const rows = [
//   { id: 1, date: '2023-10-02', firstName:'Levi', lastName:'Cruz',  company:'ELINK', doctor:'M'},
//   { id: 2, date: '2023-10-3', firstName: 'Enrico', lastName: 'Villanueva', company: null, doctor: 'MQ'},		
//   { id: 3, date: '2023-10-9', firstName: 'Hiroshi', lastName: 'Tan', company: 'VA PLATINUM', doctor: 'D'},
//   { id: 4, date: '2023-10-11', firstName: 'Darryl', lastName: 'Tan', company: 'VA PLATINUM', doctor: 'D'},	
//   { id: 5, date: '2023-10-11', firstName: 'Mateo', lastName: 'Rodriguez', company: 'JFC', doctor: 'G'},		
//   { id: 6, date: '2023-10-11', firstName: 'Lara', lastName: 'Reyes', company: 'RUSTANS', doctor: 'A'},
//   { id: 7, date: '2023-10-12', firstName: 'Janelle', lastName: 'Uy', company: 'VA PLATINUM', doctor: 'MN'},		
//   { id: 8, date: '2023-10-14', firstName: 'Enrico', lastName: 'Villanueva', company: 'ELINK', doctor: 'MQ'},		
//   { id: 9, date: '2023-10-17', firstName: 'Rosario', lastName: 'Lagman', company: 'ARCENAS', doctor: 'SR'},		
//   { id: 10, date: '2023-10-22', firstName: 'Bianca', lastName: 'Panganiban', company: 'GLOBAL', doctor: 'L'},		
//   { id: 11, date: '2023-10-22', firstName: 'Avery', lastName: 'Hernandez', company: 'BELO', doctor: 'SN'},		
//   { id: 12, date: '2023-10-22', firstName: 'Rosario', lastName: 'Lagman', doctor: 'SR', company: 'ARCENAS'},		
//   { id: 13, date: '2023-10-26', firstName: 'Kim', lastName: 'Navarro', company: null, doctor: 'SR'},		
//   { id: 14, date: '2023-10-28', firstName: 'Louie', lastName: 'Morales', company: null, doctor: 'MQ'},		
//   { id: 15, date: '2023-10-28', firstName: 'Morgan', lastName: 'Fernandez', company: null, doctor: 'M'},
// ];


export default function HomePage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getRows() {
      const response = await fetch("http://localhost:3000/view");
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

    getRows();
  }, [rows.length])

  return (
    <>
      <ResponsiveAppBar buttonDisplay="inline"/>
      <div style={{ height: '100%', width: '100%', margin: "auto", padding:"4px"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
    );
  } 