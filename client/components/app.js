import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Colors from 'material-ui/lib/styles/colors';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePopover: 'none',
            anchorEl: this.refs.menuButton
        };
    }

    render() {
        const styles = {
            root: {
                position: 'relative',
                width: '100%',
                height: '100%'
            },
            content: {
                position: 'absolute',
                top: 64,
                right: 0,
                bottom: 0,
                left: 0
            },
            rightMenu: {
                paddingTop: 8
            },
            popMenu: {
                width: 256,
                padding: 20
            },
            popItem: {
                position: 'relative',
                width: '33.33%',
                height: 100
            }
        };

        return (
            <div style={styles.root}>
                <AppBar
                    title="Itface"
                    iconElementLeft={
                        <Link to={'/'}>
                            <IconButton>
                                <ActionHome color={Colors.white} />
                            </IconButton>
                        </Link>
                    }
                    children={
                        <div style={styles.rightMenu}>
                            <Link to={'/add'}>
                                <IconButton>
                                    <ContentAdd color={Colors.white} />
                                </IconButton>
                            </Link>
                        </div>
                    }/>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
