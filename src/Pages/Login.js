import {Form, Button, Typography, Checkbox, Input, Card} from 'antd'
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const onSubmit = (item) => {
        navigate(`/home`);
      };
    const loginBoxPos = window.innerWidth > 768 ? 'right': 'center';
    const loginBoxWidth = window.innerWidth > 768 ? '30%': '60%';
    return <div style={{display:'flex', justifyContent: loginBoxPos, width: '100%'}}>
        <Card title="Login Here:" bordered={false} style={{marginTop:'5%',marginRight:'5%',width:loginBoxWidth}}>
        <div style={{ width: '100%',padding:'5px',margin:'5%', display: 'flex',justifyContent:'right'}}> <Form 
    style={{ width:'100%', height:'40%', display:'flex', alignItems:'flex-end', flexDirection:'column', 
    paddingRight:'10px' }} onFinish={onSubmit}>
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
  </Card>
  </div>
}

export default Login;