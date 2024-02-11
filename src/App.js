import Layout from "./global/layout";
import HomePage from "./pages/homePage";
import { Route, Router, Routes,  } from "react-router-dom";
import BlogListing from "./pages/blogListing";
import SinglePost from "./pages/singlePost";
import AuthorPage from "./pages/authorPage";
import CreateBlog from "./pages/createBlogPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import PrivateRoute from "./privateRoute/privateRoute.js";
import{AuthProvider} from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Layout>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/signupPage" exact element={<SignUpPage />} />
          {/* <Route path="/home/:id" exact element={<HomePage />} /> */}
          {/* <Route path="/blogListing" exact element={<BlogListing />} /> */}
          {/* <Route path="/singlePost/:id" exact element={<SinglePost />} /> */}
          {/* <Route path="/authorPage" exact element={<AuthorPage />} /> */}
          {/* <PrivateRoute path="/createBlogPage" exact element={<CreateBlog />}/> */}
          <Route exact path='/' element={<PrivateRoute/>}>
          <Route path="/createBlogPage" exact element={<CreateBlog />} />
          <Route path="/home/:id" exact element={<HomePage />} />
          <Route path="/blogListing" exact element={<BlogListing />} />
          <Route path="/singlePost/:id" exact element={<SinglePost />} />
          <Route path="/authorPage" exact element={<AuthorPage />} />
          </Route>
          <Route path="/home/:id" exact element={<HomePage />} />
          <Route path="/blogListing" exact element={<BlogListing />} />
          <Route path="/singlePost/:id" exact element={<SinglePost />} />
          <Route path="/authorPage" exact element={<AuthorPage />} />
          {/* <Route path="/createBlogPage" exact element={<CreateBlog />} /> */}
          <Route path="/createBlogPage" exact element={<CreateBlog />} />
          
        </Routes>
        </Layout></AuthProvider>
    </div>
  );
}

export default App;
