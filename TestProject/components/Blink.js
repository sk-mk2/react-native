//propはレンダリングされたら変わらない
//stateは変化する
//今回はタイマーで状態を変更しているが
//サーバーからデータを受信した時,ユーザー入力を受けた時
//などにも変更できる

//ReduxやMobxなどを利用してデータフローを制御することもできる
//stateはReactと同じように動作するので
//詳細についてはReact.Component APIを参照
import React, { Component } from 'react';
import { AppRegisry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};
                            
        setInterval(() => {
            //setStateを呼び出すと
            //コンポーネントが再レンダリングされる

            this.setState(previousState => {
                return {
                    isShowingText: !previousState.isShowingText
                };
            });
        }, 1000);
    }

   render() {
       let display = this.state.isShowingText ? this.props.text : '';
        return(
            <Text>{display}</Text>
        );
    };
}

export default class BlinkApp extends Component {
    render() {
        return(
            <View>
                <Blink text='I love to blink' />
            </View>
        );
    }
}
