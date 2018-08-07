import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';
export default class List extends Component{
    render() {
        const componentsList = [
            {key: 'Nelu'},
            {key: 'Blink'},
            {key: 'Dimension'},
            {key: 'Rayout'},
            {key: 'Random'},
            {key: 'Fukuda'}
        ];
        return (
            <View>
                <Text>
                    React-Native Tutrial
                </Text>
                <FlatList
                    data={componentsList}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate(item.key)}
                        >
                            <Text>
                               ・ {item.key}

                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
