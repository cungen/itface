import * as $ from 'jquery';
import React, { Component } from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Index extends Component {
    constructor() {
        super();
    }

    render() {
        const styles = {
            root: {
                width: 768,
                maxWidth: '90%',
                margin: '32px auto',
                minHeight: 600
            },
            form: {
                width: 320,
                maxWidth: '90%',
                margin: '0 auto'
            },
            btn: {
                float: 'right',
                marginTop: 8
            }
        };
        return (
            <Paper style={styles.root} zDepth={1}>
                <List subheader='创建项目' />
                <div style={styles.form}>
                    <TextField
                        fullWidth={true}
                        floatingLabelText='项目名称' />
                    <br/>
                    <TextField
                        fullWidth={true}
                        floatingLabelText='项目路径' />
                    <br/>
                    <RaisedButton label='确认' primary={true} style={styles.btn} backgroundColor={Colors.cyan500} />
                </div>
            </Paper>
        );
    };
};
