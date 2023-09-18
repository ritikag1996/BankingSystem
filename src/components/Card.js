import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card() {
    const navigate=useNavigate();
    const viewCustomer=()=>{
        navigate('/customer')
    }
    const history=()=>{
        navigate('/history')
    }
    const balance=()=>{
      navigate('/balance')
    }
  return (
    <div className="card " style={{ backgroundImage:'url(https://news.okstate.edu/articles/agricultural-sciences-natural-resources/images/cash_app_banner.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'100% 80%'}}>
<div style={{marginTop:'20px'}}><h1>welcome to Local Bank !!</h1></div>
<div style={{width:'400px'}}><h6>It is a Basic banking system for making transaction between users. It can transfer money between multiple accounts, view all Customers's data and view all past transactions happened between different accounts.</h6></div>
<div className="d-flex flex-row justify-content-around" >
        <div className="card" style={{width:'400px', borderRadius:'30px',marginTop:'320px',border:'1px solid black', height:'350px'}}>
        <div style={{margin:'10px',height:'300px'}} onClick={viewCustomer} >
<div style={{marginLeft:'60px'}}><i className="fa fa-users" style={{fontSize:'150px', textAlign: 'center', marginLeft:'30px'}} ></i></div>
<div className="card" style={{borderRadius:'30px',margin:'30px', width:'300px',textAlign: 'center', background:' skyblue',border:'1px solid grey'}}><h1 style={{marginLeft:'0px'}} >View Customer</h1></div>
 <div style={{marginLeft:'40px'}}><h5>View all customer's data</h5></div>
 </div>
 </div>
 <div className="card"  style={{width:'400px',borderRadius:'30px',marginTop:'320px',border:'1px solid black',height:'350px'}}>
 <div  style={{margin:'10px'}} onClick={balance}>
 <div style={{marginLeft:'80px'}}><i className="fa fa-money" style={{fontSize:'150px', textAlign: 'center',marginLeft:'30px'}} ></i></div>
<div className="card" style={{borderRadius:'30px',marginTop:'30px', marginLeft:'50px',width:'300px',background:' skyblue',textAlign: 'center',border:'1px solid grey'}}><h1  style={{marginLeft:'0px'}} >Current Balance</h1></div>
<div style={{marginLeft:'60px', marginTop:'30px'}}><h5>Check current balance</h5></div>
 </div>
 </div>
 <div className="card"  style={{width:'400px',borderRadius:'30px',marginTop:'320px',border:'1px solid black',height:'350px'}}>
 <div style={{margin:'10px'}} onClick={history}>
 <div style={{marginLeft:'90px'}}><i className="fa fa-history" style={{fontSize:'150px', textAlign: 'center', marginLeft:'30px'}} ></i></div>
<div className="card" style={{borderRadius:'30px',width:'300px',marginLeft:'50px',background:' skyblue',marginTop:'30px',textAlign: 'center',border:'1px solid grey'}}><h1  style={{marginLeft:'0px'}} >Transfer History</h1></div>
<div style={{marginLeft:'60px', marginTop:'30px'}}><h5>View all past Transactions</h5></div>
 </div>
  
  </div>
  </div>
    </div>
  )
}
