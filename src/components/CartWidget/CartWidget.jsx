import {ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import "./CartWidget.css";

const CartWidget = () =>{

    return(
        <>
        <Badge count={5} showZero className='cont'>
            <ShoppingCartOutlined className="cart"/>
        </Badge>
        </>
    )
}
export default CartWidget;