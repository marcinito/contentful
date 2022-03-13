import Link from 'next/link'
import styles from '../../styles/List.module.css'
export const getStaticProps=async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data= await res.json()

    return{
        props:{dane:data}
    }
}



const List = (props) => {
    console.log(props)
    return ( 
        <div className={styles.container}>
            <h1>List of products to buy</h1>
            <div>{props.dane.map(el=>{
                return(
                    <>
                    <Link href={`/list/${el.id}`}>{el.title}</Link><br></br>
                    </>
                )
            })}</div>
        </div>
     );
}
 
export default List;