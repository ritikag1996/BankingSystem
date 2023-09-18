import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


export default function History() {
  const [pageData,setPageData]=useState([]);
const [page,setPage]=useState(1);
const [pageCount,setPageCount]=useState(0);
const [historyDetail, setHistoryDetail]=useState('');


const limit=5;
  useEffect(()=>{
    history();
  },[page])
useEffect(()=>{
  const pageDataCount= Math.ceil(historyDetail.length/5);
  setPageCount(pageDataCount)
  if(page)
  {
   
    const skip=limit*page;
    const dataskip=historyDetail.slice(skip-limit,skip);
    setPageData(dataskip)
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[historyDetail])

  const history=async()=>{
   let data=await fetch('http://localhost:5000/history')
   let result=await data.json();
   setHistoryDetail(result)

  }
  //handle next
  const handleNext=()=>{
    if(page===pageCount)
    {
      return page
    }
    else{
      setPage(page+1)
    }

  }

  // handle previous
  const handlePrevious=()=>{
    if(page===1)
    {
      return page
    }
    else{
      setPage(page-1)
    }
  }
  console.log(pageCount)
 

  return (
    <div>'
     <div> 
      <div className="card" style={{backgroundColor:' skyblue', margin:'60px 500px',borderRadius:'30px' }}><h1 style={{textAlign:'center'}}>Transfer History</h1></div>
      <div className="customer" style={{margin:'100px 300px',width:'1500px'}}>
      
        <ul>
      <li>S.no</li>
      <li>sender</li>
      <li>Receiver</li>
      <li>Amount</li>
      <li>status</li>
      <li style={{width:'250px'}}>Date & Time</li>
    
      </ul>
      {
       pageData.length>0?pageData.map((item,index)=>{
            return(
               <ul key={item._id}>
                <li>{page===1?index+1:(index+1)+((page-1)*limit)}</li>
                <li>{item.sender}</li>
                <li>{(item.receiver)?item.receiver:"null"}</li>
                <li>{item.amount}</li>
                <li>{item.status}</li>
                <li style={{width:'250px'}}>{item.date}</li>
               </ul> 
            )
        }):<h3>No customer Found</h3>
      }
      </div>
      <div className='d-flex' style={{position:'fixed', bottom:'200px', right:'200px'}}>
    <Pagination >
   
      <Pagination.Prev onClick={handlePrevious} disabled={page===1?true:false}/>
      
      { Array(pageCount).fill(null).map((element,index)=>{
        return(
          <Pagination.Item active={page===index+1?true:false} onClick={()=>setPage(index+1)}>{index+1}</Pagination.Item>
        )
      })}
      
      <Pagination.Next onClick={handleNext} disabled={page===pageCount?true:false}/>
    </Pagination>
    </div>
    </div>
    
    </div>
  )
}
