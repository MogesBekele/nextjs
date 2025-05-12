import React from 'react'

const Footer = () => {
  return (
   
    <footer className="bg-gray-900 text-white p-4 mt-12">
   

      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-500">Twitter</a>
          <a href="#" className="text-blue-500">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer