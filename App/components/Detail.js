import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Text, View, TouchableHighlight
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/entries'

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        this.setState({
            entry: this.props.entries[this.props.id]
        })
    }

    patchEntry(newStatus) {
        console.log("Details: patchEntry with " + this.props.id +" and " + newStatus );
        this.props.actions.patchEntry(this.props.id, newStatus);
    }

    render() {
        return (
            <View>
                <Text>{this.state.entry.name}</Text>

                <TouchableHighlight onPress={() => this.patchEntry('done')}><Text>Mark done</Text></TouchableHighlight>
                <TouchableHighlight onPress={() => this.patchEntry('cancelled')}><Text>Mark cancelled</Text></TouchableHighlight>
            </View>
        )
    }
}



function mapStateToProps(state) {
    console.log(state);
    return {entries: state.default.entries };
}


function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions,dispatch)};
}

export default connect( mapStateToProps, mapDispatchToProps)(Detail);