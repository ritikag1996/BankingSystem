import React from 'react'



export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className=" img carousel-inner">
    <div className="carousel-item active " data-bs-interval="10000">
    
    <img style={{height:'500px'}} src="https://static6.depositphotos.com/1005404/646/i/450/depositphotos_6467437-stock-photo-building-bank.jpg" className="d-block w-100" alt="logo"/>
    {/* <img style={{height:'400px'}} src="" className="d-block w-100" alt="logo"/> */}
      {/* <div className="carousel-caption d-none d-md-block">
        <h1>We are just the bank you need</h1> */}
      {/* </div> */}
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img style={{height:'500px'}} src="https://www.readersdigest.ca/wp-content/uploads/2022/08/money-saving-tips-piggy-bank.jpg" className="d-block w-100" alt="logo"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>We are just the bank you need</h1>

      </div>
    </div>
    <div className="carousel-item">
    <img style={{height:'500px'}} src="https://news.okstate.edu/articles/agricultural-sciences-natural-resources/images/cash_app_banner.jpg" className="d-block w-100 " alt="logo"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Safe Money Transfer</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
