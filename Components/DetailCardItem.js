import React, { Component } from 'react';
import {View, FlatList, Dimensions} from 'react-native'
import {Card, Title, Text} from 'react-native-paper'
const {height, width} = Dimensions.get('window')
class DetailCardItem extends Component {
    render() {
        const {item} = this.props
        return (
            <Card style={{ width: width - 10, margin: 5 }}>
                <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Title style={{color: 'rgb(108, 74, 124)'}}>{item.name}</Title>
                    <Text style={{textAlign: 'center', marginTop: 5, fontSize: 20, color: 'rgb(108, 74, 124)'}}>
                        Distance: {item.distance} km
                    </Text>
                </Card.Content>
                <Card.Content style={{marginTop: 3}}>
                    <View style={{alignItems: 'center'}}>
                        <FlatList
                            data={item.actions}
                            numColumns={3}
                            keyExtractor = {(item, index) => index.toString()}
                            renderItem={({item}) =>
                                <Text style={{padding: 7, margin: 3, backgroundColor: 'rgb(108, 74, 124)', color: 'white'}}>
                                    {item}
                                </Text>
                            }
                        />
                    </View>
                        
                    <Text style={{fontSize: 20, color: 'black', textAlign:'center'}}>
                        {item.comment}
                    </Text>
                    
                </Card.Content>
            </Card>
        );
    }
}

export default DetailCardItem;
