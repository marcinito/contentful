import Link from 'next/link'
const BlogPost = (props) => {
    console.log(props)
    return ( <div>
{props.dwa.map(el=>{
    return(
    <Link  key={el.sys.id} href={`/blog/${el.fields.slug}`}><a>{el.fields.title}</a></Link>
    )
})}
    </div> );
}
 
export default BlogPost;