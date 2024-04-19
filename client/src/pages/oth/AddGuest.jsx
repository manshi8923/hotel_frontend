import React ,{useEffect, useState} from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Card, Form } from "react-bootstrap";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Navbar_oth from '../../components/Navbar_oth';
const AddGuest = () => {
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const [days,setDays]=useState("");
  const [arrival,setArrival]=useState("");
  const [depart,setDepart]=useState("");
  const [bill,setBill]=useState(0);
  const [price,setPrice]=useState("");
  const [done,setDone]=useState(false);
  const [allotedRoom,setAllotedRoom]=useState("");
  const navigate=useNavigate();
  
  useEffect(()=>{
    if(arrival!==""){
      var new_date = moment(arrival).add(days, "days").format("YYYY-MM-DD");
      setDepart(new_date);
    }
  },[arrival,days])
  const submitHandler=async()=>{
    setLoading(true);
    await fetch("/api/oth/guests/addguest",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        room:allotedRoom,
        name,
        email,
        address,
        phone,
        days,
        arrival,
        depart,
        price,
        bill
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){

        setError("Error Occured while booking.")
      }
      else{
        setDone(true);
        setError("Booking successful!");
        setLoading(false);
        navigate('/oth/guests');
      }
    })
  }

  return (
  <>
  <Navbar_oth/>
  <MainScreen title={"Add a guest"} >
        <Card>
        <Card.Header>Booking of a new Guest</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler} action='/oth/guests'>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {done&&<ErrorMessage variant='success'>{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="title"
                value={name}
                placeholder="Enter Guest name"
                onChange={(e)=>setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter  Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="Number"
                value={phone}
                placeholder="Enter phone Number"
                onChange={(e)=>setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                value={address}
                placeholder="Enter your Adderss"
                rows={3}  
                onChange={(e)=>setAddress(e.target.value)}
              />
            </Form.Group>
             <Form.Group controlId="content">
              <Form.Label>Arrival date</Form.Label>
              <Form.Control
                type="date"
                value={arrival}
                onChange={(e)=>setArrival(e.target.value)}
                placeholder="Arrival date and Time"
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>No of days for stay</Form.Label>
              <Form.Control
                type="content"
                value={days}
                onChange={(e)=>setDays(e.target.value)}
                placeholder="Enter the days"
              />                                                                                                                                                                                                                                    
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Departure date</Form.Label>
              <Form.Control
              type="date"
              value={depart}
                placeholder="Departure date and time"
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Alloted Room</Form.Label>
              <Form.Control
              type="Number"
              value={allotedRoom}
              onChange={(e)=>setAllotedRoom(e.target.value)}
                placeholder="Room alloted"
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Room Rent</Form.Label>
              <Form.Control
              type="Number"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
                placeholder="Rent of Room"
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Done Booking
            </Button>
            <Button className="mx-2" onClick={()=>navigate('/oth/guests')} variant="danger">
              Go to Guests Dashboard
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  </>
  )
}

export default AddGuest