import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Accordion, Badge, Button, Card} from "react-bootstrap";
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import ReactMarkdown from "react-markdown";
import { Link } from 'react-router-dom';
import Bill from '../oth/Bill'; 
import {toast} from "react-toastify";
import logo from '../../img/logo.png';
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Navbar_oth from '../../components/Navbar_oth';


const GenerateBill = () => {
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");
    const [bill,setBill]=useState([]);
    const [form,setForm]=useState(['Room Price']);
    const navigate=useNavigate();
    const logoutHandler=()=>{
      localStorage.clear();
      navigate('/');
    }
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
   <Navbar_oth/>
    <MainScreen title={'All the menu status are here.'} >
      <Link to={'/oth/generatebill'}>
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
       <Button style={{marginLeft:'30vw'}} variant='danger' onClick={()=>generateBill()} >Generate Bill</Button>
    {click&&<Bill items={form} />}
    </MainScreen>
    
   </>
  )
}

export default GenerateBill