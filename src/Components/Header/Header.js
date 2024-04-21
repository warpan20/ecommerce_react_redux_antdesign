import { Menu } from 'antd';
import {Link} from 'react-router-dom'
function Header() {
    return (<div style={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}> 
           <Menu mode="horizontal" items={
            [
                {label: "Home"},
                {label: "Electronics"},
                {label: "Men's Clothing"},
                {label: "Women's Clothing"},
                {label: "Jewelery"}
            ]
           }>
        </Menu>
        </div>);
}

export default Header;