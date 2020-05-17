import React, { useState } from 'react'
import { Input, Button, Card, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from '../assets/scss/LoginPage.module.scss'
import Axios from 'axios';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        const res = await Axios.post(`auth/login`, { username, password })
        if (res.status === 200) {
            localStorage["token"] = res.data.value
            window.history.pushState({}, "", "/")
            window.history.go(0)
        }
    }
    return (
            <div className={styles.login_warpper}>
                <Card className={styles.login} title="用户登录">
                    <Space direction="vertical" align="start">
                        <Input
                            value={username}
                            placeholder="default size"
                            prefix={<UserOutlined />}
                            onChange={(e): void => { setUsername(e.target.value); }}
                        />
                        <Input.Password
                            value={password}
                            placeholder="input password"
                            onChange={(e): void => { setPassword(e.target.value); }}
                        />
                        <Button onClick={login}>登陆</Button>
                    </Space>
                </Card>
            </div>
    )
}
export default LoginPage;
