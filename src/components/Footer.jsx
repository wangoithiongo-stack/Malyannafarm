import React from 'react'

const Footer = () => {
    return (
        <footer class="footer" id='about'>
            <div className='container py-2 mt-3'>
                <div className='row g-4'>


                    {/* brand /about website */}
                    <div className='col-md-4 mb-3'>
                         <h5 className="fw-bold mb-3 fs-4">
                            <i className="bi bi-flower1 me-2 text-success"></i>
                            Sokogarden
                        </h5>
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
                            <li><a href="/" className='text-dark text-decoration-none'>Home</a></li>
                            <li><a href="/about"  className='text-dark text-decoration-none'>About</a></li>
                            <li><a href="/addproduct"  className='text-dark text-decoration-none'>Addproduct</a></li>
                            <li><a href="/contact"  className='text-dark text-decoration-none'>Contact</a></li>

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
            <div class="down">
                <p> &copy; {new Date().getFullYear()} malyanna.All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer