import {Badge,Drawer, Table} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {useState, useEffect} from 'react';


function Cart(){

    const [cartOpenStatus,setCartOpenStatus] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
        const response = await fetch('https://fakestoreapi.com/carts/user/2');
        const data = await response.json();
        setCartItems(data[0].products);
    };
    useEffect(() => {fetchCartItems()} , []);
    console.log(cartItems);
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
        title:"Quantity"
        , dataIndex: "quantity"
               }
           ]}
           dataSource={cartItems} ></Table>

            </Drawer>
            </Badge>
            </div>
    );
}

export default Cart;