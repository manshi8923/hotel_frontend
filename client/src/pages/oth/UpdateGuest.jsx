import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Card, Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Loading from '../../components/Loading';
import {toast} from "react-toastify";
import moment from "moment";
import Navbar_oth from '../../components/Navbar_oth';
const UpdateGuest = () => {
  const [loading,setLoading]=useState(false);
  const [done,setDone]=useState(false);
  const [ErrorMessage,setErrorMessage]=useState("");
  const [params,setParams]=useState("");
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const [days,setDays]=useState("");
  const [arrival,setArrival]=useState("");
  const [depart,setDepart]=useState("");
  const [bill,setBill]=useState("");
  const [price,setPrice]=useState("");
  const [status,setStatus]=useState("");

  useEffect(()=>{
    const id=window.location.pathname.substring(11);
    setParams(id);
    console.log(id)
    if(arrival!==""){
      var new_date = moment(arrival).add(days, "days").format("YYYY-MM-DD");
      setDepart(new_date);
    }
  },[arrival,days])
  const updateHandler=async()=>{
    setLoading(true);
    await fetch(`${BaseUrl}/api/oth/guests/${params}`,{
      method:"put",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        email:email,
        address:address,
        phone:phone,
        days:days,
        arrival:arrival,
        depart:depart,
        bill:bill,
        price:price,
        status:status,
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        toast.error("Error occur while updating a status of a room")
      }
      else{
        toast.success("Status updated successful!");
        navigate('/oth/guests');
      }
    })
  }
 
   
  return (
   <>
   <Navbar_oth/>
   <MainScreen title={"Update the Status of Guest"}>
  <Card>
 <Card.Header>Edit The Status of guest</Card.Header>
 <Card.Body>
   <Form onSubmit={updateHandler} action="/oth/guests">
     {loading && <Loading/>}
     {done && (
       <ErrorMessage variant="success">{"Status Updated Succesfully"}</ErrorMessage>
     )}
     <Form.Group controlId="title">
       <Form.Label>Name</Form.Label>
       <Form.Control
         type="title"
         placeholder="Enter the title"
         value={name}
         onChange={(e)=>setName(e.target.value)}
       />
     </Form.Group>

     <Form.Group controlId="title">
       <Form.Label>Email</Form.Label>
       <Form.Control
         type="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         placeholder="Enter the title"
       />
     </Form.Group>
     <Form.Group controlId="title">
       <Form.Label>Address</Form.Label>
       <Form.Control
         type="title"
         placeholder="Enter the Address"
         value={address}
         onChange={(e)=>setAddress(e.target.value)}
       />
     </Form.Group>
     <Form.Group controlId="title">
       <Form.Label>Phone</Form.Label>
       <Form.Control
         type="Number"
         placeholder="Enter your phone Number"
         value={phone}
         onChange={(e)=>setPhone(e.target.value)}
       />
     </Form.Group>
     <Form.Group controlId="content">
       <Form.Label>Arrival Date</Form.Label>
       <Form.Control
         type='date'
         asp-format="{0:yyyy-MM-dd}"
         placeholder="Enter the content"
         value={arrival}
         onChange={(e)=>setArrival(e.target.value)}
       />
     </Form.Group>
     <Form.Group controlId="content">
       <Form.Label>Days</Form.Label>
       <Form.Control
         type='text'
         placeholder="Enter the days"
         value={days}
         onChange={(e)=>setDays(e.target.value)}
       />
     </Form.Group>
     <Form.Group controlId="title">
       <Form.Label>Depart Date</Form.Label>
       <Form.Control
         type='date'
         placeholder="Enter the content"
         value={depart}
       />
     </Form.Group>
     <Form.Group controlId="content">
       <Form.Label>Room Price</Form.Label>
       <Form.Control
         type="content"
         value={price}
         placeholder="Updating the Price"
         onChange={(e)=>setPrice(e.target.value)}
       />
     </Form.Group>

     <Form.Group controlId="content">
        <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={e => {
              setStatus(e.target.value);
            }}>
            <option value="">Select the current status of guest</option>
            <option value="CheckedIn">CheckedIn</option>
            <option value="CheckedOut">CheckedOut</option>
          </Form.Control>
          </Form.Group>
          {console.log(status)}
     <Form.Group controlId="content">
       <Form.Label>Food Bill</Form.Label>
       <Form.Control
         type="content"
         value={bill}
         placeholder="Updating the Price"
         onChange={(e)=>setBill(e.target.value)}
       />
     </Form.Group>
     {loading && <Loading size={50} />}
     <Button variant="primary" type="submit">
       Update Room status
     </Button>
     <Button
       className="mx-2"
       variant="danger"
       onClick={() =>navigate(`/oth/bill/${params}`)}
     >
     Generate Bill
     </Button>
   </Form>
 </Card.Body>

 <Card.Footer className="text-muted">
   Updated on - {new Date().toLocaleDateString()}
 </Card.Footer>
</Card>
</MainScreen>
  </>
  
)
}



export default UpdateGuest