import Navbar from "./Navbar";
import styles from '../styles/Layout.module.css'
const Layout = ({children}) => {
    return ( 
        <div className={styles.container}>
            <Navbar/>
            <div>{children}</div>
        </div>
     );
}
 
export default Layout;