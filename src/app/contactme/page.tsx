'use client'
import React, { useState } from 'react'

import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import PageWrapper from '../PageWrapper'
import emailjs from '@emailjs/browser'
import { toast, Toaster } from 'react-hot-toast'

const page = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

const sendMail = () => {
  if (!name || !email || !message) {
    toast.error('Please fill all fields.')
    return
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  }

  emailjs.send(
    'service_n5jo61n',
    'template_kzfcp5h',
    templateParams,
    'GutbYqIMn6kHFv2ZT'
  ).then(() => {
    toast.success('Message sent successfully!')
    setName('')
    setEmail('')
    setMessage('')
  }).catch(() => {
    toast.error('Something went wrong. Please try again.')
  })
}


  return (
    <main className="min-h-screen flex flex-col pb-10">
      <div>
        <Header />
        <Toaster position="top-center" />
        <div className="flex flex-1">
        {/* Main content section */}
        <PageWrapper>
        <div className="flex-1 p-6 md:px-[20vw] pt-[8vh] md:pt-[14vh]">
          {children}
          <div className='flex flex-col  h-full'>
          <div className="text-4xl md:text-6xl font-['Triakis']">Contact Me</div>
            <div className="mt-6 text-xl md:text-2xl font-['Bariol_Regular']">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </div>
            <div className="w-full mt-10 flex justify-center">
  <div className="w-[90vw] max-w-md flex flex-col gap-6 font-['Bariol_Regular']">

  {/* Name Field */}
  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
    <label className="text-right text-xl">Name:</label>
    <input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
    />
  </div>

  {/* Email Field */}
  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
    <label className="text-right text-xl">Email:</label>
    <input
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
    />
  </div>

  {/* Message Field */}
  <div className="grid grid-cols-[90px_1fr] items-start gap-4">
    <label className="text-right pt-2 text-xl">Message:</label>
    <textarea
      rows={5}
      placeholder="Your Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
    />
  </div>

<button
  onClick={sendMail}
  className="mt-4 px-6 text-lg md:text-xl py-3 bg-teal-500 text-white cursor-pointer rounded-full hover:bg-teal-600 transition"
>
  Send Message
</button>
</div>
</div>

        </div>
        </div>
        </PageWrapper>
        {/* Navbar (visible from md and up) */}
        
        <Navbar />
      </div>
      </div>
    </main>
  )
}

export default page