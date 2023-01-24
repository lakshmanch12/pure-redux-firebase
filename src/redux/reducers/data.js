import { database, dbRef } from "../../firebase";
import axios from 'axios';
const Id = dbRef.key;

export const addData = (data) =>{
    database.ref('/register').update({
        [`${Id}`]: data
    })
}
export const getDataAxios = async () => {
    return await axios.get(`https://react-contact-738f6-default-rtdb.firebaseio.com/register.json`)
}
export const getDataById = async (id) => {
    return await axios.get(`https://react-contact-738f6-default-rtdb.firebaseio.com/register/${id}.json`)
}
export const addDataAxios = (data) => {
    axios.post(`https://react-contact-738f6-default-rtdb.firebaseio.com/register.json`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}


export const updateDataAxios = (id, data) => {
    console.log('sdfdfsgddsf', id, data)
    delete data.id;
    console.log('dfgdreer', data)
    axios.put(`https://react-contact-738f6-default-rtdb.firebaseio.com/register/${id}.json`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}

export const deleteDataAxios = (id ) => {
  
    console.log(id,"hwegdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh -----------------------id");
    axios.delete(`https://react-contact-738f6-default-rtdb.firebaseio.com/register/${id}.json`, {})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}



