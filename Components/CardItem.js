import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Slider} from 'react-native'
import { Avatar, Button,Text, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')
const date = new Date()
class CardItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actions: [],
            comment: '',
            distance: 0
        }
    }

    componentDidUpdate(){
        this.props.addComDis(this.props.item.id, this.state.comment, this.state.distance)
    }

    clickPeed = () => {
        this.state.actions.push('Peed: ' + ' ' + date.getHours() + ':' + date.getMinutes()) 
        this.setState({
            actions: this.state.actions
        })
        this.props.addAction(this.props.item.id, this.state.actions)
    }

    clickPood = () => {
        this.state.actions.push('Pood: ' + ' ' + date.getHours() + ':' + date.getMinutes()) 
        this.setState({
            actions: this.state.actions
        })
        this.props.addAction(this.props.item.id, this.state.actions)
    }

    render() {
        const { item, navigate } = this.props
        return (
            <Card style={{ width: width - 10, margin: 5 }}>
                <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Title style={{color: 'rgb(108, 74, 124)'}}>{item.name}</Title>
                    <View style={{flexDirection: 'row'}}>
                        <Button style={{marginRight: 3,}}color="orange" mode="contained" onPress={this.clickPeed}>Peed</Button>
                        <Button color="red" mode="contained" onPress={this.clickPood}>Pood</Button>
                    </View>
                </Card.Content>
                <Card.Content style={{marginTop: 3}}>
                    <View style={{alignItems: 'center'}}>
                        <FlatList
                            data={this.state.actions}
                            numColumns={3}
                            keyExtractor = {(item, index) => index.toString()}
                            renderItem={({item}) =>
                                <Text style={{padding: 7, margin: 3, backgroundColor: 'rgb(108, 74, 124)', color: 'white'}}>
                                    {item}
                                </Text>
                            }
                        />
                    </View>
                        
                    <TextInput
                        style={{ height: 100 }}
                        label='comment'
                        multiline={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <Text style={{textAlign: 'center', marginTop: 5, fontSize: 20, color: 'rgb(108, 74, 124)'}}>
                        Distance: {this.state.distance} km
                    </Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={20}
                        minimumTrackTintColor="rgb(108, 74, 124)"
                        maximumTractTintColor="rgb(108, 74, 124)"
                        step={1}
                        value={0}
                        style={{width: 300, alignSelf: 'center'}}
                        onValueChange={distance => this.setState({distance})}
                        thumbTintColor="rgb(108, 74, 124)"
                    />
                </Card.Content>
            </Card>
        );
    }
}

export default CardItem;
