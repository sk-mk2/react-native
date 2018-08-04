import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { StyleSheet} from 'react-native';
import Blink  from './components/Blink.js';
import Dimension  from './components/Dimension.js';
import Rayout  from './components/Rayout.js';
import Nelu from './components/Nelu.js';
import List from './components/List.js';
import { createStackNavigator } from 'react-navigation';

//名前付きexportはimportする際その名前でしかimportできない
//default export は好きな名前でimportできる

const RootStack = createStackNavigator({
    Nelu: {
        screen: Nelu 
    },
    Blink: {
        screen: Blink 
    },
    Dimension: {
        screen: Dimension 
    },
    Rayout: {
        screen: Rayout 
    },
    List: {
        screen: List
    }
}, {
    initialRouteName: 'List'
});



//他にも各種ボタン、リスト表示とか用のコンポーネントもある
//httpRequestはfetchAPIを使うのが一般的？axiosとかでも
//react-native自体にその機能はないっぽい
//WebSocketも使える,これもwebAPI使ってアクセスするっぽい
//react-navigatorというので画面遷移は簡単にできる


export default class App extends Component {
    render() {
        return (
            <RootStack />
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
