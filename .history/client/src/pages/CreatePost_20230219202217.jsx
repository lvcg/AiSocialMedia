// This is the page where the user can create a post
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Assets and utils 
import  { preview } from '../assets'
import { getRandomPrompt } from '../utils'; 
import { FormField, Loader } from  '../components';

//CreatePost component
const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  }); 

  // State for generating image
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImg = async () => {
    if(form.prompt) {
      try {
        setGeneratingImg(true);
        // Fetching the API
        const response = await fetch ('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        })

        // Getting the response
        const data = await response.json();
        // Setting the state
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`})

      // try catch error
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt');
    }
  }

  // Submitting the form
  const handleSubmit = async () => {
    e.preventDefault();

    if(form.prompt && form.photo) {
      setLoading(true);

      try {
        const response = await fetch ('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',  
          },
          body: JSON.stringify(form),
        })
        await response.json();
        navigate('/');
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      
    }
  }

  // Handling the change
  const handleChange = (e) => {
    setForm.Form({ ...form, [e.target.name]: e.target.value})

  }

  // Handling the surprise me button
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt })
  }

  // Returning the JSX
  return (
    <section className="max-w-7xl mx-auto">
       <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create Post </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create a collection of imaginative and visually stunning images generated by DALL-E AI</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
            labelName="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-container"
               />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
               />
          )}

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate Image'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">Feel free to share your masterpiece 🎉</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ?  'Sharing...' : 'Share'}
          </button>
        </div>
      </form>      
    </section>
  )
}

export default CreatePost