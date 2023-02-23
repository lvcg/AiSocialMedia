import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import  { preview } from '../assets'
import { getRandomPrompt } from '../utils'; 
import { FormField, Loader } from  '../components';


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, serForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  }); 
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

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
            
          />
        </div>
      </form>      
    </section>
  )
}

export default CreatePost