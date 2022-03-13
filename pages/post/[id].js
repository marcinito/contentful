import {useRouter} from 'next/router'

export async function getStaticPaths(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data =await res.json()

    const paths=data.map(el=>{
        return (
            {params:{id:el.id.toString()}}
        )
    })

    return {
        paths,
        fallback:false,
    }

}

export async function getStaticProps({params}){
let id=params.id
const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
const data =await res.json()

return{
    props:{data:data}
}
}
const Detail = ({data}) => {
    const route=useRouter()

    console.log(data)
    return ( <div>
        <p>{data.name}</p>
        <p>{data.username}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <button onClick={()=>route.push('/post')}>Back</button>
    </div> );
}
 
export default Detail;