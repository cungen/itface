import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Colors from 'material-ui/lib/styles/colors';
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

    async componentDidMount() {
        var list = await ProjectStore.getAll();
        this.setState({
            list: list
        });
    }

    render() {
        const styles = {
            root: {
                width: 768,
                maxWidth: '90%',
                padding: '0 24px',
                margin: '32px auto',
                minHeight: 600,
                overflow: 'hidden'
            },
            item: {
                borderLeft: `1px solid ${Colors.grey200}`,
                borderRight: `1px solid ${Colors.grey200}`,
                borderBottom: '1px solid ' + Colors.grey200
            }
        };

        return (
            <Paper style={styles.root} zDepth={1}>
                <h4>项目列表</h4>
                <List>
                    <Divider style={{backgroundColor: Colors.grey200}} />
                    {
                        _.map(this.state.list, (i, index) => {
                            return (
                                <Link to={`/project/${i._id}`} style={{textDecoration: 'none'}}>
                                    <ListItem
                                        style={styles.item}
                                        key={index}
                                        primaryText={i.name}
                                        secondaryText={i.createTime}
                                    />
                                </Link>
                            );
                        })
                    }
                </List>

            </Paper>
        );
    };

};
