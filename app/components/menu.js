import React, {
	Component
} from 'react';
import {
	Menu,
	Icon,
	Switch
} from 'antd';
import {
	Link
} from 'react-router';
const SubMenu = Menu.SubMenu;
import './menu.css';

class menuBox extends Component {
	constructor(props) {
			super(props);
			this.state = {
				theme: 'dark',
				current: '1',
			};
		}
		/*			state = {
						theme: 'dark',
						current: '1',
					}*/
	changeTheme(value) {
		this.setState({
			theme: value ? 'dark' : 'light',
		});
	}
	handleClick(e) {
		// console.log('click ', e);
		this.setState({
			current: e.key,
		});
	}
	render() {
		return (
			<div>
				<Switch checked={this.state.theme === 'dark'}
		          onChange={this.changeTheme.bind(this)}
		          checkedChildren="Dark"
		          unCheckedChildren="Light"
		        />

		        <Menu
		          theme={this.state.theme}
		          onClick={this.handleClick.bind(this)}
		          style={{ width: 240 }}
		          defaultOpenKeys={['sub1']}
		          selectedKeys={[this.state.current]}
		          mode="inline"
		        >
		          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>同步中心管理</span></span>}>
		            <Menu.Item key="1"><Link to="/">统计</Link></Menu.Item>
		            <Menu.Item key="2"><Link to="/home/fontInfo">字体信息</Link></Menu.Item>
		            <Menu.Item key="3"><Link to="/home/activities">数据源配置</Link></Menu.Item>
		            <Menu.Item key="4"><Link to="/home/dataSource">活动模板配置</Link></Menu.Item>
		          </SubMenu>
		          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>项目管理</span></span>}>
		            <Menu.Item key="5"><Link to="/pro/activitie">统计</Link></Menu.Item>
		            <Menu.Item key="6">Option 6</Menu.Item>
		            <SubMenu key="sub3" title="Submenu">
		              <Menu.Item key="7">Option 7</Menu.Item>
		              <Menu.Item key="8">Option 8</Menu.Item>
		            </SubMenu>
		          </SubMenu>
		          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
		            <Menu.Item key="9">Option 9</Menu.Item>
		            <Menu.Item key="10">Option 10</Menu.Item>
		            <Menu.Item key="11">Option 11</Menu.Item>
		            <Menu.Item key="12">Option 12</Menu.Item>
		          </SubMenu>
		        </Menu>
		    </div>
		)
	}
}
export default menuBox;