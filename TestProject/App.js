import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import LotsOfGreetings  from './components/Greeting.js';
import Blink  from './components/Blink.js';
import Style  from './components/Style.js';
import Dimension  from './components/Dimension.js';
import Rayout  from './components/Rayout.js';
import InputText  from './components/InputText.js';

//名前付きexportはimportする際その名前でしかimportできない
//default export は好きな名前でimportできる

const {ip, port} = require('./env.json');

//他にも各種ボタン、リスト表示とか用のコンポーネントもある
//httpRequestはfetchAPIを使うのが一般的？axiosとかでも
//react-native自体にその機能はないっぽい
//WebSocketも使える,これもwebAPI使ってアクセスするっぽい

export default class App extends Component {
    render() {
        console.log(LotsOfGreetings);
        let pic = {
            uri: `http:\/\/${ip}:${port}/image/nelu.jpg`
        };
        return (
            <View>
                <ScrollView>
                    <Text>長濱ねる</Text>
                    <Image source={pic} style={{width: 193, height: 110}}/>
                    <LotsOfGreetings />
                    <Style />
                    <InputText />
                </ScrollView>
                <Blink />
                <Dimension />
                <Rayout />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => App);
