import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'

export default function Details({navigation, route}) {
  const planet = route.params.planet;
  const { name } = planet;
  console.log("PLANET --> ", planet);

  const renderImage = (name) => {
    switch(name) {
      case 'mercury':
        return <MercurySvg></MercurySvg>;
      case 'earth':
        return <EarthSvg></EarthSvg>;
      case 'jupiter':
        return <JupiterSvg></JupiterSvg>;
      case 'mars':
        return <MarsSvg></MarsSvg>;
      case 'neptune':
        return <NeptuneSvg></NeptuneSvg>;
      case 'saturn':
        return <SaturnSvg></SaturnSvg>;
      case 'uranus':
        return <UranusSvg></UranusSvg>;
      case 'venus':
        return <VenusSvg></VenusSvg>;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true}></PlanetHeader>
      <ScrollView >
        <View style={styles.imageView}>
          {renderImage(name)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: colors.black,
    },
    imageView: {
      padding: spacing[5],
      alignItems: 'center',
      justifyContent: 'center'
    }
  });