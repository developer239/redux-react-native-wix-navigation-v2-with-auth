import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>
      Simple Home Screen
    </Text>
  </View>
)

export default HomeScreen
