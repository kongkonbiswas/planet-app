import { View, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'

export default function Details({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true}></PlanetHeader>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: colors.black,
    },
  });