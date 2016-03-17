import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import TouchRipple from 'material-ui/lib/ripples/touch-ripple';
import NavigationApps from 'material-ui/lib/svg-icons/navigation/apps';
import SocialPerson from 'material-ui/lib/svg-icons/social/person';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Colors from 'material-ui/lib/styles/colors';

export default class App extends Component {
    constructor() {
        super();
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
                        <Link to={'/index'}>
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

                            <IconMenu iconButtonElement={
                                <IconButton><SocialPerson color={Colors.white} /></IconButton>
                            }>
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help" />
                                <MenuItem primaryText="Sign out" />
                            </IconMenu>
                        </div>
                    }/>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}