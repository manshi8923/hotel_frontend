import React, { useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import Navbar_ma from '../../components/Navbar_ma';
import moment from 'moment';
const Guests_ma = () => {
  const navigate=useNavigate();
  
    const [error, setError] = useState("");
    const [errfound,setErrFound]=useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [guests,setGuests]=useState([]);
    const [done,setDone]=useState(false);
    useEffect(()=>{

        setLoading(true);
        fetch("/api/ma/guests/",{
            method:"get",
            headers:{
              "Content-Type":"application/json"
            },
          }).then(res=>res.json())
          .then(data=>{
            if(data.error){
            setErrFound(true);
             setError(data.error);
             console.log("error");
            }
            else{
              setLoading(false);
              setDone(true);
              setError("All the list of guests are here");
              setGuests(data);
              setUsers(data);
            }
          })
    },[]);

    const filterBooking=(data)=>{
      const date=moment().format("YYYY-MM-DD");
      date.toString();
      const newData=data.filter(a=>a.arrival==date);
      setGuests(newData);
    }
    const AllBooking=()=>{
      setGuests(users);
    }
    return (
      <>
       <Navbar_ma/>
        <MainScreen title={'All the guests details here'} >
          
            <Link to={'/ma/addguest'}>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Book a room 
                </Button>
            </Link>
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg' variant='danger' onClick={()=>filterBooking(guests)}>
              Today Bookings
            </Button>
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg' variant='success' onClick={()=>AllBooking()}>
              All Bookings
            </Button>
            {errfound&& <ErrorMessage></ErrorMessage>}
            <br/>
            <br/>
            {done && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <Loading></Loading>}
            <div className='guests'>
            {
               guests.map((guest) => {
                return   <Card style={{width:'16rem',margin:10,background:`${guest.color}`}} key={guest._id}>
                <Card.Body>
                  <Card.Title style={{fontSize:'23px',color:'#0000FF'}}>{guest.name.toUpperCase()}</Card.Title>
                  <span className='mb-2' style={{fontSize:'20px'}}>Room Rent : </span>
                  <span style={{fontSize:'23px',color:'#0000FF'}}>{guest.price}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Address : </span>
                  <span style={{fontSize:'23px',color:'#0000FF'}}>{guest.address}</span>
                  <br/>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.email}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Phone : </span>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.phone}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Arrival Date : </span>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.arrival}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Depart Date : </span>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.depart}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Days of stay : </span>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.days}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Allocated Room : </span>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.room}</span>
                  <br/>
                  <span className='mb-2' style={{fontSize:'20px'}}>Food Bill : </span>
                  <span style={{fontSize:'15px',color:'#0000FF'}}>{guest.bill===0?'Not Done':guest.bill}</span>
                </Card.Body>
                <Button href={`/ma/guest/${guest._id}`} style={{margin:13,marginTop:0}}>Update</Button>
                </Card>
             })
         }
            </div>
     </MainScreen>
     </>
    )
}

export default Guests_ma