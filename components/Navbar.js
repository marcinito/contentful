import Link from 'next/Link'
import styles from '../styles/Nav.module.css'
const Navbar = () => {
    return ( <div className={styles.navbar}>
        <div className={styles.logoImg}><img className={styles.logoZdj} src='./logocheck.png' width="100" height="100"></img></div>
        
        <ul className={styles.ulNav}>
            <li className={styles.liNav}><Link href="/"><a>Home</a></Link></li>
            <li className={styles.liNav}><Link href="/health"><a>Health Food</a></Link></li>
            <li className={styles.liNav}><Link href="/list"><a>List</a></Link></li>
            <li className={styles.liNav}><Link href="/post"><a>Post</a></Link></li>
            <li className={styles.liNav}><Link href="/blog"><a>Blogs</a></Link></li>
           
        </ul>
    </div> );
}
 
export default Navbar;