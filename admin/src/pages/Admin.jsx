import React, { useEffect, useState } from 'react'
import AdminLogin from '../components/Login/AdminLogin'
import AdminHome from '../components/AdminDashboard/AdminHome'

const Admin = () => {

  return (
    <div className='admin-wrapper'>
      <AdminHome/>
    </div>
  )
}

export default Admin