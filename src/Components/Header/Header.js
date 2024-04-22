import { Menu , Drawer, Badge} from 'antd'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const onMenuClick = (item) => {
        navigate(`/${item.key}`);
      };
    return (<div style={{boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)' }}> 
           <Menu mode="horizontal"  onClick={onMenuClick} items={
            [
                {label: "Home",key: "home"},
                {label: "Electronics",key:"electronics"},
                {label: "Men's Clothing",key:"mensclothing"},
                {label: "Women's Clothing",key:"womensclothing"},
                {label: "Jewelery",key:"jewelery"}
            ]
           }>
        </Menu>
        </div>);
}

export default Header;