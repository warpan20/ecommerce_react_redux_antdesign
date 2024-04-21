import React , {useEffect} from 'react';
import { Card, Image, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Slices/ProductSlice';


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
      <List
        grid={{ column: 6 }}
        dataSource={products}
        renderItem={(product, index) => (
          <List.Item key={index}>
            <Card
             hoverable
              className="itemCard"
              title={product.title}
            >
              <Image className="itemCardImage" src={product.image} style={{ width: '100%', height: '200px' }} />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default Products;
