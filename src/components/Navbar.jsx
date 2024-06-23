import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h1'>
                CRUD

            </Typography>&nbsp;&nbsp;
            <Button variant='contained'>
                <Link to='/add'>
                Add</Link>
            </Button>&nbsp;&nbsp;&nbsp;

            <Button variant='contained'>
                <Link to='/v'>
                View</Link>
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>
                Update
            </Button>&nbsp;&nbsp;&nbsp;

            <Button variant='contained'>
                Delete
            </Button>&nbsp;&nbsp;&nbsp;
        </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbar