import Link from "next/link"
export default function Navigation(){
  return(
  <nav>
   <Link className="mr-4 text-blue-500" href="/">Home</Link>
    <Link className="mr-4 text-blue-500" href="/login">Login</Link>
    <Link className="mr-4 text-blue-500" href="/register">Register</Link>
    <Link className="mr-4 text-blue-500" href="/about">About</Link>
    <Link className="mr-4 text-blue-500" href="/product/1">product 1</Link>
  
  </nav>
  )
}