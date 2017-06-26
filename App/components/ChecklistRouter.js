import React, {PropTypes, Navigator, Component} from 'react'

import Overview from './Overview'
import Detail from './Detail'
import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import {connect} from 'react-redux';

const refreshOnBack = () => { Actions.pop(); Actions.refresh(); }

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="overview" component={Overview} hideNavBar onBack={refreshOnBack} />
        <Scene key="detail" component={Detail} sceneStyle={{paddingTop:56}} hideNavBar={false}/>
    </Scene>
);

class ChecklistRouter extends Component {

    static propTypes = {
        dispatch: PropTypes.func
    }

    reducerCreate(params) {
        const defaultReducer = Reducer(params);
        return (state, action ) => {
            this.props.dispatch(action);
            return defaultReducer(state, action);
        }
    }

    render() {
        return (
            <Router createReducer={this.reducerCreate.bind(this)} scenes={scenes} />
        )
    }


}

export default connect()(ChecklistRouter);