import "./footer.css";

function Footer(){

    return(
        <footer className="footer">
            <div className="visitstore">
                <img style={{ width: '200px', height: '200px' }}
                src="https://cdn.sanity.io/images/y346iw48/production/439f7681c104d6d291bb26f4627a7c9326015573-338x338.png?auto=format"></img>
                <div className="text">
                    <h3><strong>Visit Us In A Store Near You</strong></h3>
                    <p>Our stores around the US are open for plant shopping, repotting, curbside pickup, in-person<br></br> workshops, and more.</p>
                    <h5><strong>Find Your Local Store</strong></h5>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <h6><strong>Customer Service</strong></h6>
                    <p>FAQ</p>
                    <p>Shipping & Handling</p>
                    <p>30-Day Guarantee</p>
                    <p>Contact Us</p>
                </div>

                <div className="footer-section">
                    <h6><strong>Resources</strong></h6>
                    <p>Find Your Plant</p>
                    <p>Plant Care Libary</p>
                    <p>Blog</p>
                    <p>Free Online Course</p>
                </div>

                <div className="footer-section">
                    <h6><strong>My Organika</strong></h6>
                    <p>My Account</p>
                    <p>Workshops</p>
                    <p>Track My Order</p>
                    <p>Returns</p>
                </div>

                <div className="footer-section">
                    <h6><strong>Explore</strong></h6>
                    <p>Our Story</p>
                    <p>Locations</p>
                    <p>Careers</p>
                    <p>Corporate</p>
                </div>

                <div className="footer-section">
                    <div className="newsletter-text">
                            <h2><strong>Get The Dirt</strong></h2>
                            <p>Get plant care tips, exclusive offers, & event invites straight to your <br></br> inbox. No spam, ever.</p>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                            <button type="button" id="subscribe" className="btn btn-success">Subscribe</button>
                        </div>
                    </div>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Organika. All rights reserved.</p>
            </div>
      </footer>

        
    );
}

export default Footer;