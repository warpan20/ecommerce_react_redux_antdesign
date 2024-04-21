import React , {useEffect} from 'react';
import { Badge, Card, Image, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Slices/ProductSlice';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json(); 
        dispatch(setProducts(data));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <List style={{margin:'10px'}}
        grid={{ column: 6 }}
        dataSource={products}
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
              style={{margin:'5px'}}
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
