import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { TouchableOpacity , FlatList, View} from 'react-native';
//native-base
//UI用フレームワークbootstrap的な
//typescriptにしたら動かんぞ
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    Button,
    Left,
    Right,
    Body,
    Icon,
    List,
    ListItem,
    H2,
    Text
} from 'native-base';
import Nelu from './components/Nelu';
import Random from './components/Random';
import { createStackNavigator } from 'react-navigation';
import Style from './components/Style';

//名前付きexportはimportする際その名前でしかimportできない
//default export は好きな名前でimportできる
const componentsList = [
    { key: 'Nelu' ,
      title: 'ねる画像'},
    { key: 'Random' ,
      title: '乱数取得アプリ'},
];

//propsの要素に動的にnavigateを追加しているからTSの場合
//事前に用意しないといけない？
interface Props {
    navigation: {
        navigate:any
    }
}

class Lists extends Component<Props>{
    render() {
        return (
            <Container>
                <Header>
                <Body>
                <H2>
                    React-Native Tutrial
                </H2>
                </Body>
                </Header>

              <Content>  
                <List
                    dataArray ={componentsList}
                    renderRow={(item) => (
                        <ListItem>
                        <Left>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate(item.key)}
                                >
                                    <Text style={Style.textUp}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            </Left>
                            <Right>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate(item.key)}
                                >
                                    <Icon type='Entypo' name='chevron-right' />
                                </TouchableOpacity>
                                </Right>
                        </ListItem>
                    )}
                >
                </List>
                </Content>
            </Container>
        );
    }
}

const RootStack = createStackNavigator({
    Nelu: {
        screen: Nelu,
    },
    Lists: {
        screen: Lists
    },
    Random: {
        screen: Random
    },
}, {
    initialRouteName: 'Lists'
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
