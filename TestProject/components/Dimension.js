import React, { Component } from 'react';
import { View } from 'react-native';

//幅、高さを指定しての方法と
//フレックス寸法という
//同じ親を持つ他のコンポーネントと
//スペースを分け合うのもある
export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class FlexDimensionBasic extends Component{
  render(){
      return (
          <View style={{ flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
              <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
              <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
          </View>
      )
  }
}

