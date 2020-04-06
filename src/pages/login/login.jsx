import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './login.less';
import {withRouter} from "react-router-dom";
import {reqLogin} from "../../api";

class Login extends Component {


    componentWillMount() {
        let history = this.props.history;
        if (localStorage.getItem('user_token')) {
            history.push('/home');
        } else {
            return true;
        }
    }

    render() {

        const onFinish = values => {
            console.log('Received values of form: ', values);

            reqLogin(values.username, values.password).then(response => {
                let history = this.props.history;
                let location = this.props.location;
                if(response.data.token){
                    let {from} = location.state || {from: {pathname: "/home"}};
                    // 获取token存储到localstage
                    localStorage.setItem('user_token', response.data.token);
                    history.replace(from);
                }else{
                    message.error('登录失败，请重新');
                    let {from} = location.state || {from: {pathname: "/"}};
                    history.replace(from);
                }
            }).catch();
        };

        return (
            <div className="login">
                <header className="login-header">
                    <h1>React-route-auth-demo</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: '请输入用户名!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: '请输入密码!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

export default withRouter(Login);