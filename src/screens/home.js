import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';
import { spacing } from '../theme/spacing';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader></PlanetHeader>
      <FlatList 
      contentContainerStyle={ styles.list}
      data ={PLANET_LIST}
      keyExtractor= {(item) => item.name}
      renderItem={({ item }) => {
          return(
            <View style={styles.item}>
              <View style={[styles.circle, {backgroundColor: item.color}]}></View>
              <Text>{item.name}</Text>
            </View>
          )
      }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: colors.black, 
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  list: {
    padding: spacing[5],
  }
});