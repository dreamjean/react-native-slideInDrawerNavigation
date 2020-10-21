import React from 'react';
import { Text, SafeAreaView, Platform, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import defaultStyle from '../config/style'

const { colors, text } = defaultStyle;

function Screen({navigation, name}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.button} onPress={navigation.openDrawer}>
          <FontAwesome name='bars' size={24} color={colors.grey} />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={text.body}>{name} Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'flex-end',
    margin: 25,
    marginTop: 38,
  },

  textBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,

  },
})

export default Screen;
