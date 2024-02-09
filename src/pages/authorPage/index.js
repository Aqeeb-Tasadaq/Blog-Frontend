import React from 'react'
import Author from './features/author'
// import AuthorPosts from './features/authorPosts'
import Layout from '../../global/layout'
const AuthorPage = () => {
  return (
    <Layout>
        <Author/>
        {/* <AuthorPosts/> */}
    </Layout>
  )
}

export default AuthorPage