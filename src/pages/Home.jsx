import React from 'react'
import Header from "../Components/Header"
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
  return (

    <>
      <Header/>
     <div className='container py-5' > 
      <div className='row my-5' >
        {/* dulipcate */}
        <div className='col-md-3 mb-2' >
{/* card */}
    <Card >
      <Card.Img height={'250px'} variant="top" src="https://m.media-amazon.com/images/I/71x4omQDdcL._AC_UF350,350_QL80_.jpg" />
      <Card.Body className='text-center' >
        <Card.Title className='fw-bold' > Optimum Whey</Card.Title>
      <Link to={'/products/:id/view'} className='btn btn-success' >View more..</Link>
      </Card.Body>
    </Card>

        </div>

      </div>
     </div>
      </>
  )
}

export default Home