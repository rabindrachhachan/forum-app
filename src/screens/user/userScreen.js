import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import styles from "./styles";

import UserItem from "../components/userItem";

export default class UserScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            added: false
        }
    }

    render() {
        const { user} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={{}}>
                    <UserItem user={user} />
                </View>
            </View>
        );
    }
}
