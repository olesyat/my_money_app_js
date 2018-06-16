import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
    Platform
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import AppStatist from './android/app/components/appStatist';
import AppBody from './android/app/components/appBody';
import NotLoggedin from './android/app/components/AppNotLoggedin';
import Registerpage from './android/app/components/AppRegisterpage';
import Loginpage from './android/app/components/AppLoginpage';
import Options from './android/app/components/AppOptions';
import Statistics from './android/app/components/AppStatistics';
import Enterdata from './android/app/components/AppEnterdata';

const {width, height} = Dimensions.get('window')

class MainPage extends Component {
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
                    <TouchableOpacity style={styles.loginbtn} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>LOG IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginbtn}
                                      onPress={() => this.props.navigation.navigate('Registration')}>
                        <Text>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        );
    }
}

const AppNav = StackNavigator({
    Home: {screen: MainPage},
    Login: {screen: Loginpage},
    Registration: {screen: Registerpage},
    NotLogged: {screen: NotLoggedin},
    Options: {screen: Options},
    Enterdata: {screen: Enterdata},
    Statistics: {screen: Statistics},
    Piechart: {screen: AppStatist},
    History: {screen: AppBody}
});


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
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
});

export default class App extends Component {
    render() {
        return <AppNav/>;
    }
}