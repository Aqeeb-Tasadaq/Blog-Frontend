import React, { useState, useEffect } from 'react'
import TopSinglePost from './features/topSinglePost'
import BottomSinglePost from './features/bottomSinglePost'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../../global/layout'

const SinglePost = () => {
  const param = useParams()
  const [blogs, setBlogs]= useState(null)

  useEffect(()=>{
    axios.get(`http://localhost:4000/get_blogs/${param.id}`)
   .then(function(response){
     console.log("All data", response)
     setBlogs(response?.data)
   })
   .catch(function(error)
   {console.log(error)})
 },[])
  console.log("single post data", blogs)
  return (
    <Layout>
      <TopSinglePost blogs={blogs && blogs}/>
      <BottomSinglePost blogs={blogs && blogs}/>
    </Layout>
  )
}

export default SinglePost