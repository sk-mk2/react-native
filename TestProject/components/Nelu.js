import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { Text, ScrollView, Image, View} from 'react-native';
import LotsOfGreetings  from './Greeting.js';
import Style  from './Style.js';
import InputText  from './InputText.js';

//名前付きexportはimportする際その名前でしかimportできない
//default export は好きな名前でimportできる

//他にも各種ボタン、リスト表示とか用のコンポーネントもある
//httpRequestはfetchAPIを使うのが一般的？axiosとかでも
//react-native自体にその機能はないっぽい
//WebSocketも使える,これもwebAPI使ってアクセスするっぽい

export default class Nelu extends Component {
    render() {
        //firebaseのアドレス
        const uri = 'https://react-native-server-6550b.firebaseapp.com/image/nelu.jpg';
        //ローカルのexpressでのアドレス    
        //const uri = `http:\/\/${ip}:${port}/image/nelu.jpg`;
        console.log(LotsOfGreetings);
        let pic = {
            uri : uri
        };
        return (
            <View>
                <ScrollView>
                    <Text>長濱ねる</Text>
                    <Image source={pic} style={{width: 193, height: 110}}/>
                    <LotsOfGreetings />
                    <Style />
                    <Text>好きな名前を入力</Text>
                    <InputText />
                </ScrollView>
            </View>
        );
    }
}
