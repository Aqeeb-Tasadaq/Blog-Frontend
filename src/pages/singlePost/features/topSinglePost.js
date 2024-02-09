import React from 'react'
import profile from '../../../assets/profile mage.png'
import parse from 'html-react-parser';

const TopSinglePost = ({blogs}) => {
  console.log(blogs)
  let date;
  {blogs?.selectedDate? date= `${blogs?.selectedDate}` : date =`"25/12/2023"` }
  return (
    <section className="singlePost_section">
        <div className="singlePost_page_width">
          <div className="singlePost_banner">
            <div className="top">
              <button>{blogs?.title}</button>
              <h1>{parse(blogs?.description ? blogs?.description : 'The Impact of Technology on the Workplace: How Technology is Changing')}</h1>
            </div>
            <div className="blog_profile">
              <div className="profile_pic">
                <img src={profile} alt="" />
                <p>{blogs?.author_name} <span>Blog uploaded on: {date}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TopSinglePost