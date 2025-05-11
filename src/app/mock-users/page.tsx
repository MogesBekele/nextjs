type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function MockUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    "https://68209b66259dad2655ad0e66.mockapi.io/users"
  );
  const users = await response.json();
  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const response = await fetch(
      "https://68209b66259dad2655ad0e66.mockapi.io/users",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your_token_here",
        },

        body: JSON.stringify({
          name,
        }),
      }
    );
    const newUser = await response.json();
    users.push(newUser);
  }

  return (
    <div className="py-10">
      <form className="mb-10 flex justify-center">
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
