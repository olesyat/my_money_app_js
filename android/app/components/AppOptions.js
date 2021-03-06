import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    Platform
} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';

const {width, height} = Dimensions.get('window')

export default class Options extends Component{
    render() {
        return (
            <ImageBackground
                source={{uri: 'https://images.unsplash.com/photo-1496850574977-a4607106a874?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7ccae590c7004d9b8f4ca62f313a71c&auto=format&fit=crop&w=934&q=80'}}
                style={styles.container}>
                <View style={styles.view}>
                    <Image
                        source={{uri: 'https://vignette.wikia.nocookie.net/shararam-smeshi/images/9/95/Money_PNG3537.png/revision/latest?cb=20160228121230&path-prefix=ru'}}
                        style={styles.logo}/>
                </View>
                <View style={styles.mylogincontainer}>
                    <TouchableOpacity style={styles.loginbtn}
                                      onPress={() => this.props.navigation.navigate('Enterdata')}>
                        <Text>ВВЕСТИ ДАНІ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginbtn}
                                      onPress={() => this.props.navigation.navigate('Statistics')}>
                        <Text>ПЕРЕГЛЯНУТИ СТАТИСТИКУ</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    text0: {
        alignSelf: 'center',
        color: 'blue'
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 90
    },
    buttonContainer: {
        marginTop: 120
    },
    container: {
        width: width,
        height: height,
    },
    textInput: {
        alignSelf: 'stretch',
        color: 'blue',
        backgroundColor: 'skyblue',
        marginTop: 20,
        marginBottom: 20
    },
    view: {
        alignItems: 'center',
    },
    textinput: {
        color: '#fff',
        alignSelf: 'stretch',
        padding: 8,
        marginBottom: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: '#fff',
        borderWidth: 0.6,
        top: 300

    },
    loginbtn: {
        backgroundColor: '#ecf0f1',
        alignSelf: 'stretch',
        padding: 14,
        marginTop: 10,
    },
    logocontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 140,
        height: 140,

    },
    mylogincontainer: {
        padding: 56,
        top: 100
    },
    mylogincontainer1: {
        padding: 56,
        top: 250
    }
});

module.export = Options;