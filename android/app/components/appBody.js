import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import AppBodyData from './appBodyData';


export default class AppBody extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    getData()
    {
        return fetch("http://10.0.2.2:5000/ls")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({'data': responseJson.data})
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return (
            <AppBodyData data = {this.state.data}/>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.export = AppBody;
