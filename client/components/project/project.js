import * as $ from 'jquery';
import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add-circle-outline';
import ContentRemove from 'material-ui/lib/svg-icons/content/remove-circle-outline';
import Editor from '../editor/editor';

export default class Project extends Component {
    constructor() {
        super();
        this.state = {
            list: [{
                id: '1',
                method: 'post',
                url: '/test',
                content: ''
            }, {
                id: '1',
                method: 'get',
                url: '/test',
                content: ''
            }],
            opt: 2
        }
    }

    render() {
        const styles = {
            root: {
                position: 'relative',
                width: 768,
                maxWidth: '90%',
                padding: '0 24px 24px',
                margin: '32px auto',
                minHeight: 600,
                overflow: 'hidden'
            },
            method: {
                position: 'relative',
                float: 'left',
                left: -120,
                width: 100,
                marginRight: '-100%'
            },
            path: {
                float: 'left',
                width: '100%'
            },
            opt: {
                position: 'relative',
                float: 'left',
                width: 100,
                marginLeft: -100,
                right: -120
            },
            clearFix: {
                clear: 'both',
                overflow: 'hidden',
                paddingLeft: 120,
                paddingRight: 120
            }
        };

        return (
            <Paper style={styles.root}>
                <h4>项目详情</h4>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <div key={index}>
                                <div style={styles.clearFix}>
                                    <SelectField
                                        value={item.method}
                                        onChange={this.handleChange}
                                        style={styles.method}>
                                        <MenuItem value='get' primaryText='GET'/>
                                        <MenuItem value='post' primaryText='POST'/>
                                        <MenuItem value='put' primaryText='PUT'/>
                                        <MenuItem value='delete' primaryText='DELETE'/>
                                    </SelectField>
                                    <TextField hintText='URL' fullWidth={true} style={styles.path} />
                                    <div style={styles.opt}>
                                        <IconButton><ContentAdd color={Colors.blue500} /></IconButton>
                                        <IconButton><ContentRemove color={Colors.red500} /></IconButton>
                                    </div>
                                </div>
                                <Editor placeholder="要返回的内容" />
                            </div>
                        )
                    })
                }
            </Paper>
        );
    }

    handleChange = (event, index, opt) => this.setState({opt});
};
