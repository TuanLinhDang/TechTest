import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native'
import {Appbar, Avatar, Text, Divider } from 'react-native-paper'
import DetailHeader from '../Components/DetailHeader';
import { FlatList } from 'react-native-gesture-handler';
import DetailCardItem from '../Components/DetailCardItem';
import DetailImageView from '../Components/DetailImageView';
const { height, width } = new Dimensions.get('window')
class DetailScreen extends Component {
    render() {
        const {navigation} = this.props
        const {dogs, time} = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <DetailHeader navigation = {navigation} startAgain = {this.props.navigation.state.params.startAgain}/>
                <ScrollView>
                <DetailImageView/>
                <Text style={styles.durationText}>
                    Duration: {time}
                </Text>
                <View>
                    <FlatList
                        data={this.props.navigation.state.params.dogs}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => 
                            <DetailCardItem item={item}/>
                        }
                    />
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235, 235, 235)',
    },
    durationText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgb(108, 74, 124)'
    }
});

export default DetailScreen;
