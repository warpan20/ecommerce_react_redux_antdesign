import React , {useEffect} from 'react';
import { Badge, Card, Image, List, Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Slices/ProductSlice';
import { setSortOrder } from '../Slices/SortOrderSlice';
import getSortedItems from '../Utilities/SortItems';
import Header from '../Components/Header/Header'
import { setLoading } from '../Slices/LoadingSlice';
import { setCartItems } from '../Slices/CartItemsSlice';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const sortorder = useSelector((state) => state.sortOrder.sortOrder);
  const loading = useSelector((state) => state.loadingStatus.loadingStatus);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json(); 
        dispatch(setProducts(data));
        dispatch(setLoading(false));
    };
    //Note: setTimeout the below code is kept to show the loading functionality
    setTimeout(fetchProducts, 1000);
  }, []);

  return (
    <>
    <Header/>
     <Select style={{width: '160px', margin:'5px'}}
          defaultValue={sortorder}
          onChange={(value)=>{
            dispatch(setSortOrder(value));
          }}
          options={[
            {
              label: "letter a-z",
              value: "az",
            },
            {
              label: "letter z-a",
              value: "za",
            },
            {
              label: "price low to high",
              value: "lowHigh",
            },
            {
              label: "price high to low",
              value: "highLow",
            },
          ]}
        ></Select>
      <List
        loading={loading}
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6 }}
        dataSource={getSortedItems(products,sortorder)}
        renderItem={(product, index) => (
          <List.Item key={index}>
              <Badge.Ribbon
              className="itemCardBadge"
              text={`$${product.price}`}
              color="pink"
            >
            <Card
             hoverable
              className="itemCard"
              title={product.title}
              style={{margin:'10px'}}
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

export default Products;
