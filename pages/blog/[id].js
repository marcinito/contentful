import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { createClient } from "contentful";
import Image from 'next/image'

const client=createClient({
    space:"ps0iaebwipyk",
    accessToken:"vs1sZNMhCRAT_WaSpaccCDSmoP0ii4Ge_HolkwgBxxA"
})

export async function getStaticPaths(){
const res= await client.getEntries({content_type:"blog"})

const paths=res.items.map(el=>{
    return{
        params:{id:el.fields.slug}
    }
})
return {
    paths,
    fallback:false,
}
}

export async function getStaticProps({params}){
    const res=await client.getEntries({content_type:"blog",
"fields.slug":params.id
})
return {
    props:{dane:res.items[0]}
}

}

const Wpisy = ({dane}) => {
    console.log(dane)
const {title,slug,image,description}=dane.fields
   console.log(description)
   
    return ( 
  <>
        <h1>Tutaj beda wpisy</h1>
        <h2>{title}</h2>
        <Image src={`http:${image.fields.file.url}`} width="200" height="200"></Image>
<div>
{documentToReactComponents(description)}
</div>
        </>
       
           
    )
}
 
export default Wpisy;