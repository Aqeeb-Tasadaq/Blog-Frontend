import React from 'react'
import singlePost1 from '../../../assets/singlePost1.png'
import parse from 'html-react-parser';

const BottomSinglePost = ({blogs}) => {
  let img;
  {blogs?.image? img=`https://server-nine-lyart-55.vercel.app/images/${blogs?.image}`: img=singlePost1  }

  

  return (
    <section className="singlePost">
    <div className="singlePost_page_width">
      <img src={img} alt="pic" />
      <div >
        <h2>Description:</h2>
            <p>{parse(blogs?.long_description ? blogs?.long_description : '')}</p>
          </div>
     
    </div>
  </section>
  )
}

export default BottomSinglePost