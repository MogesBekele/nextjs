"use client"

import { useEffect } from "react"

const Error = ({error}: {error:Error}) => {
 useEffect(()=>{
  console.log("Error component mounted")
  console.log(error)
 },[error])

 return (
  <div>
   <h1 className="text-2xl font-bold mb-4">Error</h1>
   <p className="text-red-500">{error.message}</p>
  </div>
 )
}

export default Error
