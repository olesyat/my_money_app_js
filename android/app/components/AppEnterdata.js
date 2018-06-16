import CameraRollPicker from 'react-native-camera-roll-picker';
import React, {Component} from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Dimensions,
    Platform,
    View,
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class Enterdata extends Component {


    getSelectedImages(image) {
        try {
            const data = new FormData();
            console.log("Hello");
            // data.append('text', 'testName'); // you can append anyone.
            data.append('image', {
                uri: image[0].uri,
                type: 'image/jpeg', // or photo.type
                name: image[0].uri + '.jpg'
            });


            fetch('http://10.0.2.2:5000/s', {
                method: 'post',
                body: data
            }).then(res => {
                console.log(res)
            });


            alert('success')

        }
        catch (error) {
            alert('Unselected')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraRollPicker callback={this.getSelectedImages}
                                  maximum={1}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
});
module.export = Enterdata;