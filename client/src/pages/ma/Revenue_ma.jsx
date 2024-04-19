import React, { useEffect, useState } from 'react'
import {Card,Button} from 'react-bootstrap';
import img1 from '../../img/food.jpeg';
import img2 from '../../img/room.jpeg';
import {useNavigate} from "react-router-dom";
import Loading from '../../components/Loading'; 
import Navbar_ma from '../../components/Navbar_ma';
import { BaseUrl } from '../../BaseUrl';


const Revenue_ma = () => {
    const [loading, setLoading] = useState(false);
    const [fr,setFr]=useState(0);
    const [roomR,setRoomR]=useState(0);
    const [data,setData]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
      setLoading(true);
      fetch(`${BaseUrl}/api/ma/guests/`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
      }).then(res => res.json())
        .then(data => {
          setData(data);
          setLoading(false);
          console.log(data);
          let food=parseInt(0);
          let room=parseInt(0);
          {
            data.map((item)=>{
              if(item.bill!==NaN)food+=parseInt(item.bill);
              if(item.price!==NaN)room+=parseInt(item.price);
            })
          }
          food=food/30;
          room=room/30;
          food=Math.ceil(food);
          room=Math.ceil(room);
          setFr(food);
          setRoomR(room);
        })
    }, []);

    return (
      <>
     <Navbar_ma/>
  {loading&&<Loading/>}
      <div className='revenue'>
          <Card style={{ width: '18rem' ,margin:'2rem'}}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Revenue of Room</Card.Title>
          <Card.Text>
          <h3 style={{color:'red'}}>Monthly Revenue : {roomR}</h3>
          <h4 style={{color:'orange'}}>Yearly Prediction : {roomR*30} </h4>
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate('/ma/guests')} >Go to Dashboard</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' ,margin:'2rem'}}>
        <Card.Img variant="top" src={img2} height={'190px'} />
        <Card.Body>
          <Card.Title>Revenue of food</Card.Title>
          <Card.Text>
          <h3 style={{color:'red'}}>Monthly Revenue : {fr} </h3>
          <h4 style={{color:'orange'}}>Yearly Prediction : {fr*12}</h4>
      
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate('/ma/guests')} >Go to Dashboard</Button>
        </Card.Body>
      </Card>
      </div>
      </>
    )
  }
  

export default Revenue_ma