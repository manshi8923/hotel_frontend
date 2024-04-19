import React, { useEffect, useState } from "react";
import MainScreen from '../../components/MainScreen'
import { Button, Card, Form } from "react-bootstrap";
import Loading from '../../components/Loading';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Navbar_oth from "../../components/Navbar_oth";
const SingleRoom = ({match}) => {
  const [roomNo,setRoomNo]=useState("");
  const [book,setBook]=useState("");
  const [cleaningStatus,setCleaningStatus]=useState("");
  const [price,setPrice]=useState("");
  const [bookedOn,setBookedOn]=useState("");
  const [bookedBy,setBookedBy]=useState("");
  const [params,setParams]=useState("");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
    
  useEffect(()=>{
    const id=window.location.pathname.substring(10);
    setParams(id);
  },[])
  const updateHandler=async()=>{
    setLoading(true);
    await fetch(`${BaseUrl}/api/oth/rooms/${params}`,{
      method:"put",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        roomNo:roomNo,
        book:book,
        cleaningStatus:cleaningStatus,
        price:price,
        bookedOn:bookedOn,
        bookedBy:bookedBy
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        toast.error("Error occur while updating a status of a room")
      }
      else{
        toast.success("status of room updated successful!");
        navigate('/ma/rooms');
      }
    })
  }
  return (
   <>
   <Navbar_oth/>
   <MainScreen title={"Update the Status of Room"}>
         <Card>
        <Card.Header>Edit The Room Status</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler} action="/oth/rooms">
            {loading && <Loading />}
            <Form.Group controlId="title">
              <Form.Label>RoomNo</Form.Label>
              <Form.Control
                type="title"
                placeholder="eg : 101"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
            <Form.Label>Checked in status</Form.Label>
            <Form.Control
              as="select"
              value={book}
              onChange={e => {
                setBook(e.target.value);
              }}>
              <option value="">Select the room status</option>
              <option value="Booked">Booked</option>
              <option value="Vacant">Vacant</option>
            </Form.Control>
            </Form.Group>
           
            <Form.Group controlId="content">
              <Form.Label>Current Price</Form.Label>
              <Form.Control
                type="content"
                placeholder="Updating the Price"
                value={price}
                onChange={(e) =>{
                   setPrice(e.target.value)}}
              />
            </Form.Group>

          <Form.Group controlId="content">
          <Form.Label>cleaningStatus</Form.Label>
            <Form.Control
              as="select"
              value={cleaningStatus}
              onChange={e => {
                setCleaningStatus(e.target.value);
              }}>
              <option value="">Select the cleaning status</option>
              <option value="Dirty">Dirty</option>
              <option value="Clean">Clean</option>
            </Form.Control>
          </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Booked On</Form.Label>
              <Form.Control
                type="date"
                placeholder="Booked On"
                value={bookedOn}
                onChange={(e) => setBookedOn(e.target.value)}
              />
            </Form.Group>
            
            
            <Form.Group controlId="content">
              <Form.Label>Booked By</Form.Label>
              <Form.Control
                type="content"
                placeholder="Guest Name"
                value={bookedBy}
                onChange={(e) => setBookedBy(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Room status
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => navigate('/ma/rooms')}
            >
             Go to the Dashboard
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {Date.now()}
        </Card.Footer>
      </Card>
    </MainScreen>
    </>
  )
}

export default SingleRoom