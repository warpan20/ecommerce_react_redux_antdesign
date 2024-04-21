
import React from 'react';
import { Badge,Card, Image, List, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from '../Slices/SortOrderSlice';
import getSortedItems from '../Utilities/SortItems';


const Jewelery = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const sortorder = useSelector((state) => state.sortOrder.sortOrder);

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
        dataSource={getSortedItems(products,sortorder).filter(product => product.category === 'jewelery')}
        renderItem={(product, index) => (
          <List.Item key={index}>
            <Badge.Ribbon
              className="itemCardBadge"
              text={`$${product.price}`}
              color="pink"
            >
            <Card
            style={{margin:'5px'}}
             hoverable
              className="itemCard"
              title={product.title}
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
