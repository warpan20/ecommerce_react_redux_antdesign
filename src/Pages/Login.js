import {Form, Button, Typography, Checkbox, Input} from 'antd'
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const onSubmit = (item) => {
        navigate(`/home`);
      };
    return <div style={{display:'flex', justifyContent:'right'}}>
        
        <div style={{ width:'20%',border: '5px solid #d9d9d9',
    borderColor:'rgba(33, 150, 243, 0.2)',padding:'5px',margin:'5%', display: 'flex',justifyContent:'right'}}> <Form 
    style={{ width:'100%', height:'40%', display:'flex', alignItems:'flex-end', flexDirection:'column'}} onFinish={onSubmit}>
    <Form.Item
      rules={[
        {
          required: true,
          message: "Please enter your email id",
        },
      ]}
      label="Email"
      type="email"
      name="full_name"
    >
      <Input placeholder="Enter your email id.." />
    </Form.Item>
    <Form.Item
      rules={[
        {
          required: true,
          message: "Please enter your password",
        },
      ]}
      type = "password"
      label="Password"
      name="your_name"
    >
      <Input type="password" placeholder="Enter your password.." />
    </Form.Item>
    <Button type="primary" htmlType="submit">
      {" "}
      Login
    </Button>
  </Form>
  </div>
  </div>
}

export default Login;