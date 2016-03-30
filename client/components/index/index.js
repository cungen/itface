import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import { fetchProjects } from '../../actions/ProjectAction';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchProjects());
    }

    render() {
        const {
            projects
        } = this.props;

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
                borderBottom: '1px solid ' + Colors.grey200
            }
        };

        return (
            <Paper style={styles.root} zDepth={1}>
                <h4>项目列表</h4>
                <List>
                    <Divider style={{backgroundColor: Colors.grey200}} />
                    {
                        _.map(projects, (i, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={`/project/${i._id}`}
                                    style={{textDecoration: 'none'}}>
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
}

Index.propTypes = {
    projects: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { projects } = state;
    return {
        projects
    }
}

export default connect(mapStateToProps)(Index);
