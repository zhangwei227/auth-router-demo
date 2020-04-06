import React, {Component} from 'react';
import { Menu,message } from 'antd';
import {
    HomeOutlined,
    SmileOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;

class NavMenu extends Component{

    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    logout = () => {
        message.success('退出');
        let history = this.props.history;
        // 清除token
        localStorage.removeItem('user_token');
        history.push('/');
    };

    render() {
        return(
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <HomeOutlined />
                    <Link to="/home">home</Link>
                </Menu.Item>
                <Menu.Item key="admin">
                    <SmileOutlined />
                    <Link to="/admin">admin</Link>
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <SettingOutlined />
              多级菜单
            </span>
                    }
                >
                    <Menu.ItemGroup title="菜单1">
                        <Menu.Item key="setting:1"><Link to="/home">子菜单1</Link></Menu.Item>
                        <Menu.Item key="setting:2"><Link to="/sdsfs">子菜单2</Link></Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="菜单2">
                        <Menu.Item key="setting:3"><Link to="/404">子菜单3</Link></Menu.Item>
                        <Menu.Item key="setting:4"><Link to="/admin">子菜单4</Link></Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="logout" onClick={this.logout}>
                    <SmileOutlined />
                    退出
                    {/*<Link to="/">退出</Link>*/}
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(NavMenu);