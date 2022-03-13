import { createClient } from 'contentful';
import {useRouter} from 'next/router'
import Image from 'next/image'

const client=createClient({
    space:"ps0iaebwipyk",
    accessToken:"vs1sZNMhCRAT_WaSpaccCDSmoP0ii4Ge_HolkwgBxxA"
})



export async function getStaticPaths(){
const res=await client.getEntries({content_type:"blog"})
const paths=res.items.map(el=>{
    return {
        params:{id:el.fields.slug},
       
    }

})

return {

        paths:paths,
        fallback:false,
    
}
}

export async function getStaticProps({ params }){
    const res=await client.getEntries({content_type:"blog",
    'fields.slug':params.id
})

return {
    props:{res:res.items}
}
}

const Detail = (props) => {
    console.log(props)
    const navigate=useRouter()
    return ( <div>
        <h1>hello</h1>
        {props.res.map(el=>{
            return(
                <>
                <p>{el.fields.title}</p>
                <Image src={`https:${el.fields.image.fields.file.url}`} width="200" height="200" alt="dwa"></Image>
                </>
            )
        })}
        <button onClick={()=>navigate.push("/")}>Head back</button>
    </div> );
}
 
export default Detail;