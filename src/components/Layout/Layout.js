import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
        };
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    }

    sideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer: true,
        });
    }

    render() {
        const { showSideDrawer } = this.state;
        return (
            <>
                <Toolbar clicked={this.sideDrawerOpenHandler} />
                <SideDrawer open={showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;