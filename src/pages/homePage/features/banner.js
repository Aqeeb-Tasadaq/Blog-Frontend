import React from 'react'
import profile from '../../../assets/profile mage.png'

const Banner = () => {
  return (
        <section className="banner_section">
        <div className="page_width">
          <div className="inner_banner">
            <div className="banner_heading">
              <div className="top">
                <button>Technology</button>
                <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
              </div>
              <div className="profile">
                <div className="profile_pic">
                  <img src={profile} alt="" />
                  <p>Jason Francisco</p></div>
                <div className="date">
                  <p>August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Banner