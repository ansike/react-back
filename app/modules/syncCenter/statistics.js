import React, {
	Component
} from 'react';
var path = require('path');
import './statistics.less';

import {
	Table,
	Input,
	Icon,
	Button,
	Popconfirm
} from 'antd';

class EditableCell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
			editable: false,
		}
		console.log(__dirname + "assdssssaa")
	}
	handleChange(e) {
		const value = e.target.value;
		this.setState({
			value
		});
	}
	check() {
		this.setState({
			editable: false
		});
		if (this.props.onChange) {
			this.props.onChange(this.state.value);
		}
	}
	edit() {
		this.setState({
			editable: true
		});
	}
	render() {
		const {
			value,
			editable
		} = this.state;
		return (
			<div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange.bind(this)}
                onPressEnter={this.check.bind(this)}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check.bind(this)}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit.bind(this)}
              />
            </div>
        }
      </div>
		);
	}
}

class statistics extends React.Component {
	constructor(props) {
		super(props);
		let that = this;
		this.columns = [{
			title: 'name',
			dataIndex: 'name',
			width: '30%',
			render: (text, record, index) => (
				<EditableCell value={text} onChange={this.onCellChange(index, 'name').bind(this)} />
			),
		}, {
			title: 'age',
			dataIndex: 'age',
		}, {
			title: 'address',
			dataIndex: 'address',
		}, {
			title: 'operation',
			dataIndex: 'operation',
			render: (text, record, index) => {
				return (
					this.state.dataSource.length > 1 ?
					(
						<div>
							<Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
				              <a href="#">Delete</a>
				            </Popconfirm> 
				            < span className = "ant-divider" / >
							<a href="#" onClick={function(){that.showCurRowMessage(record)}} >获取数据</a>
						</div>
					) : null
				);
			},
		}];

		this.state = {
			dataSource: [{
				key: '0',
				name: 'Edward King 0',
				age: '32',
				address: 'London, Park Lane no. 0',
			}, {
				key: '1',
				name: 'Edward King 1',
				age: '34',
				address: 'London, Park Lane no. 1',
			}],
			count: 2,
		};
	}

	showCurRowMessage(record) {
		alert("key:" + record.key + " name:" + record.name + " age:" + record.age + " address:" + record.address);
	}

	onCellChange(index, key) {
		return (value) => {
			const dataSource = [...this.state.dataSource];
			dataSource[index][key] = value;
			this.setState({
				dataSource
			});
		};
	}
	onDelete(index) {
		const dataSource = [...this.state.dataSource];
		dataSource.splice(index, 1);
		this.setState({
			dataSource
		});
	}
	handleAdd() {
		const {
			count,
			dataSource
		} = this.state;
		const newData = {
			key: count,
			name: `Edward King ${count}`,
			age: 32,
			address: `London, Park Lane no. ${count}`,
		};
		this.setState({
			dataSource: [...dataSource, newData],
			count: count + 1,
		});
	}
	render() {
		const {
			dataSource
		} = this.state;
		const columns = this.columns;
		return (
			<div>
		        <Button className="editable-add-btn" onClick={this.handleAdd.bind(this)}>Add</Button>
		        <Table bordered dataSource={dataSource} columns={columns} />
		    </div>
		);
	}
}

export default statistics;