import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';


export default class NotLoggedin extends Component {

    render() {
        return (
            <Text>You cant be logged in yet</Text>
        )
    }
}

module.export = NotLoggedin;