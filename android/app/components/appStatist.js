////this is for the main statistics page!!!!!!!!!!!!!!!!!!Fuck
import React, {Component} from 'react';
import {Content, Card, CardItem, Body} from 'native-base';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Dimensions,
    processColor
} from 'react-native';
import {BarChart, LineChart, PieChart} from 'react-native-charts-wrapper';


export default class AppStatist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: {
                pie: {
                    detail: {
                        legend_list: ['food', 'clothes', 'transportation', 'fun', 'health', 'housing', 'other'],
                        dataset: {
                            food: 9,
                            clothes: 10,
                            transportation: 17,
                            fun: 12,
                            health: 11,
                            housing: 30,
                            other: 45
                        }
                    }
                }
            }
        }
    }

    componentDidMount() {
        return fetch("http://10.0.2.2:5000/db")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({isLoading: false})
                this.setState({data: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF'
        var color = '#'
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    renderPie() {
        const legend = this.state.data.pie.detail.legend_list
        const dataset = this.state.data.pie.detail.dataset

        var dataSetsValue = []
        var dataStyle = {}
        var legendStyle = {}
        var descStyle = {}
        var xAxisStyle = {}
        var chooseStyle = {}
        var valueLegend = []
        var colorLegend = []

        legend.map((legendValue) => {
            const datasetValue = dataset[legendValue]
            valueLegend.push({value: parseInt(datasetValue), label: legendValue})

            colorLegend.push(processColor(this.getRandomColor()))
        })

        const datasetObject = {
            values: valueLegend,
            label: '',
            config: {
                colors: colorLegend,
                valueTextSize: 20,
                valueTextColor: processColor('green'),
                sliceSpace: 5,
                selectionShift: 13
            }
        }
        dataSetsValue.push(datasetObject)

        legendStyle = {
            enabled: true,
            textSize: 12,
            form: 'CIRCLE',
            position: 'BELOW_CHART_RIGHT',
            wordWrapEnabled: true
        }
        dataStyle = {
            dataSets: dataSetsValue
        }
        descStyle = {
            text: '',
            textSize: 15,
            textColor: processColor('darkgray')
        }

        return (
            <PieChart
                style={styles.bar}
                chartDescription={descStyle}
                data={dataStyle}
                legend={legendStyle}
                highlights={[{x: 2}]}/>
        )
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    Statistics
                </Text>
                {this.renderPie()}
            </ScrollView>


        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bar: {
        marginTop: 10,
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        padding: 10
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

module.export = AppStatist;
