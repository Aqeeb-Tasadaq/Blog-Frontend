import Layout from "./global/layout";
import HomePage from "./pages/homePage";
import { Route, Router, Routes } from "react-router-dom";
import BlogListing from "./pages/blogListing";
import SinglePost from "./pages/singlePost";
import AuthorPage from "./pages/authorPage";
import CreateBlog from "./pages/createBlogPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import Business from "./pages/blogListing/features/Business";
import Sports from "./pages/blogListing/features/Sports";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/signupPage" exact element={<SignUpPage />} />
        
      
          {/* <Route path='/' exact element= {<LoginPage/>}/>  */}
          <Route path="/home/:id" exact element={<HomePage />} />
          <Route path="/blogListing" exact element={<BlogListing />} />
          <Route path="/singlePost/:id" exact element={<SinglePost />} />
          <Route path="/authorPage" exact element={<AuthorPage />} />
          <Route path="/createBlogPage" exact element={<CreateBlog />} />
          <Route path="/Business" exact element={<Business />} />
          <Route path="/Sports" exact element={<Sports />} />
        </Routes>
    </div>
  );
}

export default App;
