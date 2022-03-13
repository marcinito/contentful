//Ta funkcja mowi dla nexta ile ma podstron stworzyc z danymi id , a juz ma stworzonych dziesiec sciezek*//
export const getStaticPaths=async()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/users")
const data=await res.json()

const paths=data.map(el=>{
    return{
        params:{id:el.id.toString()}

    }
})

return {
    paths,
    fallback:false,
}

}

const Detail = () => {
    return ( <div>
        cos
    </div> );
}
 
export default Detail;