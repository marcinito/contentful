import { createClient } from "contentful";
import BlogPost from "../../components/BlogPost";

export async function getStaticProps(){
    const client=createClient({
        space:"ps0iaebwipyk",
        accessToken:"vs1sZNMhCRAT_WaSpaccCDSmoP0ii4Ge_HolkwgBxxA",
    })
    const res=await client.getEntries({content_type:"blog"})

    return {
        props:{res:res.items}
    }
}

const Blogs = (props) => {
    console.log(props)
    return ( <div>
        {props.res.map((el,i)=>{
           
            return(
            <BlogPost key={el.sys.id} dwa={props.res}/>
            )
        })}
    </div> );
}
 
export default Blogs;