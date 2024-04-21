import React , {useEffect} from 'react';
import { Badge, Card, Image, List, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Slices/ProductSlice';
import { setSortOrder } from '../Slices/SortOrderSlice';
import getSortedItems from '../Utilities/SortItems';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const sortorder = useSelector((state) => state.sortOrder.sortOrder);
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
     <Select style={{width: '13%', margin:'10px'}}
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
        grid={{ column: 6 }}
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
