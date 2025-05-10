type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("http://jsonplaceholder.typicode.com/users/88");

  const users = await response.json();

  return (
    <ul className="list-disc pl-5">
      {users.map((user: User) => (
        <li key={user.id} className="mb-2">
          <strong>{user.name}</strong> 
        </li>
      ))}
    </ul>
  );
}
