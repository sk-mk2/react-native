import React, {Component} from 'react';
import { TextInput, Text, View, Button } from 'react-native';

interface State {
    randomNum:number;
    text:string;
}

export default class Random extends Component<null, State> {
    constructor(props:any) {
        super(props);
        this.state = { 
            text: '',
            randomNum:0
        };
    }
    
    //serverのコードをjsonを返すようにする
    getRandom(num:any) {
        const url = `https://us-central1-react-native-server-6550b.cloudfunctions.net/random?num=${num}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            this.setState({
                randomNum: json.random
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
                        this.setState({
                            text: text
                        });
                    }}
                />

                <Button
                    onPress= {() => {this.getRandom(this.state.text);}}
                    title="乱数取得"
                />

                <Text>
                    この下に乱数が表示される{'\n'}
                    乱数 : {this.state.randomNum}
                </Text>
            </View>
        );
    }
}