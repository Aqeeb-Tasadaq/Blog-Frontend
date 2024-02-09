import React from 'react'
import avatar from '../../../assets/avatar.png'
import fb from '../../../assets/a-button.png'
import twitter from '../../../assets/a-button (1).png'
import instagram from '../../../assets/a-button (2).png'
import youtube from '../../../assets/a-button (3).png'

const Author = () => {
  return (
    <section className="author_section">
    <div className="page_width">
      <div className="author_info">
        <div className="inner_author_info">
          <div className="author_profile">
            <img src={avatar} alt="pic" />
            <div className="name">
              <h2>Jonathan Doe</h2>
              <p>Collaborator &amp; Editor</p>
            </div>
          </div>
          <p>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
          <div className="social">
            <img src={fb} alt="fb_logo" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Author