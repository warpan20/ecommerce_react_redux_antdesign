
import React from 'react';
import { Badge,Card, Image, List, Select, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from '../Slices/SortOrderSlice';
import getSortedItems from '../Utilities/SortItems';
import Header from '../Components/Header/Header'
import { setCartItems } from '../Slices/CartItemsSlice';


const Jewelery = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const sortorder = useSelector((state) => state.sortOrder.sortOrder);
  const loading = useSelector((state) => state.loadingStatus.loadingStatus);
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  return (
    <>
    <Header/>
        <Select style={{width: '13%', margin:'5px'}}
          defaultValue={sortorder}
          onChange={(value)=>{
            dispatch(setSortOrder(value));
          }}
          options={[
            {
              label: "Alphabetically a-z",
              value: "az",
            },
            {
              label: "Alphabetically z-a",
              value: "za",
            },
            {
              label: "Price Low to High",
              value: "lowHigh",
            },
            {
              label: "Price High to Low",
              value: "highLow",
            },
          ]}
        ></Select>
      <List 
      loading={loading}
        grid={{ column: 6 }}
        dataSource={getSortedItems(products,sortorder).filter(product => product.category === 'jewelery')}
        renderItem={(product, index) => (
          <List.Item key={index}>
            <Badge.Ribbon
              className="itemCardBadge"
              text={`$${product.price}`}
              color="pink"
            >
            <Card
            style={{margin:'10px'}}
             hoverable
              className="itemCard"
              title={product.title}
              actions={[<Button onClick={() => {
                //deep copy, now objects int array are modifyable
                let copyOfCartItems = JSON.parse(JSON.stringify(cartItems));
                let productExists = false;

             for (let item of copyOfCartItems) {
              if (item.productId === product.id) {
                    item.quantity = item.quantity+ 1;
                  productExists = true;
                break;
                  }
                 }

                if (!productExists) {
                   copyOfCartItems.push({ productId: product.id, price: product.price, quantity: 1 });
                }
                dispatch(setCartItems(copyOfCartItems));
              }} type="primary">Add to Cart</Button>]} 
            >
              <Image className="itemCardImage" src={product.image} style={{ width: '100%', height: '200px' }} />
            </Card>
            </Badge.Ribbon>
          </List.Item>
        )}
      />
    </>
  );
};

export default Jewelery;
