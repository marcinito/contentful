export const getStaticPaths=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()

    const paths=data.map(el=>{
        return {
            params:{id:el.id.toString()}
        }
    })


    return {
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
let id=context.params.id
const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const post=await res.json()

return{
    props:{
        posts:post
    }
}
}

import {useRouter} from 'next/router'
const ListDetails = ({posts}) => {
    const route=useRouter()
    const path=route.query.id
console.log(posts)
    return ( 
        
        <>
        <h1>This is post user {path}</h1>
        <p>{posts.body}</p>
        <button onClick={()=>route.push('/list')}>Head back</button>
        </>
     );
}
 
export default ListDetails;