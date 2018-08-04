import React, { Component } from 'react';
//これらはそれぞれreact-nativeが提供しているコンポーネント
import { StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';
export default class List extends Component{
    render() {
        const componentsList = [
            'Nelu',
            'Blink',
            'Dimension',
            'Rayout'
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
                            onPress={() => this.props.navigation.navigate(item)}
                        >
                            <Text>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}
