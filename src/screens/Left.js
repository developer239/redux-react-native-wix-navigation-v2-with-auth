import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


class Actions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Left</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Actions
