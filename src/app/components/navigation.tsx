"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"
export default function Navigation(){
  const pathname = usePathname()
  return(
  <nav>
   <Link className={pathname === "/"? "font-bold mr-4": "text-blue-500"} href="/">Home</Link>
    <Link className="mr-4 text-blue-500" href="/login">Login</Link>
    <Link className="mr-4 text-blue-500" href="/register">Register</Link>
    <Link className="mr-4 text-blue-500" href="/about">About</Link>
    <Link className="mr-4 text-blue-500" href="/products/1">product 1</Link>
  
  </nav>
  )
}