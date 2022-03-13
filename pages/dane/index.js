import Link from 'next/link'

export const getStaticProps=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await res.json()

    return {
        props:{dane:data}
    }
}


const Dane = (props) => {
    console.log(props)
    return ( <div>
{props.dane.map(el=>{
    return(
        <>
    <Link href={`/dane/${el.id}`}><a>{el.name}</a></Link>
        </>
    )
})}
    </div> );
}
 
export default Dane;