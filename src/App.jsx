import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import { Card } from 'react-bootstrap';

import productData from './product';

const App = () => {
  const firstName = 'YASMINE'; 

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            <Name name={productData.name} />
          </Card.Title>
          <Card.Text>
            <Price price={productData.price} />
            <Description description={productData.description} />
            <Image url={productData.image} />
          </Card.Text>
        </Card.Body>
      </Card>

      <p>Hello, {firstName ? firstName : 'there'}!</p>

      {firstName && <img src={productData.image} alt="Profile" />}
    </div>
  );
};

export default App;
