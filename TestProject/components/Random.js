import React, {Component} from 'react';
import { TextInput, Text, View } from 'react-native';

export default class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { text: ''};
    }
    
    //serverのコードをjsonを返すようにする
    getRandom(num) {
        const url = `https://us-central1-react-native-server-6550b.cloudfunctions.net/random?num=${num}`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            this.setState({
                dataSource: '乱数' + JSON.stringify(response) 
            }, () => {

            });
        })
        .catch((error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <TextInput
                    style= {{ height: 40 }}
                    placeholder="乱数の最大値を入力"
                    onChangeText = {(text) => {
                        this.getRandom(text);
                    }}
                />
                <Text>
                    この下に乱数が表示される{'\n'}
                    {this.state.dataSource}
                </Text>
            </View>
        );
    }
}