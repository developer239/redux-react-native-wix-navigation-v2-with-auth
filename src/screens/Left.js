import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'


class Actions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Store value: {this.props.initialText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const mapStateToProps = state => ({
    initialText: state.default.value
})

export default connect(mapStateToProps)(Actions)
