"use client"
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter()
  console.log("About page loaded")
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <button onClick={() => router.push("/blog/first-blog")}>Go to First Blog</button>
    </div>
  );
}
