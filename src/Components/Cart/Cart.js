import {Badge,Drawer, Table} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {useState} from 'react';
import { useSelector } from 'react-redux';


function Cart(){

    const [cartOpenStatus,setCartOpenStatus] = useState(false);
    const cartItems = useSelector((state) => state.cartItems.cartItems);

    return (
        <div>
        <Badge count={cartItems.length} style={{marginRight:'10px', cursor:'pointer'}}>
            <ShoppingCartOutlined onClick={() => setCartOpenStatus(true)} style={{fontSize:'30px', marginRight:'10px'}}/>
            <Drawer title="My Cart"open={cartOpenStatus} onClose={() => setCartOpenStatus(false)}>
          <Table  columns={[
               {
        title:"Product Id",
        dataIndex: "productId"
              },
              {
        title:"Price"
        , dataIndex: "price"
               },
               {
                title: "Quantity",
                dataIndex: "quantity"
               }
           ]}
           dataSource={cartItems} ></Table>

            </Drawer>
            </Badge>
            </div>
    );
}

export default Cart;