
import React from 'react';
import {Badge, Card, Image, List } from 'antd';
import { useSelector } from 'react-redux';


const MensClothing = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <List style={{margin:'10px'}}
        grid={{ column: 6 }}
        dataSource={products.filter(product => product.category === "men's clothing")}
        renderItem={(product, index) => (
          <List.Item key={index}>
               <Badge.Ribbon
              className="itemCardBadge"
              text={`$${product.price}`}
              color="pink"
            >
            <Card
             hoverable
             style={{margin: '5px'}}
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

export default MensClothing;
