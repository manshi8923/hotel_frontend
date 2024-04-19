import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import Bill_ma from './Bill_ma';
import { useNavigate } from 'react-router-dom';
import Navbar_ma from '../../components/Navbar_ma';
const GenerateBill_ma = () => {
  const navigate=useNavigate();
  const logoutHandler=()=>{
    localStorage.clear();
    navigate('/');
  }
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");
    const [bill,setBill]=useState([]);
    const [form,setForm]=useState([]);
    const menu=[
        "paratha","puri Bhaji","Puri Bhaji","Chole Bhature","Veg Poha","veg macroni","pakoda","Dhokla","Maggie","upma","corn flakes with milk","idle with sambhar","voda sambhar","tea","black tea","coffee","water","cold drink"
    ]
    const dp=[];
    const handleClick=(item)=>{
        dp.push(item);
        toast.success(`${item} is added`)
        setForm([...form,dp]);
      
    }
    const [click,setClick]=useState(false);
    const generateBill=()=>{
        setClick(!click);
    }
  return (
    <>
    <Navbar_ma/>
     {/*} <Link to={'/ma/generatebill'}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
          Generate Bill
        </Button>
      </Link>
     
      {error && <ErrorMessage></ErrorMessage>}
      {loading && <Loading></Loading>}
      {
       menu.map((item)=>{
        return <Card style={{margin:10}} key={item._id}>
        <Card.Header style={{display:"flex"}} >
            <span
            style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
            <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
             {item}
            </Accordion.Toggle>
            </span>
            <div>
            <Button onClick={()=>handleClick(item)}  variant={item.book==='unoccupied'?'danger':'success'} className="mx-2">Add</Button>
        
           
            </div>
            
        </Card.Header>
       
  
    </Card>
       })
       
      }
       <Button style={{marginLeft:'30vw'}} variant='danger' onClick={()=>generateBill()} >Generate Bill</Button> */}
    {<Bill_ma/>}
   
    
   </>
  )
}



export default GenerateBill_ma