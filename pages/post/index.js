import Link from "next/link"

export async function getStaticProps(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data =await res.json()

    return {
        props:{data:data}
    }
}


const Post = ({data}) => {
    console.log(data)
    return ( 
        <div>
{data.map(el=>{
    return(
       
            <Link key={el.phone} href={`/post/${el.id}`}><a>{el.name}</a></Link>
      
    )
})}
        </div>
     );
}
 
export default Post;