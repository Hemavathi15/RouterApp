import React from 'react'
import { Outlet } from 'react-router-dom'
import Contact from '../pages/Contact'

const ContactLayout = () => {
  console.log("Contactlayout")
  return (
    <div>
      {/* <Contact/> */}
        <Outlet/>
    </div>
  )
}

export default ContactLayout