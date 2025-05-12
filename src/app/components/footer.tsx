import React from 'react'

const footer = () => {
  return (
   
    <footer className="bg-gray-900 text-white p-4 mt-12">
      <p>Welcome to the footer section of the browser</p>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default footer