import React from 'react'
import Header from '../Components/Header'

function View() {
  return (

    <>
 <Header/>
 <div className='container py-5' >
<div className='row my-5' >
  <div className='col-md-6' >
<img style={{width:"70%",marginLeft:"15%"}} className='img-fluid ' src="https://images.apollo247.in/pub/media/catalog/product/7/4/748927056341_1_1.jpg?tr=w-264,q-80,f-webp,dpr-1.25,c-at_max" alt="no img" />
<div className='d-flex justify-content-evenly mt-5' >
  <button className='btn btn-primary' >ADD to wishlist</button>
    <button className='btn btn-success' >ADD to cart</button>

</div>
  </div>
  <div className='col-md-6' >
<h1 className='fw-bold' >Title</h1>
<h3 className='text-danger fw-bolder' >$price</h3>
<h5>Brand:</h5>
<h5 className='fw-bold' >Category:</h5>
<h5>Description:</h5>
<h5 className='my-1 mt-3 fw-bold' > Client review </h5>
{/* duplicate div */}
<div className='mb-3 p-2 border rounded shadow' >
<p><span className='fw-bolder' >Username:
</span>
message
</p>
<p><span className='fw-bolder' >Rating:
</span>
number
</p>
</div>
<div className='mb-3 p-2 border rounded shadow' >
<p><span className='fw-bolder' >Username:
</span>
message
</p>
<p><span className='fw-bolder' >Rating:
</span>
number
</p>
</div>
<div className='mb-3 p-2 border rounded shadow' >
<p><span className='fw-bolder' >Username:
</span>
message
</p>
<p><span className='fw-bolder' >Rating:
</span>
number
</p>
</div>
  </div>


</div>
 </div>
    </>
  )
}

export default View