import React, { Component } from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native'
import {Divider, Avatar, Text} from 'react-native-paper'
const {height, width} = Dimensions.get('window')
class DetailImageView extends Component {
    render() {
        return (
            <View>
                <View style={styles.firstView}>
                    <Avatar.Image
                        source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61YS54E%2BIJL._SX425_.jpg' }}
                        size={150}
                        style={{marginTop: 10}}
                    />
                    <Text style={styles.text}>Harry Lou</Text>
                </View>
                <Divider />
                <View style={styles.secondView}>
                    <Image
                        source={{ uri: 'http://www.birderfrommaricopa.com/user/cimage/0-01929837474673-fr-25-map-28229.jpg' }}
                        style={styles.placeholderImg}
                    />
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-suuS2h8ymEUS-L6XQUCiiVtag2uC5zbYp26eReZ9esbzn9tMg' }}
                        style={styles.placeholderImg}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 18,
        padding: 5 
    },
    secondView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    placeholderImg: {
        width: width / 2 - 6,
        height: width / 2 - 6
    }
})

export default DetailImageView;
