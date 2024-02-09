import React, { useState, useEffect } from 'react'
import Banner from './features/banner'
import Advertisement from './features/advertisement'
import Posts from './features/posts'
import Layout from '../../global/layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const param = useParams()
  const [user, setUser]= useState(null)
  console.log(param.id)

  useEffect(()=>{
    axios.get(`https://server-nine-lyart-55.vercel.app/${param.id}`)
   .then(function(response){
     console.log("All data", response)
     setUser(response?.data)
   })
   .catch(function(error)
   {console.log(error)})
 },[])
  return (
    <Layout >
        <Banner/>
        <Advertisement/>
        <Posts/>
        <Advertisement/>
    </Layout>
  )
}

export default HomePage
