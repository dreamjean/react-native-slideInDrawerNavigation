import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text  } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyle from '../config/style'

const {  avatar, colors, text } = defaultStyle;

function SideBar(props) {


  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={require('../assets/bg1.jpeg')} style={styles.image}>
        <View style={styles.followers}>
          <Image source={require('../assets/avatar.jpeg')} style={avatar} />
          <View style={styles.leftSpace}>
            <Text style={text.title}>Rokia</Text>
            <Text style={text.description}>rokia@demo.com</Text>
          </View>
        </View>
        <View style={[styles.followers, styles.topSpace]}>
          <Text style={text.description}>734 Followers</Text>
          <Ionicons name='md-people' size={16} color={colors.white2} style={styles.leftSpace} />
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <DrawerItemList {...props} />
      </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    padding: 16,
    paddingTop: 36
  },
  followers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topSpace: {
    marginTop: 5,
  },
  leftSpace: {
    marginLeft: 8,
  },

})

export default SideBar;
