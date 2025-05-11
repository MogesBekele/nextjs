"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
export default function Navigation(){
  const pathname = usePathname()
  return(
  <nav className="flex justify-center items-center gap-4 p-4">
   <Link className={pathname === "/"? "font-bold mr-4": "text-blue-500 mr-4"} href="/">Home</Link>
    <Link className={pathname === "/about"? "font-bold mr-4": "text-blue-500 mr-4"} href="/about">About</Link>
    <Link className={pathname === "/login"? "font-bold mr-4": "text-blue-500 mr-4"} href="/login">Login</Link>
    <Link className={pathname === "/register"? "font-bold mr-4": "text-blue-500 mr-4"} href="/register">Register</Link>
    <Link className={pathname.startsWith("/products/1")? "font-bold mr-4": "text-blue-500 mr-4"} href="/products/1">product 1</Link>

    
  <SignedIn>
    <SignInButton mode="modal"/>
  </SignedIn>
 <SignedOut>
   <UserButton  />
 </SignedOut>
  </nav>
  )
}