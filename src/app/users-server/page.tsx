type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

     const data = await response.json();
}
