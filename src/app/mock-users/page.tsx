import { revalidatePath } from "next/cache";
import axios from "axios";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function MockUsers() {

  const response = await fetch(
    "https://68209b66259dad2655ad0e66.mockapi.io/users"
  );
  const users = await response.json();
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const response = await axios.post(
      "https://68209b66259dad2655ad0e66.mockapi.io/users",
      { name }, // body goes here as an object
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your_token_here",
        },
      }
    ); 
    const newUser = response.data; 
    revalidatePath("/mock-users");
    console.log(newUser);
  }

  return (
    <div className="py-10">
      <form action={addUser} className="mb-10 flex justify-center">
        <input
          name="name"
          required
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded px-4 py-4"
        />
        <button type="submit" className=" bg-blue-700 px-8 py-4 ml-2">
          Add users
        </button>
      </form>
      <ul className="grid grid-cols-4 gap-4">
        {users.map((user: User) => (
          <li key={user.id} className="mb-2 flex items-center gap-2">
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
