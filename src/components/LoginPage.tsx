import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Axios from 'axios';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = async () => {
        const res = await Axios.post(`auth/login`, { username, password })
        if (res.status === 200) {
            localStorage["token"] = res.data.value
            if (process.env.NODE_ENV === "development") {
                window.history.pushState({}, "", "/")
                window.history.go(0)
            }
        }
    }
    return (
        <div>
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
        </div>

    )
}
export default LoginPage;
