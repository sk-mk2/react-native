import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranlator extends Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="適当な人の名前を入力してね"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text === "長濱ねる" ? "かわいい" : "しらない" || 
                                         "福田敦" ? "かわいい" : "しらない" 
                    }
                </Text>
            </View>
        );
    }
}