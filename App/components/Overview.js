import React, {Component} from 'react';

import {
    Text, View, ScrollView, TouchableHighlight
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/entries'
import { Actions } from 'react-native-router-flux';


class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {fetching:false};
    }

    entries() {
        // console.log("Overview");
        // console.log(this.props);
        // console.log(this.props.entries);


        return Object.keys(this.props.entries).map(key => this.props.entries[key]);
    }

    componentDidMount() {
        this.setState({fetching:true});
        this.props.actions.getEntries()
            .then( (res) => {
                this.setState({fetching: false});
            })
    }

    handleChange(entryId) {
        Actions.detail({id: entryId});
    }


    render() {

        return (
        <View>
            <ScrollView>
                { !this.state.fetching &&  this.entries().map((entry) => {

                    return (
                        <TouchableHighlight key={entry.id}>
                        <View  >
                            <Text>{entry.name}</Text>
                            <TouchableHighlight onPress={(entryId ) => this.handleChange(entry.id)}><Text>{entry.status}</Text></TouchableHighlight>
                            <Text>---------------------------</Text>

                        </View>
                        </TouchableHighlight>
                    )
                    }

                    )
                }
                {this.state.fetching ? <Text>Searching </Text> : null }
            </ScrollView>


        </View>
    )}
}

function mapStateToProps(state) {

    return {entries: state.default.entries };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions,dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);