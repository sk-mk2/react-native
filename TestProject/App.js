import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { StyleSheet, Text, View, Image} from 'react-native';
import LotsOfGreetings  from './components/Greeting.js';

//名前付きexportはimportする際その名前でしかimportできない
//default export は好きな名前でimportできる

const {ip, port} = require('./env.json');
export default class App extends Component {
    render() {
        console.log(LotsOfGreetings);
        let pic = {
            uri: `http:\/\/${ip}:${port}/image/nelu.jpg`
        };
        return (
            <View style={styles.container}>
            <Text>長濱ねる</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <LotsOfGreetings />
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
