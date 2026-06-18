import React from 'react'

const Carousel = () => {
    return (
        <div id='carouselExample' className='carousel slide row justify-content-center carousel-fade' data-bs-ride='carousel'>

       {/* indicators fot navigation */}
       <div className='carousel-indicators'>
        <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="0" className='active' aria-current="true" aria-label='Slide 1'></button>
        <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="1" aria-label='Slide 2'></button>
        <button type='button' data-bs-target='#carouselExample' data-bs-slide-to="2" aria-label='Slide 3'></button>
       </div>

            {/* slides */}
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={"images/Ofarm.jpeg"} className='d-block w-100 carousel-img' alt="Farm" />
                    
                </div>
                <div className='carousel-item'>
                    <img src={"images/farmer.jpeg"} className='d-block w-100 carousel-img' alt="Farmer" />
                   
                </div>
                <div className='carousel-item'>
                    <img src={"images/market.jpeg"} className='d-block w-100 carousel-img' alt="Market" />
                    
                </div>
            </div>

        {/* controls */}
        <button className='carousel-control-prev' type='button' data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className='carousel-control-prev-icon' aria-hidden='true' type='button' data-bs-target="#carouselExample" data-bs-slide="next" ></span>
        </button>
        <button className='carousel-control-next' data-bs-target="#carouselExample" data-bs-slide="next"> 
            <span className='carousel-control-next-icon'></span>
        </button>

        <button>
            <span></span>
        </button>

        {/* Hello */}
        {/* Hello */}


        </div>
    )
}

export default Carousel