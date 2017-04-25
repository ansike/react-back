import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import MenuBox from './components/menu';
import AppComponent from './components/Tab1';
import './main.css';
import './antd.min.css';
import './components/menu.css';

import {
	Router,
	Route,
	hashHistory
} from 'react-router';
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

class App extends Component {
	render() {
		return (
			<Layout style={{ height: '100vh' }}>
			  <Sider style={{ overflow: 'auto' }}>
			    <div className="logo" />
			    <MenuBox />
			  </Sider>
			  <Layout>
			    <Header style={{ background: '#fff', padding: 0 }} />
			    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
			      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
			        ghf
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

ReactDOM.render( < App / > , document.getElementById('content'));