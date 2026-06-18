import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getproducts = () => {

  // Step 2 : Hooks
  const [loading, setLoading] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  // Below is the image Url
  const img_url = "https://wangui-hsk.alwaysdata.net/static/images/"

  // Step 3 : function to fetch
  const fetchProducts = async () => {

    // Step 4 
    setLoading("Waiting for products to be fetched...")

    // Step 6
    try {
      const response = await axios.get("http://wangui-hsk.alwaysdata.net/api/getproducts")

      // Step 7
      setProducts(response.data.products)

      // Step 8
      setLoading("")

    }

    catch (error) {
      setLoading("")
      setError(error.message)
    }

  }

  console.log(products)

  // Step 5 
  useEffect(() => { fetchProducts() }, [])
  return (
    <div className='row'>

      <h3 className="text-info">{loading}</h3>

      {/* map the products */}
      {products.map((product) => (
        <div className="col-md-3 justify-content-center mx-4">
          <div className='card shadow'>
            <img src={img_url + product.product_photo} alt="" className='product-img' />

            <h4 className='prodName'>{product.product_name}</h4>

            <p className="prodDesc">{product.product_description.slice(0, 50)}...</p>

            <h2 className="prodCost">Kes {product.product_cost}</h2>
          </div>
        </div>
      ))}

      {/* ABOUT US SECTION */}
      <section  id="aboutus" className="about-section py-5 mt-5">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left: Image/Visual */}
            <div className="col-lg-6">
              <div className="about-image-wrapper">
                <div className="about-image-main">
                  <img
                    src="/images/malyannafarmaboutusphoto.jpg"
                    alt="About Sokogarden"
                    className="img-fluid rounded-4"
                    height="800px"
                    width="800px"
                  />
                  <div className="experience-badge">
                    <span className="exp-number">5+</span>
                    <span className="exp-text">Years of<br />Excellence</span>
                  </div>
                </div>
                <div className="about-image-accent"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <h6 className="text-uppercase fw-bold letter-spacing-2 mb-3 about-label">
                  <i className="bi bi-dash-lg me-2"></i>About Us
                </h6>
                <h2 className="fw-bold display-6 mb-4 about-title">
                  We Provide The Best <span className="gradient-text">Digital Solutions</span> For Your Business
                </h2>
                <p className="text-secondary lead mb-4">
                  At Sokogarden, we believe in cultivating digital experiences that grow your brand.
                  Our team of passionate developers and designers work tirelessly to deliver
                  modern web applications that combine stunning aesthetics with powerful functionality.
                </p>

                {/* Features Grid */}
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="about-feature">
                      <div className="feature-icon">
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Fast Delivery</h6>
                        <p className="small text-secondary mb-0">Quick turnaround times</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="about-feature">
                      <div className="feature-icon icon-green">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Secure & Reliable</h6>
                        <p className="small text-secondary mb-0">Enterprise-grade security</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="about-feature">
                      <div className="feature-icon icon-purple">
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">User Focused</h6>
                        <p className="small text-secondary mb-0">UX-first approach</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="about-feature">
                      <div className="feature-icon icon-orange">
                        <i className="bi bi-headset"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">24/7 Support</h6>
                        <p className="small text-secondary mb-0">Always here to help</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="btn-about">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>

          </div>

          {/* Stats Row */}
          <div className="row mt-5 pt-5 stats-row">
            <div className="col-6 col-md-3">
              <div className="stat-item text-center">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Products Delivered</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item text-center">
                <h3 className="stat-number">120+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item text-center">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Team Members</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item text-center">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>


  )
}

export default Getproducts
