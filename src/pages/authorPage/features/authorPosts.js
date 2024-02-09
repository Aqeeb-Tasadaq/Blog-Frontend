import React from 'react'
import Card from '../../../global/components/card'
import {CardData} from'../../../global/utils/data'

const AuthorPosts = () => {
  return (
    <section className="post_section">
    <div className="page_width">
      <div></div>
      <div className="cards">
      
      {CardData.map((item, index)=>{
                return(
                    <Card img1={item.img1} name={item.name} img2={item.img2} />
                    )
            })}
            </div>
      <div className="all_post">
        <div></div>
      </div>
    </div>
  </section>
  )
}

export default AuthorPosts