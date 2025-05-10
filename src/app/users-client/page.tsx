"use client"
import { useState, useEffect } from "react";

type User ={
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersClient(){
  const [users, setusers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    async function fetchUsers(){
      try {
        const response= await fetch()
        
      } catch (error) {
        
      }
    }
  })


}