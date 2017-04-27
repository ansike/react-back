import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	Layout,
	Icon
} from 'antd';
const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;
import MenuBox from './components/menu';
import './main.css';
import './antd.min.css';
import './components/menu.css';

class main extends Component {
	render() {
		return (
			<Layout style={{ height: '100vh' }}>
			  <Sider style={{ overflow: 'auto' }}>
			    <div className="logo" />
				{/*  -----------导航部分--------------  */}
			    <MenuBox />
			  </Sider>
			  <Layout>
			    <Header style={{ background: '#fff', padding: 0 }} />
			    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
					<div style={{ padding: 24, background: '#fff', }}>
						{/*  -----------主体内容部分--------------  */}
				      	{this.props.children}
					</div>
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      Askfuture ©2016 Created by ask
			    </Footer>
			  </Layout>
			</Layout>
		)
	}
}

export default main