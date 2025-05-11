type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function MockUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://68209b66259dad2655ad0e66.mockapi.io/users");

  const users = await response.json();

  return (
    <ul className="flex flex-col gap-2">
      {users.map((user: User) => (
        <li  key={user.id} className="mb-2 flex items-center gap-2">
          <strong>{user.name}</strong> 
        </li>
      ))}
    </ul>
  );
}
