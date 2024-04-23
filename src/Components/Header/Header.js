import { Menu, Typography } from 'antd'
import {HomeFilled,MobileOutlined,ManOutlined,WomanOutlined,CrownOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import Cart from '../Cart/Cart';
import './Header.css';


function Header() {
    const navigate = useNavigate();
    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
      };

      
    return (<div class="menu" style={{height:'48px',position:'fixed',zIndex: 1,top:'5px',width:'98%', right:'1%', boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)', display:'flex' , flexDirection: 'row'
    , alignItems:'center', backgroundColor:'white',justifyContent:'space-between'}} > 
           <Menu mode="horizontal" onClick={onMenuClick} items={
            [
                {label: <HomeFilled style={{fontSize: '20px'}}/>,key: "home"},
                {label:  <MobileOutlined style={{fontSize: '20px'}}/>,key:"electronics"},
                {label: <ManOutlined style={{fontSize: '20px'}}/>,key:"mensclothing"},
                {label:  <WomanOutlined style={{fontSize: '20px'}}/>,key:"womensclothing"},
                {label:  <CrownOutlined style={{fontSize: '20px'}}/>,key:"jewelery"}
            ]
           }>
        </Menu>
        <Typography.Title class="storename" level={4} style={{marginBottom:'25px'}} >Arpan's Store</Typography.Title>
        <Cart/>
        </div>);
}

export default Header;