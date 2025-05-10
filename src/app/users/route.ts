export const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];
export async function GET(request: Request) {
  return users;
}
