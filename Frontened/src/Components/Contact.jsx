import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='border p-6'>
            <h1 className='font-semibold text-lg pb-4'>Contact Us</h1>
            Name:<br />
            <input className='w-80 border rounded-md p-2 outline-none' type='name' placeholder='Enter your name' /><br />
            <p className='mt-2'>Email:</p>
            <input className='w-80 border rounded-md p-2 outline-none ' type='email' placeholder='Enter your email' /><br />
            <p className='mt-2'>Message:</p>
            <textarea className='w-80 border rounded-md p-2 outline-none resize-none' placeholder='Message'/><br/>
            <button className='bg-blue-500 px-3 py-2 rounded-md mt-2 text-white'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Contact