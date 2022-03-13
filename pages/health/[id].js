
export const getStaticPaths=async()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/users")
const data= await res.json()

const paths=data.map(el=>{
    return{
        params:{id:el.id.toString()}
    }
})

return {
    paths,
    fallback:false
   
}
}

export const getStaticProps=async(context)=>{
    console.log(context)
    let id=context.params.id
    const res= await fetch('https://jsonplaceholder.typicode.com/users/'+ id)
    const data= await res.json()
    return {
        props:{dane:data}
    }
}

const Users = ({dane}) => {
    console.log(dane)
    return ( 
        <div>
         
                  <>
                  <p>{dane.username}</p>
                  <p>{dane.address.street}</p>
                  <p>{dane.address.city}</p>
                  <p>{dane.address.zipcode}</p>
                  <p>{dane.address.geo.lng}</p>
                  </>
       
        </div>
     );
}
 
export default Users;