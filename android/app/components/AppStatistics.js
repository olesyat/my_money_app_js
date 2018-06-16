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


const {width, height} = Dimensions.get('window')
export default class Statistics extends Component{
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
                                      onPress={() => this.props.navigation.navigate('Piechart')}>
                        <Text>СТАТИСТИКА</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginbtn}
                                      onPress={() => this.props.navigation.navigate('History')}>
                        <Text>ІСТОРІЯ ВИТРАТ</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    view: {
        alignItems: 'center',
    },
    loginbtn: {
        backgroundColor: '#ecf0f1',
        alignSelf: 'stretch',
        padding: 14,
        marginTop: 10,
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

module.export = Statistics;