import React from 'react';

import Screen from './Screen';

export const ProfileScreen = ({navigation}) => <Screen {...{navigation}} name='Profile' />
export const MessageScreen = ({navigation}) => <Screen {...{navigation}} name='Message' />
export const ActivityScreen = ({navigation}) => <Screen {...{navigation}} name='Activity' />
export const ListScreen = ({navigation}) => <Screen {...{navigation}} name='List' />
export const ReportScreen = ({navigation}) => <Screen {...{navigation}} name='Report' />
export const StatisticScreen = ({navigation}) => <Screen {...{navigation}} name='Statistic' />
export const SignOutScreen = ({navigation}) => <Screen {...{navigation}} name='SignOut' />
