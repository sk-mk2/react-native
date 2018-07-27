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

# ReactNative勉強用
## ReactNativeとは
JavaScriptでモバイルアプリを構築できる

### JSX
JavaScript内にXMLを埋め込む為の構文

### Jest
このプロジェクトで用いられているテストプラットフォーム

