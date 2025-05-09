"use client"
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter()
  console.log("About page loaded")
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <button className="text-white  px-6 py-3 bg-blue-900 rounded-full" onClick={() => router.push("/blog/first-blog")}>Go to First Blog</button>
      <button className="text-white px-6 py-3 bg-blue-900 rounded-full" onClick={() => router.push("/")}>Go Home</button>
    </div>
  );
}
