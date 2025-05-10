import { users } from "../route";

export async function GET(_request:Request, { params}: {params:{id:string}}){
  const {id} =await params
  const user  = users.find((user)=> user.id===parseInt(id))
  return Response.json(user)
}

export async function PUT(request:Request, {params}: {params:{id:string}}){
  const {id} = await params
  const user = await request.json()
  const index = users.findIndex((user)=> user.id===parseInt(id))
  if(index===-1){
    return new Response("User not found", {status:404})
  }
  users[index] = {...users[index], ...user}
  return Response.json(users[index])
}