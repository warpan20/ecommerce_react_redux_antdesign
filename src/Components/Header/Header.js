import { Menu, Typography } from 'antd'
import {HomeFilled, ShoppingCartOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
      };
    return (<div style={{padding:'5px',boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)', display:'flex' , flexDirection: 'row'
    , alignItems:'center', justifyContent:'space-between'}}> 
           <Menu style={{fontSize:'15px'}}mode="horizontal"  onClick={onMenuClick} items={
            [
                {label: <HomeFilled style={{fontSize:'20px'}}/>,key: "home"},
                {label: "Electronics",key:"electronics"},
                {label: "Men's Clothing",key:"mensclothing"},
                {label: "Women's Clothing",key:"womensclothing"},
                {label: "Jewelery",key:"jewelery"}
            ]
           }>
        </Menu>
        <Typography.Title level={4} >Arpan's Store</Typography.Title>
        <ShoppingCartOutlined style={{fontSize:'30px'}}/>
        </div>);
}

export default Header;