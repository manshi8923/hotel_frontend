import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Accordion, Badge, Button, Card} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';


const Bill = ({items}) => {;
    let [count,setCount]=useState(0);
    let [breakfast,setBreakfast]=useState(0);
    let [lunch,setLunch]=useState(0);
    let [dinner,setDinner]=useState(0);
    let [roomprice,setRoomPrice]=useState(0);
    let [total,setTotal]=useState(0);
    const [click,setClick]=useState(false);
    const [params,setParams]=useState("");

   
     


      const handleClick=()=>{
        setClick(!click);
        setCount(parseInt(breakfast)+parseInt(roomprice)+parseInt(dinner))
        setTotal(parseInt(breakfast)+parseInt(roomprice)+parseInt(dinner)+parseInt(lunch));
      }
      const handlePrint=(divName)=>{
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;
    
        document.body.innerHTML = printContents;
    
        window.print();
    
        document.body.innerHTML = originalContents;
      }
      const date=moment().format("DD/MM/YYYY");
      date.toString();
  return (
   
     <MainScreen title={'Your bill is here.'}>
     <Card style={{margin:10}} >
         <Card.Header style={{display:"flex"}} >
             <span
             style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
             <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
              BreakFast
             </Accordion.Toggle>
             </span>
             <input type='Number' value={breakfast} onChange={(e)=>setBreakfast(e.target.value)}/>
             <div>
             </div>
         </Card.Header>
     </Card>
     <Card style={{margin:10}} >
         <Card.Header style={{display:"flex"}} >
             <span
             style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
             <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
              Lunch
             </Accordion.Toggle>
             </span>
             <input type='Number' value={lunch} onChange={(e)=>setLunch(e.target.value)}/>
             <div>
             </div>
         </Card.Header>
     </Card>
     <Card style={{margin:10}}>
         <Card.Header style={{display:"flex"}} >
             <span
             style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
             <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
              Dinner
             </Accordion.Toggle>
             </span>
             <input type='Number' value={dinner} onChange={(e)=>setDinner(e.target.value)}/>
             <div>
             </div>
         </Card.Header>
     </Card>
    
      <Card style={{margin:10}}>
      <Card.Header style={{display:"flex"}} >
             <span
             style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
             <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
              Room Rent
             </Accordion.Toggle>
             </span>
             <input type='Number' value={roomprice} onChange={(e)=>setRoomPrice(e.target.value)}/>
         </Card.Header>
     </Card>
     
     <Card style={{margin:30,background:'#FF9494'}}>
      <Card.Header style={{display:"flex"}} >
             <span
             style={{color: "black",textDecoration: "none",flex: 1,cursor: "pointer",alignSelf: "center",fontSize: 18,}}>   
             <Button size='lg' onClick={()=>{handleClick()}}>Total</Button>
             </span>
             {click&&<h1>{total}</h1>}
         </Card.Header>
     </Card>
     <>
  
  <div id='print' style={{marginLeft:'60px',marginBottom:'40px'}}>
    <h1 style={{textAlign:'center',marginTop:'30px'}}>RENT INVOICE</h1>
    <h3>FROM</h3>
    <h5 style={{fontWeight:'bold'}}>CHARANJIT BAJWA (OYO TOWNHOUSE) &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Date : {date}</h5>
    <h5 style={{fontWeight:'bold'}}>Plot No.32,Moulsari Avenue Rapid Metro Station</h5>
    <h5 style={{fontWeight:'bold'}}>DLF City Phase 3, Gurgram,Haryana-122001</h5>
    <h5 style={{fontWeight:'bold'}}>Ph:- 9149377652</h5>
    <p style={{fontWeight:'bold'}}>GST No: 06AZVPBB205E1ZF</p>
    <h5 style={{marginLeft:'440px',fontWeight:'bold'}}>Invoice No : 2024-25-0001</h5>
    <h5 style={{fontWeight:'bold'}}>Billing to:</h5>
    <h5 style={{fontWeight:'bold'}}>FUNNY MOUSE PRIVATE LIMITED</h5>
    <h5 style={{fontWeight:'bold'}}>PLOT NO MA-32,Moulsari Avenue</h5>
    <h5 style={{fontWeight:'bold'}}>Gurugram Haryana-122002</h5>
    <br/>
    <p style={{fontWeight:'bold'}}>Following is the invoice for the monthly rent fee tor the basement unit HOTEL MA32 32P,Sec-24,Gurugram.</p>
    <table style={{border: '1px solid black',fontWeight:'bold'}}>
      <tr>
      <th style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
        <td>Sr. No.</td>
      </th>
      <th style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
        <td>Particulars</td>
      </th>
      <th style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
        <td>Period</td>
      </th>
      <th style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
        <td>Bill</td>
      </th>
      <th style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
        <td>Total</td>
      </th>
      </tr>
        <tr style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>1</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>Rent</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>01/04/2024 to 30/04/20224</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>{roomprice}</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>{roomprice}</td>
        </tr>
        <tr style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>2</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>Food Bill</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}></td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>{parseInt(breakfast)+parseInt(roomprice)+parseInt(dinner)}</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>{parseInt(breakfast)+parseInt(roomprice)+parseInt(dinner)}</td>
        </tr>
        <tr style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}></td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}></td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>Total payable</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>{total}</td>
          <td style={{padding:'10px',border: '1px solid black',fontWeight:'bold'}}>{total}</td>
        </tr>
    </table>
    <h5 style={{fontWeight:'bold',marginTop:'50px'}}>Kindly issue cheque /RTGS in favour of Charanjit Bajwa after deduction as per the applicable T.D.S Rule</h5>
    <h5 style={{fontWeight:'bold'}}>RTGS DETAILS:-</h5>
    <h5 style={{fontWeight:'bold'}}>Account Name:- CHARANJIT KAUR</h5>
    <h5 style={{fontWeight:'bold'}}>Account Number:- 13061000222246</h5>
    <p style={{fontWeight:'bold'}}>RTGS Code: HDFC0001306</p>
    <h5 style={{fontWeight:'bold'}}>Branch:Sectir -9-D,Chandigarh-160009</h5>
    <h5 style={{fontWeight:'bold'}}>FUNNY MOUSE PRIVATE LIMITED</h5>
    <h5 style={{fontWeight:'bold'}}>Thank You.</h5>
   </div>
   <Button style={{marginLeft:'60px'}} onClick={()=>handlePrint('print')}>Print</Button>
   </>
 </MainScreen>
  )
}


export default Bill