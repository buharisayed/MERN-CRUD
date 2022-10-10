import React from 'react'
import{AppBar,Toolbar,styled} from '@mui/material'
import {Link} from 'react-router-dom'
const Header = styled(AppBar)`
background: black;
padding:1rem;
margin-bottom:1rem;
`;
const Tabs = styled(Link)`
font-size:1.5rem;
margin-right:1rem;
color:white;
text-decoration : none;
`;
const Navbar = () => {
  return (
    
    <Header position='static'>
        <Toolbar>
            <Tabs to='/' >MERN CRUD</Tabs>
            <Tabs to='/all' >All Users</Tabs>
            <Tabs to='/add' >Add Users</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar