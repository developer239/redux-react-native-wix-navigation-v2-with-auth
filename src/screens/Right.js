import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


class NavigationTypes extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Simple screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default NavigationTypes
