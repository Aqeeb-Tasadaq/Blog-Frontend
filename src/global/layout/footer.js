import React from 'react'
import logo from '../../assets/Copyright Info.png'
import mail from '../../assets/mail.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer_page_width">
          <div className="outter_footer">
            <div className="footer_col_one">
              <div className="upper">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias incidunt ipsam optio accusantium molestias, tenetur a ut ratione? Beatae similique repudiandae cum blanditiis, dolor iste quos veritatis quas omnis.</p>
              </div>
              <div className="lower">
                <p><span>Email:</span> info@jstemplate.net</p>
                <p><span>Phone:</span> 880 123 456 789</p>
              </div>
            </div>
            <div className="footer_col_two">
              <div className="quick">
                <h2>Quick Link</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/authorPage">About</a>
                  </li>
                  <li>
                    <a href="/blogListing">Blog</a>
                  </li>
                  <li>
                    <a href="/">Archived</a>
                  </li>
                  <li>
                    <a href="/authorPage">Author</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="category">
                <h2>Category</h2>
                <ul>
                  <li>
                    <a href="/">Lifestyle</a>
                  </li>
                  <li>
                    <a href="/">Technology</a>
                  </li>
                  <li>
                    <a href="/">Travel</a>
                  </li>
                  <li>
                    <a href="/">Business</a>
                  </li>
                  <li>
                    <a href="/">Economy</a>
                  </li>
                  <li>
                    <a href="/">Sports</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_col_three">
              <div className="upper">
                <h2>Weekly Newsletter</h2>
                <p>Get blog articles and offers via email</p>
              </div>
              <div className="news_letter">
                <div className="input_field">
                  <input type="text" name placeholder="Your Email" id />
                  <img src={mail} alt="mail" /></div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="left_side">
              <img src={logo} alt="logo" />
            </div>
            <div className="right_side">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer