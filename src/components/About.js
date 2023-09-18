import React from 'react'

export default function About() {
  return (
    <div>
      <div className="card" style={{backgroundColor:' skyblue', margin:'60px 500px',borderRadius:'30px' }}><h1 style={{textAlign:'center'}}>About Us</h1></div>
      <div style={{margin:'60px 500px'}}>
        <h1 style={{color:'skyblue'}}>Who we are : -</h1>
        <p>At Local Bank we pride ourselves on delivering an experience unlike any other. Take our commitment to customers, staff and community - the foundation of true community banking. It's our passion to help businesses grow, help make dreams a reality and better our local economy and community. We believe this passion for our community starts with our employees. Encouraging our staff to be involved in the organizations and non-profits who strive to make a difference allows them to connect, engage and better understand community needs. The power of community starts at home with our Local Bank family.</p>
      </div>
      <div className="card d-flex flex-row" style={{margin:'60px 500px', border:'none'}}>
      <div style={{marginLeft:'0px',width:'300px',textAlign:'center'}}><i className="fa fa-lightbulb-o" style={{color:'skyblue',fontSize:'150px', textAlign: 'center', marginLeft:'80px'}} ></i>
      <br/>
      <div style={{marginLeft:'50px'}}>
      <h6>Vision</h6>
      <h7>Our vision is to be the Best Bank in Town!</h7>
      </div>
      </div>
      <div style={{marginLeft:'30px',width:'300px',textAlign:'center'}}><i className="fa fa-handshake-o" style={{color:'skyblue',fontSize:'150px', textAlign: 'center', marginLeft:'80px'}} ></i>
      <br/>
      <div style={{marginLeft:'50px'}}>
      <h6>Mission</h6>
      <h7>Our mission is to create a truly unique, local banking experience for our customers, employees, community and shareholders.</h7>
      </div>
      </div>
      <div style={{marginLeft:'60px',width:'200px',textAlign:'center'}}><i className="	fa fa-pie-chart" style={{color:'skyblue',fontSize:'150px',textAlign: 'center', marginLeft:'80px'}} ></i>
      <br/>
      <div style={{marginLeft:'50px'}}>
      <h6>Core Values</h6>
      <h7>The Local Bank Standard</h7>
      </div>
      </div>
      </div>
    </div>
  )
}
