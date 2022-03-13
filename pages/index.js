import { createClient} from 'contentful'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Posty from '../components/Posty'

export async function getStaticProps(){
  const configure=createClient({
    space:"ps0iaebwipyk",
    accessToken:"vs1sZNMhCRAT_WaSpaccCDSmoP0ii4Ge_HolkwgBxxA"
  })

  const res=await configure.getEntries({content_type:"blog"})

return {
  props:{dane:res.items}
}

}


export default function Home(props) {
  console.log(props)
 
  return (
    <div >
{props.dane.map(el=>{
  return(
    <Posty key={el.sys.id}  dane={props.dane}/>
  )
})}
    </div>
  )
}
