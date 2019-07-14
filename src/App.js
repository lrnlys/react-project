import React from 'react';
import './App.css';
import { Button,Row,Col } from 'antd';

function App() {
  return (
    <div className="App">
      <Row>
        <Col style={{'background':'white',height:'46px'}} ></Col>
      </Row>
      <Row gutter={8}>
        <Col span={6} style={{'background':'red',height:'100px'}}></Col>
        <Col span={8} style={{'background':'yellow',height:'100px'}}></Col>
        <Col span={10} style={{'background':'blue',height:'100px'}}></Col>
      </Row>
    </div>
  );
}

export default App;
