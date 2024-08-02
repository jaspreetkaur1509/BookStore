import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users ")
            toast.success("LogOut sucessfully!");
            window.location.reload();
            setTimeout(() => {
            },3000);
        } catch (error) {
            toast.error("Error: " + error.message);
            setTimeout(() => {               
            }, 2000);
        }
    }
  return (
   <>
   <button className='px-5 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
   </>
  )
}

export default Logout