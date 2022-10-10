import { InputLabel, Input, FormControl, FormGroup, Typography,styled,Button } from "@mui/material";
import React from "react";
import { editUser, getUser } from "../service/api";
import { useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from "react";

const Container = styled(FormGroup)`
  width:50%;
  margin :5% auto 0 auto;
  & > div {
    margin-top:2rem;
  }
`
const defaultValue = {
  name: '',
  username :'',
  email : '',
  phone : ''

}

const EditUser = () => {
  const [user,setUser]=useState(defaultValue);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    loadUserDetails();

  },[])
  const loadUserDetails = async()=>{
    const response= await getUser(id);
    setUser(response.data)
  }

  const onValueChange=(event)=>{
    
      setUser({...user,[event.target.name]: event.target.value})
      

  }

  const editUserDetails = async()=>{
     await editUser(user,id)
     navigate('/all')
  }


  return (
    <Container>
      <Typography variant="h3">Edit User </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input  onChange={(e)=> onValueChange(e)} name="username" value={user.username}   />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input  onChange={(e)=> onValueChange(e)} name="email"  value={user.email}  />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e)=> onValueChange(e)} name="phone" value={user.phone}  />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> editUserDetails()}>Edit User</Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
