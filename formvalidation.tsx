import React from 'react';
import { Row,Col,Card,Button, Form, Input,Checkbox } from 'antd';

function Formvalidation() {

  return (
      <div className='app'>
      <header className='app-header'>
          <Row>
          <Col span={8}></Col>

              <Col style={{backgroundColor:"white",textAlign:"center",display:"flex",}}>
              <Card title="Form validation" bodyStyle={{backgroundColor:"pink",}} style={{width:"35vw", height:"60"}}>
                  
                  <Form>
                      <Form.Item label="USERNAME">
                         <Input></Input>
                         </Form.Item>
                      <Form.Item label="password">
                         <Input></Input>
                          </Form.Item>
                      <Form.Item label="confirmpassword">
                         <Input></Input>
                         </Form.Item>
                      <Form.Item label="email">
                         <Input></Input>
                         </Form.Item>
                      <Form.Item label="gender">
                         <Input></Input>
                          </Form.Item>
                          <Form.Item label="state">
                         <Input></Input>
                          </Form.Item>
                          <Form.Item label="country">
                          <Input></Input>
                          </Form.Item>
                          <Form.Item label="pincode">
                         <Input></Input>
                          </Form.Item>
                          <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
                    <Button type='primary' htmlType='submit'>submit</Button>
                  </Form>
            </Card>
              </Col>
              <Col span={8}>col-8</Col>

          </Row>

      </header>

          
      </div>

  );
  
}

export default Formvalidation;
