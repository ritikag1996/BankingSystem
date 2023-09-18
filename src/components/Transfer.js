import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export default function Transfer() {
    const [user,setUser]= useState([]);
    const [customer,setCustomer]= useState([]);
    const [amount,setAmount]= useState(0);
    const [selectedUser,setSelectedUser]= useState(null);
   
    useEffect(()=>{
        transfer();
        customerList();
        // eslint-disable-next-line
    },[])
    const params=useParams();
    const transfer=async()=>{
      const data= await fetch(`http://localhost:5000/user/${params.id}`);
      let result=await data.json();
    setUser(result);
   

    }
    const customerList= async()=>{
        let data=await fetch("http://localhost:5000/");
        let result=await data.json();
        setCustomer(result);
    }
  
    const updateData=async()=>{
      const selectedUserDetails= await fetch(`http://localhost:5000/customer/${selectedUser}`);
      let result=await selectedUserDetails.json();
      let updatedAmount= Number.parseInt(result.currentBal)+Number.parseInt(amount);
      let data=await fetch(`http://localhost:5000/update/${selectedUser}`,{headers:{"content-type":"application/json"},
    method:"put",
    body:JSON.stringify({currentBal:Number.parseInt(updatedAmount)})});
    let a=await data.json();
    if(a)
    {updateHistory(result.email,"success");
    }
    }
    const updateHistory=async(currentData,status)=>{
      const date=new Date();
     let data=await fetch("http://localhost:5000/historyUpdate",{headers:{"content-type":"application/json"},
    method:"post",
    body:JSON.stringify({sender:user.email,receiver:currentData,amount:amount,status:status, date:date.toLocaleDateString('en-us')+" "+date.toLocaleTimeString()})});
    let result=await data.json();
    console.log(result);
    }
    const navigate=useNavigate();
    const update=async()=>{
      updateData();
      let balance=user.currentBal-amount;
      let data= await fetch(`http://localhost:5000/updateUser/${params.id}`,{headers:{"content-type":"application/json"},
    method:"put",
  body:JSON.stringify({currentBal:balance})});
  let result=await data.json();
  if(result)
  {
    navigate('/customer');
  }
  console.log("updated")
    }
    const handleChange=(e)=>{
      setAmount(e.target.value)
     
    }
    const cancel=()=>{
     updateHistory(selectedUser,"fail")
      navigate('/customer')
    }
  
  
  return (
    <div>
      <div className=" card" style={{backgroundColor:'rgb(201, 200, 200)', margin:'100px 500px',borderRadius:'30px' }}><h1 style={{textAlign:'center'}}>Transfer Money</h1></div>
      <div className="customer" style={{margin:'100px 530px',width:'1500px'}}>
      <ul>
        <li>Name</li>
        <li>Email</li>
        <li>Account No</li>
        <li>Balance</li>
      </ul>
      <ul key={user._id}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.accountNo}</li>
        <li>{user.currentBal}</li>
      </ul>
      </div>
      <div style={{margin:'110px 600px'}}>
      <label style={{marginTop:'10px'}}>Transfer To:</label><br/>
        <select name="user" style={{width:'600px', marginTop:'10px',padding:'6px'}} value={selectedUser} onChange={(e)=>{setSelectedUser(e.target.value)}} >
        <option value="" disabled selected hidden>Choose a User</option>
         {customer.map((item)=>{
            if(item.name!==user.name)
            {
  
           return(
           <option value={item.email}>{item.name} - {item.email}</option>
           )
            }
            return null
           
         })}
        </select>
        <br/>
        <label style={{marginTop:'10px'}}>Amount:</label><br/>
        <input type="number" style={{width:'600px', marginTop:'10px',padding:'5px'}} placeholder='enter amount' value={amount} onChange={handleChange}/> 
        <br/>
        <div  style={{marginTop:'0px'}}>
      {amount>user.currentBal? <p>Entered amount is greater than current balance</p>:null} 
      </div>
        <div style={{margin:'80px',marginLeft:'200px'}}>
        <button  style={{margin:'5px', width:'150px'}} disabled={(selectedUser==null || amount>user.currentBal ||amount==='')?true:false} onClick={update}>Transfer Money</button>
        <button   style={{margin:'5px', width:'150px'}} onClick={cancel}>Cancel Transaction</button>
        </div>
      </div>
   
    </div>
  )
}
