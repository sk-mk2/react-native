# 実行方法

各種フォルダでnpm install
```
npm install -g create-react-native-app
sudo sysctl -w fs.inotify.max_user_instances=1024
sudo sysctl -w fs.inotify.max_user_watches=12288
npm start

```

react-nativeがこれだと動かないから    
現状もう一回プロジェクトを作りなおしている  
TODO:原因調査
これで解決するっぽい
これだと再起動するたび値が元に戻りそう
```
sudo sysctl -w fs.inotify.max_user_watchs=12288
```
これでできなかったら値を大きくすればいい思うよ

# ReactNative勉強用
## ReactNativeとは
JavaScriptでモバイルアプリを構築できる

### JSX
JavaScript内にXMLを埋め込む為の構文
使うためにBabelとかそのたぐいが必要

### Jest
このプロジェクトで用いられているテストプラットフォーム

## Bundler
BrouserifyやWebpackなどのこと
コードをまとめたり、ブラウザでそのまま動かないコードを動くようにコンパイル？的なことをしたり、例えばrequireとかJSXを使うとき

## Redux
UIの状態を管理するためのフレームワーク
とくにReactとの相性が良い

## firebase
今回使っている静的コンテンツのホスティング先はfirebase

## expo
iosアプリなどをxcode無しで実機確認できる



