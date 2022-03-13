import Link from 'next/Link'
const BlogPost = (props) => {
    console.log(props)
    return ( <div>
{props.dwa.map(el=>{
    return(
    <Link href={`/blog/${el.fields.slug}`}><a>{el.fields.title}</a></Link>
    )
})}
    </div> );
}
 
export default BlogPost;