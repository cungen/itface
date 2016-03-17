import * as $ from 'jquery';
import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import ProjectStore from '../../stores/ProjectStore';

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        let list = ProjectStore.getAll();
        list.then((resp) => {
            this.setState({
                list: [{
                    id: '1',
                    name: 'aaaaaaa',
                    createTime: '2016-01-02'
                }, {
                    id: '2',
                    name: 'nbbbbbbbbb',
                    createTime: '2016-01-02'
                }]
            });
        }, (err) => {
            this.setState({
                list: [{
                    id: '1',
                    name: 'aaaaaaa',
                    createTime: '2016-01-02'
                }]
            });
        });

    }

    render() {
        const styles = {
            root: {
                width: 768,
                maxWidth: '90%',
                margin: '32px auto',
                minHeight: 600
            },
            listItem: {
                margin: 16
            }
        };

        return (
            <Paper style={styles.root} zDepth={1}>
                <List subheader="项目列表">
                    <Divider />
                    {
                        this.state.list.map((i, index) => {
                            return (
                                <div>
                                    <ListItem
                                        key={index}
                                        primaryText={i.name}
                                        secondaryText={i.createTime}
                                        />
                                    <Divider />
                                </div>
                            );
                        })
                    }
                </List>

            </Paper>
        );
    };
};
