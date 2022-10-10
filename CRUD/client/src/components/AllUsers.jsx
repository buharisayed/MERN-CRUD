import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button
} from "@mui/material";
import { useEffect } from "react";
import { getUsers, deleteUser } from "../service/api";
import { useState } from "react";
import {Link} from 'react-router-dom';
const StyledTable = styled(Table)`
  width:75%;
  margin:3rem auto ;
`
const THead = styled(TableRow)`
background:#000033;

& > th {
  color:#fff;
  font-size:1.5rem;
  font-weight:bold;
  
}
`
const TBody = styled(TableRow)`
& > td{
  font-size:1.1rem;
}`

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async(id)=>{
    await deleteUser(id);
    getAllUsers()
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          <TableCell>
            <Button variant="outlined" style={{marginRight:10} } component={Link} to={`/edit/${user._id}`}>Edit</Button>
            <Button variant="contained" color="error" onClick={()=>deleteUserDetails(user._id)} >Delete</Button>
          </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
