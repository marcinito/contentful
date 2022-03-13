import Link from 'next/Link'

const Posty = ({dane}) => {
      console.log(dane)
    return ( <div>
{dane.map(el=>{
    return(
        <>
        <Link key={el.sys.id} href={`/${el.fields.slug}`}><a>{el.fields.title}</a></Link>
        </>
    )
})}
    </div> );
}
 
export default Posty;