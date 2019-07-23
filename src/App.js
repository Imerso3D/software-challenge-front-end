
import React, { Component } from 'react';
import './App.css';
import ScanContainer from "./ScanContainer";
import { createScanData, createUserData } from './data'
import { Layout, Menu, Icon, Modal, Button, Input, Dropdown } from 'antd'
const { Header, Sider, Content } = Layout

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      collapsed: false,
      byName: false,
      byElevation: false,
      byUser: true,
      visible: false,
      visible1: false,
      scans: createScanData(),
      users: createUserData(),
      iUser: null,
      iUserId: null,
      iSName: null,
      iSeleMax: null,
      iSeleMin: null,
      iSuser: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  //  Check how many  users exisit already 
  componentDidMount() {
    this.setState({
      iUserId: this.state.users.length,
    })
  }
  //To hide and show the navbar
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  //Shows the model to create user
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  // Push data in the states
  handleOk = e => {
    const data = {
      name: this.state.iSName,
      elevationMax: this.state.iSeleMax,
      elevationMin: this.state.iSeleMin,
      scannedByUserId: this.state.iSuser
    };
    this.setState({
      visible: false,
      scans: [...this.state.scans, data],
    })
  }
  // Cancel for scan model 
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  //Shows the model add user
  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  };
  // push the user data
  handleOk1 = e => {
    const data = { id: this.state.iUserId, name: this.state.iUser };
    this.setState({
      visible1: false,
      users: [...this.state.users, data],
      iUserId: this.state.iUserId + 1,
      iUser: null
    });
  };
  // cancel for user model 
  handleCancel1 = e => {
    this.setState({
      visible1: false,
    });
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // dropedown menu in add scan Select user ID 
  handleMenuClick(e) {
    console.log('click', e.key);
    this.setState({
      iSuser: e.key
    })
  }
  render() {
    const menuForDropDown = (
      <Menu onClick={this.handleMenuClick.bind(this)}>
        {this.state.users.map(function (item, i) {
          return <Menu.Item key={item.id}>
            <Icon type="user" />
            {item.name}
          </Menu.Item>
        })}
      </Menu>
    );
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Menu title="sorting" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="0" disabled={true} >
              <Icon type="search" />
              <span >Click Below To scan</span>
            </Menu.Item>
            <Menu.Item key="1" onClick={() => {
              this.setState({
                byName: false,
                byElevation: false,
                byUser: true,
              })
            }} >
              <Icon type="user" />
              <span >By User</span>
            </Menu.Item>

            <Menu.Item key="2"
              onClick={() => {
                this.setState({
                  byName: true,
                  byElevation: false,
                  byUser: false,
                })
              }} >
              <Icon type="book" />
              <span>By Name</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => {
              this.setState({
                byName: false,
                byElevation: true,
                byUser: false,
              })
            }} >
              <Icon type="select" />
              <span>By Elevations</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user"></Icon>
              <span><Button type="primary" onClick={this.showModal1}>
                Add User
        </Button></span>

              <Modal
                title="Add User"
                visible={this.state.visible1}
                onOk={this.handleOk1}
                onCancel={this.handleCancel1}
              >
                <Input name="iUser" onChange={this.handleChange} value={this.state.iUser} placeholder="Enter UserName" />
              </Modal>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="book"></Icon>
              <span><Button type="primary" onClick={this.showModal}>
                Add Scan
        </Button></span>
              <Modal
                title="Add Scan"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <Input name="iSName" onChange={this.handleChange} value={this.state.iSName} placeholder="Enter Scan Name" />

                <Input name="iSeleMax" onChange={this.handleChange} value={this.state.iSeleMax} placeholder="Enter Elevation max" />
                <Input name="iSeleMin" onChange={this.handleChange} value={this.state.iSeleMin} placeholder="Enter Min" />
                <Dropdown overlay={menuForDropDown}>
                  <Button>
                    {this.state.iSuser ? this.state.iSuser : 'select User Id'} <Icon type="down" />
                  </Button>
                </Dropdown>
              </Modal>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />



          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <ScanContainer pState={this.state} />

          </Content>
        </Layout>
      </Layout>
    );
  }
}

