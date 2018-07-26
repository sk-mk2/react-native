import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

//名前付きexportはimportする際その名前でしかimportできない
//default export は好きな名前でimportできる

//その時のネットワーク環境に依存して変わる
const {ip, port} = require('./env.json');
export default class App extends React.Component {
    render() {
        let pic = {
            uri: `http:\/\/${ip}:${port}/image/nelu.jpg`
        };
        return (
            <View style={styles.container}>
            <Text>長濱ねる</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
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
