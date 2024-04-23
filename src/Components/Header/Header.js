import { Menu, Typography } from 'antd'
import {HomeFilled} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import Cart from '../Cart/Cart';
import './Header.css';


function Header() {
    const navigate = useNavigate();
    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
      };
    return (<div class="menu" style={{height:'48px', boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)', display:'flex' , flexDirection: 'row'
    , alignItems:'center', justifyContent:'space-between', overflow:'hidden'}}> 
           <Menu style={{fontSize:'15px'}}mode="horizontal" inlineCollapsed = {window.innerWidth<=768} onClick={onMenuClick} items={
            [
                {label: <HomeFilled style={{fontSize:'20px'}}/>,key: "home"},
                {label: "Electronics",key:"electronics"},
                {label: "Men's Clothing",key:"mensclothing"},
                {label: "Women's Clothing",key:"womensclothing"},
                {label: "Jewelery",key:"jewelery"}
            ]
           }>
        </Menu>
        <Typography.Title class="storename" level={4} style={{marginBottom:'25px'}} >Arpan's Store</Typography.Title>
        <Cart/>
        </div>);
}

export default Header;