import React, { Component } from 'react';
import {StyleSheet, Dimensions} from 'react-native'
import {Appbar} from 'react-native-paper'
const {height, width} = Dimensions.get('window')
class DetailHeader extends Component {

    onBack = () => {
        this.props.navigation.goBack()
        this.props.startAgain()
    }

    render() {
        return (
            <Appbar.Header style={styles.appBarHeader}>
            <Appbar.BackAction
                onPress={this.onBack}
            />
            <Appbar.Content
                title="Report Card"
                titleStyle={styles.textHeader}
            />
        </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    appBarHeader: { width: width,
        backgroundColor: 'rgb(108, 74, 124)'
    },
    textHeader: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        fontFamily: 'American Typewriter'
    }
})

export default DetailHeader;
