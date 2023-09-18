import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Customer() {

    const [customer,setCustomer]=useState([]);
    useEffect(()=>{
        customerList();
       
    },[]);
    const customerList= async()=>{
        let data=await fetch("http://localhost:5000/");
        let result=await data.json();
        setCustomer(result);
    }
     const navigate=useNavigate();
     const transfer=(id)=>{
        navigate(`/transfer/${id}`)
     }
  return (
    <div>
      <div className="card" style={{backgroundColor:' skyblue', margin:'100px 500px',borderRadius:'30px' }}><h1 style={{textAlign:'center'}}>All Customers</h1></div>
      <div className="customer" style={{margin:'100px 320px',width:'1500px'}}><ul>
      <li>S.no</li>
      <li>Name</li>
      <li>Email</li>
      <li>Account No</li>
      <li>Balance</li>
      <li>Operation</li>
      </ul>
      {
        customer.length>0?customer.map((item,index)=>{
            return(
               <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.accountNo}</li>
                <li>{item.currentBal}</li>
                <li><button className="rounded btn btn-primary btn-sm " type="button" onClick={()=>{transfer(item._id)}}>Transfer Money</button></li>
               </ul> 
            )
        }):<h3>No customer Found</h3>
      }
      </div>
      
    </div>
  )
}
