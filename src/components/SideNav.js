import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import SideBarItem from './components/SideBarItem.js';
import { List } from 'material-ui/List';

/*
  Add you nav links here..
    isExact: if true it will be an exact path
    linkTo: the path you want to go
    text: title of the nav item
*/

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/tools', text: 'Tools' },
  { isExact: false, linkTo: '/media', text: 'Media' },
  { isExact: false, linkTo: '/website', text: 'Website' },

]

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <div>
        <AppBar
          title='PixHelper'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            {links.map((link, i) => {
              return (
                <SideBarItem
                  isExact={link.isExact}
                  linkTo={link.linkTo}
                  primaryText={link.text}
                  onClick={this.handleClose}
                  key={i}
                />
              )
            })}
          </List>
        </Drawer>
      </div>
    )
  }
}

export default SideNav
