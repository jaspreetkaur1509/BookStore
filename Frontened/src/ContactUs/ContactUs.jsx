import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'

const ContactUs = () => {
  return (
    <>
    <div>
        <Navbar />
        <div className='min-h-screen'>
        <Contact />
        </div>
        <Footer />
    </div>
    </>
  )
}

export default ContactUs