import React, { useState } from 'react'

export default function Currentbalance() {
    const[accountNo,setAccountNo]=useState('');
    const[user,setUser]=useState('');
   
const balance=async()=>{
    let data=await fetch(`http://localhost:5000/balance/${accountNo}`);
    let result=await data.json()
    setUser(result)
   
    
}
  return (
    <div >
      <div className="card" style={{backgroundColor:'skyblue', margin:'100px 500px',borderRadius:'30px' }}><h1 style={{textAlign:'center'}}>Current Balance</h1></div>
      <div className="card" style={{ margin:'100px 700px'}}><input type="text" placeholder='enter account no.' style={{padding:'10px'}} value={accountNo} onChange={(e)=>{setAccountNo(e.target.value)}}/></div>
      <button style={{ margin:'6px 890px'}} onClick={balance} disabled={accountNo===''?true:false}>Submit</button>
      <div style={{marginLeft:'730px'}}>
      {
        user.result?<h4 style={{padding:"50px"}}>Error: Invalid Account Number</h4>:<h4 style={{padding:"50px"}} hidden={user===''?true:false}>Current Balance is : {user.currentBal}</h4>
      }
      </div>
    </div>
  )
}
