# 実行方法

expCLIまたはexpXDEをインストール  
```
npm install -g exp
```
Expoアカウントでログイン

各種フォルダでnpm install

## expoCLIよく使うコマンド
それぞれ対応したネットワークでアプリを動かす
exp start --tunnel,--lan,--localhost  
エラーENOSPCが出るときは下のコマンド
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
アプリをexpo上に公開
exp publish



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


# やりたいこと
- TypeScriptの導入
- firebaseへのCI/CD
- ネイティブアプリならではの機能実験


