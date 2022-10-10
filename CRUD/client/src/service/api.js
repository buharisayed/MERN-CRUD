
import axios from 'axios'

const URL = 'http://localhost:8000';




export const addUser = async(data) => {
 try{
    return await axios.post(`${URL}/add`,data)

 }catch(err){
    console.log('Error while loading api',err)
 }
}


export const getUsers = async()=>{
   try{
      return await axios.get(`${URL}/all`)

   }catch(error){
      console.log("Error while retrieving details",error)
   }
}
export const getUser = async(id) =>{
   try{
      return await axios.get(`${URL}/${id}`)

   }catch(error){
      console.log("error while loading get user",error)
   }
}


export const editUser = async(user,id)=>{
   try{
      return await axios.post(`${URL}/${id}`,user)
   }catch(error){
      console.log('error while calling editUser api',error)
   }
}

export const deleteUser = async(id)=>{
   try{
      return await axios.delete(`${URL}/${id}`)
   }catch(error){
      console.log('error while caling delete api',error)
   }
}