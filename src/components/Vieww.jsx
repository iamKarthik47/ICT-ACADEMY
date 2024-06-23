import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Adddd from './Adddd'

const Vieww = () => {
  var [users,setUsers]=useState([])
  var [update,setUpdate]=useState(false)
  var [singleValue,setsingleValue]=useState([])


  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then((res)=>{
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err=>console.log(err))
  },[])

  const deleteValue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3005/remove/"+id).
    then((response)=>{
      alert(response.data)
      window.location.reload(false)

    }).catch((err)=>console.log(err))
  }
  

  const updateValues=(val)=>{
    console.log("Update")
    setUpdate(true)
    setsingleValue(val)

  }


  
    
      
      var finalJSX=<TableContainer >
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>NAME :</TableCell>
            <TableCell>AGE :</TableCell>
            <TableCell>POSITION</TableCell>
            <TableCell>SALARY</TableCell>
            </TableRow>
          </TableHead>

           
          <TableBody>
          {users.map((val,i)=>{
            return (
          <TableRow>
            <TableCell>{val.ename}</TableCell>
            <TableCell>{val.eage}</TableCell>
            <TableCell>{val.eposition}</TableCell>
            <TableCell>{val.esalary}</TableCell>
            <TableCell><br/><br/>&nbsp;&nbsp;&nbsp;

              <Button variant='contained' color='warning' onClick={()=>deleteValue(val._id)}> delete</Button>&nbsp;&nbsp;&nbsp;

              <Button variant='contained' onClick={()=>updateValues(val)}>
              update
              </Button>
            </TableCell>
            </TableRow>
            )}
            )}
          </TableBody>
           
        </Table>
      </TableContainer>
      if(update) finalJSX=<Adddd data={singleValue} method='put'/>
      return finalJSX
    
    
}

export default Vieww