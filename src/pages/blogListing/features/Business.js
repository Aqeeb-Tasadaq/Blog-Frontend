import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../global/components/card";

const Business = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
      axios
        .get(`https://server-nine-lyart-55.vercel.app/get_blogType?blogType=business`)
        .then(function (response) {
          console.log("All data", response);
          setBlogs(response?.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
  let data ="";
    blogs? data=blogs: data=null; // Replace this with your actual data
  
    
    const itemsPerPage = 3; // Number of items to display per page
    const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  
    const loadMoreItems = () => {
      setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
    };
    return (
        <section className="post_section">
          <div className="page_width">
            <br></br>
          <h2>Business Blogs:</h2>
            <div className="cards">
              {/* {CardData.map((item, index)=>{ */}
              {data?.slice(0, visibleItems).map((item, index) => (
            <div key={index}>
              {/* Render your item content here */}
              { <Card
                    key={index}
                    img1={item.image}
                    photo={item.photo}
                    date={item.selectedDate}
                    id={item._id}
                    title={item.title}
                    name={item.author_name}
                    des={item.description}
                    //  img2={item.img2}
                  />}
            </div>
          ))}
            </div>
            <div className="all_post">
              <button onClick={loadMoreItems}>View More</button>
            </div>
          </div>
        </section>
      );
}

export default Business
