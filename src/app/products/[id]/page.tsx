export default async function Product ({ params }: {params:{ id: string}}){

   const {id } = await params
    return (
        <div>
            <h1>Product: {id}</h1>
            <p>This is the product page.</p>
        </div>
    )
}