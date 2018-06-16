import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';

export default class AppBodyData extends Component {
    render() {
        articles = this.props.data.map(function (articleData, index) {
            return (
                <Card>
                    <CardItem>
                        <Body>
                        <Text>
                            {'You spend ' + articleData.total + ' on category: ' + articleData.category + '   on  ' + articleData.date}
                        </Text>
                        </Body>
                    </CardItem>
                </Card>

            )
        });
        return (
            <Content>
                {articles}
            </Content>
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

module.export = AppBodyData;
