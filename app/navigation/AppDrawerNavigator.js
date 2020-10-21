import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen
} from '../screens'
import SideBar from '../components/SideBar';
import defaultStyle from '../config/style';

const {colors, text} = defaultStyle
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideBar {...props} />}
    hideStatusBar
    screenOptions={({ route }) => ({
      title: route.name,
      drawerIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Profile') iconName='user'
        if (route.name === 'Message') iconName='message-square'
        if (route.name === 'Activity') iconName='activity'
        if (route.name === 'Lists') iconName='list'
        if (route.name === 'Report') iconName='bar-chart'
        if (route.name === 'Staistics') iconName='trending-up'
        if (route.name === 'SignOut') iconName = 'log-out'

        return <Feather name={iconName} color={color} size={16} style={{marginLeft: 5}} />
      },
    })}
    drawerStyle={{
      width: Dimensions.get('window').width * 0.8
    }}
    drawerContentOptions={{
      activeBackgroundColor: colors.violet2,
      activeTintColor: colors.violet,
      itemStyle: {
        marginTop: 16,
        marginHorizontal: 12,
        borderRadius: 4
      },
      labelStyle: text.title2,
    }}
  >
    <Drawer.Screen name='Profile' component={ProfileScreen} />
    <Drawer.Screen name='Message' component={MessageScreen} />
    <Drawer.Screen name='Activity' component={ActivityScreen} />
    <Drawer.Screen name='Lists' component={ListScreen} />
    <Drawer.Screen name='Report' component={ReportScreen} />
    <Drawer.Screen name='Staistics' component={StatisticScreen} />
    <Drawer.Screen name='SignOut' component={SignOutScreen} />
  </Drawer.Navigator>
)

export default AppDrawerNavigator;
