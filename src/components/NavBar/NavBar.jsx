import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {PlusCircleOutlined, ContactsOutlined, IssuesCloseOutlined} from '@ant-design/icons';


const NavBar = () =>{

    return(
        <>
        <nav>
            <a href="../Home" className="title">GamingStore</a>
            
            <ul>
                
                <li>
                    <a  href="../Product"><PlusCircleOutlined /> Products</a>
                </li>
                <li>
                    <a href="../Services"><IssuesCloseOutlined /> Services</a>
                </li>
                <li>
                    <a href="../Contact"><ContactsOutlined /> Contact</a>
                </li>
                <li>
                    <a href="../Cart"><CartWidget/></a>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar;