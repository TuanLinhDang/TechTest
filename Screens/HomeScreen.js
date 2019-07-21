import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Dimensions } from 'react-native'
import { Appbar } from 'react-native-paper'
import CardItem from '../Components/CardItem'
const { height, width } = new Dimensions.get('window')
const intervalId = 'intervalId'
class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: 0,
            time: '',
            intervalId: '',
            dogs: [
                {
                    id: 1,
                    name: 'Dog 1',
                    actions: [],
                    comment: '',
                    distance: 0
                },
                {
                    id: 2,
                    name: 'Dog 2',
                    actions: [],
                    comment: '',
                    distance: 0
                },
                {
                    id: 3,
                    name: 'Dog 3',
                    actions: [],
                    comment: '',
                    distance: 0
                },
            ]
        }
    }

    addAction = (id, action) => {
        this.state.dogs.forEach((dog, index) => {
            if (dog.id === id) {
                this.state.dogs[index].actions = action
                this.setState({
                    dogs: this.state.dogs
                })
            }
        })
    }

    addComDis = (id, com, dis) => {
        this.state.dogs.forEach((dog, index) => {
            if (dog.id === id) {
                this.state.dogs[index].comment = com
                this.state.dogs[index].distance = dis
                this.setState({
                    dogs: this.state.dogs
                })
            }
        })
    }

    tick = () =>{
        this.state.duration = this.state.duration + 1
        this.setState({
            duration: this.state.duration,
            time: this.secondsToHms(this.state.duration)
        })
    }

    startAgain = () => {
        this.setInterval()
    }

    secondsToHms = (d) => {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours: ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes: ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }

    componentDidMount(){
        this.setInterval()
    }

    setInterval = () => {
        let intervalId = setInterval(this.tick, 1000)
        this.setState({
            intervalId: intervalId
        })
    }

    changeScreen = () => {
        this.props.navigation.navigate('DetailScreen', {dogs: this.state.dogs, time: this.state.time, startAgain: this.startAgain})
        clearInterval(this.state.intervalId)
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Appbar.Header style={styles.header}>
                    <Appbar.Content
                        title="Dog List"
                        titleStyle={styles.tabBarHeader}
                    />
                    <Appbar.Action size={35} icon="check"
                        onPress={this.changeScreen}
                    />
                </Appbar.Header>
                <Text style={styles.durationText}>Time: {this.state.time}</Text>
                <FlatList
                    data={this.state.dogs}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <CardItem item={item} addAction={this.addAction} addComDis={this.addComDis} navigate={navigate} />
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 235, 235)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        width: width,
        backgroundColor: 'rgb(108, 74, 124)'
    },
    tabBarHeader: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        fontFamily: 'American Typewriter'
    },
    durationText: {
        marginTop: 5,
        backgroundColor: 'white',
        color: 'rgb(108, 74, 124)',
        padding: 10,
        fontSize: 17
    }
});

export default HomeScreen;
