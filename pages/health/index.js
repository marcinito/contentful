import Link from 'next/link'

export const getStaticProps=async()=>{
let res= await fetch('https://jsonplaceholder.typicode.com/users')
let data=await res.json()

return {
    props:{dane:data}
}
}


const HealthFood = ({dane}) => {
    console.log(dane)
    return ( <div >
<h1>Welcome here</h1>
<p>Here you Have list people who intake our diet</p>
{
    dane.map(el=>{
        return(
            <>
            <p key={el.id}><Link href={`/health/${el.id}`}><a>{el.name}</a></Link></p>
            </>
        )
    })
}
    </div> );
}
 
export default HealthFood;