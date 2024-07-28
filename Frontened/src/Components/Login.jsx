import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
    {/* Email */}
    <div className='mt-4 space-y-2'>
      <span>Email</span><br/>
      <input type='email' placeholder='Enter your Email..' className='w-80 px-3 border rounded-md outline-none py-1' 
      {...register("email", {required:true})}
      />
      <br/>
      {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
    </div>

    {/* password */}
    <div className='mt-4 space-y-2'>
      <span>Password</span><br/>
      <input type='password' placeholder='Enter your password..' className='w-80 px-3 border rounded-md outline-none py-1'
      {...register("password", {required:true })}
       />
       <br/>
       {errors.password && <span  className='text-sm text-red-500'>Password is required</span>}
    </div>

    {/* button */}
    <div className='flex justify-around mt-4'>
      <button type='submit' className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 '>Login</button>
      <p>Not registered?{" "} <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Sign Up</Link></p>
    </div>
    </form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login