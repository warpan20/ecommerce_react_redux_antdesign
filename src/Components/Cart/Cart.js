import {Badge,Drawer} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {useState} from 'react';

function Cart(){

    const [cartOpenStatus,setCartOpenStatus] = useState(false);
    return (
        <div>
        <Badge count={3} style={{marginRight:'10px'}}>
            <ShoppingCartOutlined onClick={() => setCartOpenStatus(true)} style={{fontSize:'30px', marginRight:'10px'}}/>
            <Drawer open={cartOpenStatus} onClose={() => setCartOpenStatus(false)}></Drawer>
            </Badge>
            </div>
    );
}

export default Cart;