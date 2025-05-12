type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await response.json();

  return (
    <ul className="list-disc pl-5">
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          <strong>{user.name}</strong>
        </li>
      ))}
    </ul>
  );
}
