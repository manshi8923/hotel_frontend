import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Card } from "react-bootstrap";
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Navbar_oth from '../../components/Navbar_oth';

const Rooms = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [occupied,setOccupied]=useState(0);
  const [unoccupied,setUnoccupied]=useState(0);
  const navigate=useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch("/api/oth/rooms/", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true);
          setErrorMessage(data.error);
          toast.error("Error occur in server side")
        }
        else {
          setLoading(false);
          setRooms(data);
          const unoccupy = data.filter(item => item.book === 'Vacant');
          const occupy=data.filter(item=>item.book==='Booked');
          setUnoccupied(unoccupy.length);
          setOccupied(occupy.length);
          toast.success("Updated status of room",{
            toastId:'success1'
          })
        }
      })
  }, []);
  
  return (
    <>
    <Navbar_oth/>
    <MainScreen title={'All the Rooms status are here.'} >
        <Card style={{ margin:10, width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item variant='success'>{occupied} Booked Rooms</ListGroup.Item>
            <ListGroup.Item variant='danger'>{unoccupied} Vacant Rooms</ListGroup.Item>
          </ListGroup>
        </Card>
        <Link to={'/oth/addguest'}>
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
            Book a Room for a guest
          </Button>
        </Link>
        {error&&<ErrorMessage>{errorMessage}</ErrorMessage>}
        {loading && <Loading></Loading>}
        <div className='guests'>
        {
          rooms.map((room) => {
            return <Card style={{width:'16rem',margin:10,background:`${room.color}`}} key={room._id}>
              <Card.Body>
                <Card.Title style={{fontSize:'23px',color:'#0000FF'}}>{room.roomNo}</Card.Title>
                <span className='mb-2' style={{fontSize:'20px'}}>CleaningStatus : </span>
                <span style={{fontSize:'20px',color:'#0000FF'}}>{room.cleaningStatus}</span>
                <br/>
                <span style={{fontSize:'20px'}}>Price of Room : </span><span style={{fontSize:'20px',color:'#0000FF'}}>{room.price}</span>
                <br/>
                {room.bookedBy!==""&&<span style={{color:'#0000FF',fontSize:'18px'}}>Booked on {" " +room.bookedOn + " "}  by {room.bookedBy}</span>}
              </Card.Body>
              <Button href={`/oth/room/${room._id}`} style={{margin:10}} >Update</Button>
              </Card>
          })
        }
        </div>
      </MainScreen>
      </>
    )
}
  

export default Rooms