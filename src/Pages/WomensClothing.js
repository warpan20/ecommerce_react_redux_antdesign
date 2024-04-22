
import React from 'react';
import { Badge,Card, Image, List , Select, Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSortOrder } from '../Slices/SortOrderSlice';
import getSortedItems from '../Utilities/SortItems';
import Header from '../Components/Header/Header'

const WomansClothing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const sortorder = useSelector((state) => state.sortOrder.sortOrder);
  const loading = useSelector((state) => state.loadingStatus.loadingStatus);

  return (
    <>
    <Header/>
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
        loading ={loading}
        grid={{ column: 6 }}
        dataSource={getSortedItems(products,sortorder).filter(product => product.category === "women's clothing")}
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
              style={{margin:'5px'}}
              title={product.title}
              actions={[<Button type="primary">Add to Cart</Button>]} 
            >
              <Image className="itemCardImage" src={product.image} style={{ width: '100%', height: '200px' }} />
            </Card></Badge.Ribbon>
          </List.Item>
        )}
      />
    </>
  );
};

export default WomansClothing;
