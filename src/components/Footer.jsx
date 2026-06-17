import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-success text-light mt-5'>
            <div className='container py-4'>
                <div className='row'>


                    {/* brand /about website */}
                    <div className='col-md-4 mb-3'>
                        <h5 className='fw-bold'>Sokogarden App</h5>
                        <p className='small'>
                            Bulding Modern Web Application With User Experience
                        </p>
                    </div>



                    {/* links  */}
                    <div className='col-md-4 mb-4'>
                        <h5 className='fw-bold'> 
                            Quick links
                        </h5>
                        <ul className='list-unstyled'>
                            <li><a href="/" className='text-light text-decoration-none'>Home</a></li>
                            <li><a href="/about"  className='text-light text-decoration-none'>About</a></li>
                            <li><a href="/addproduct"  className='text-light text-decoration-none'>Addproduct</a></li>
                            <li><a href="/contact"  className='text-light text-decoration-none'>Contact</a></li>

                        </ul>
                    </div>



                    {/* website contact infomation */}
                    <div className='col-md-4 mb-3  text-shadow: 0 0 10px);'>
                        <h5> Contacts</h5>
                        <p>Email: @malyannafarm.com</p>
                        <p>phone: +254 757 821 094</p>
                        <p>Location: Riara</p>
                    </div>

                </div>
                
            </div>

            {/* this the buttom bar */}
            <div className='bg-success text-center py-2'>
                <p> &copy; {new Date().getFullYear()} malyanna.All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer