import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import axios from 'axios';
import Layout from '../../global/layout'

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState("");
  const [authorName, setAuthorName] = useState('');
  const [blogType, setblogType] = useState(null);
  const [image, setimage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());


  const formData = new FormData();
    formData.append("blogType", blogType);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("long_description", longDescription);
    formData.append("author_name", authorName);
    formData.append("selectedDate", selectedDate.toLocaleDateString());

  const submitBlogFrom = () => {
      axios.post('https://server-nine-lyart-55.vercel.app/create_blog', formData)
          .then(function (response) {
              console.log(response);
              alert("Blog save Successfully")
          })
          .catch(function (error) {
            alert(error.response.data.msg);
              console.log(error);
          });
  }


  return (
    <Layout>
        <div className='createBlog'>
    <header>
      <h1>Blog Form</h1>
    </header>

    <form>
    <label for="cars">Select Type of Blog:</label>
     <select id="blog" name="blog" onChange={(e) => setblogType(e.target.value)}>
     <option value="business">Business</option>
      <option value="sports">Sports</option>
      <option value="health">Health</option>
      <option value="science">Science</option>
      <option value="others">Others</option>
    </select>
      <label>Title:</label>
      <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description:</label>
      <input type="text" placeholder='Enter Small Description' maxlength="50" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Author Name:</label>
      <input type="text" placeholder='Enter Author Name' value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
      {/* <label>Author Photo:</label>
          <input type="file" accept="image/*" onChange={(e) => setphoto(e.target.files[0])}/> */}
      <label>Post Date:</label>
      
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
      />
      {/* <p>Selected Date: {selectedDate.toLocaleDateString()}</p> */}

      <label>Blog Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setimage(e.target.files[0])}/>
      <label>Long Description:</label>
       <ReactQuill theme="snow" value={longDescription} onChange={setLongDescription} className='creat_post_editor'  />
       <br></br>
       
      <button type="submit" onClick={submitBlogFrom}>Submit</button>

    </form>
  </div>
  </Layout>
  )
}

export default CreateBlog
