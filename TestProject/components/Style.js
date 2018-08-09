//jsにstyleを書いて反映させる
//StyleSheet.createで複数のスタイルを
//ひとつの場所に定義することが推奨されている

import { StyleSheet } from 'react-native';

//このオブジェクトが通常のcssファイルの代わりになる
export default styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  textUp: {
    position : 'relative',
  }
});

