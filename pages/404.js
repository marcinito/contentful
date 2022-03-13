import React,{useEffect} from 'react'
import {useRouter} from 'next/router'
const Nofound = () => {
    const route=useRouter()



    return ( <div>
        <h1>No page </h1>
    </div> );
}
 
export default Nofound;