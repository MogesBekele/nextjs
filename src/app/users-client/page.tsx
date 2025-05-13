"use client";
import { useState, useEffect } from "react";
import Loading from "../components/loading";


type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setusers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "http://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setusers(data);
      } catch (error) {
        setError("Failed to fetch users");
        if (error instanceof Error) {
          setError(error.message);
        }
      }finally{
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className=" grid grid-cols-3 pl-5">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
   
    </div>
  );
}
