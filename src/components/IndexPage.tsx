import * as React from 'react';
import styles from '../assets/scss/LoginPage.module.scss'

const IndexPage: React.FC<{}> = () => {
    return (
        <div>
            <div>我是主页</div>
            <a href="/WordBase">WordBase</a>
            <a href="/login">登陆</a>
        </div>
    )
}
export default IndexPage;