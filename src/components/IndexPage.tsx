import * as React from 'react';
import { Layout, Button, Card, Row, Col, Space } from 'antd';
import styles from '../assets/scss/IndexPage.module.scss'
const { Header, Footer, Content } = Layout;


const IndexPage: React.FC<{}> = () => {
    const go = (url: string) => {
        window.history.pushState({}, "", url);
        window.history.go(0);
    }
    return (
        <div>
            <Layout className="layout">
                <Header className={styles.header} >fpeg</Header>
                <Footer style={{ textAlign: 'center' }}>最差实践警告 react redux springboot docker 最差实践警告</Footer>
                <Content style={{ padding: '0 50px' }}>
                    <Card>
                        <Space>
                            <Button onClick={() => go("/login")} className={styles.link_btn}>登陆</Button>
                            <Button onClick={() => go("/WordBase")} className={styles.link_btn}>单词表</Button>
                        </Space>
                    </Card>
                </Content>
                <Footer style={{ textAlign: 'center' }}>最差实践警告 react redux springboot docker 最差实践警告</Footer>
                <Footer className={styles.footer}>
                    © 2009-2020 fpeg.net 版权所有
                    <a href="http://beian.miit.gov.cn/"> 粤ICP备20038201号-1 </a>
                </Footer>
            </Layout>
        </div>
    )
}
export default IndexPage;