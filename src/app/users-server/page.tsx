type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await response.json();

  return (
    <ul className="grid grid-cols-3 pl-5">
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          <strong>{user.name}</strong>
        </li>
      ))}
    </ul>
  );
}
