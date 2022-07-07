import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {Home} from '@screens/Home';
import NFT from '@screens/NFT/nft';
import {colors} from '@constants/colors';
import LeaderBoards from '@screens/LeaderBoards';
import {SCREEN_STACK_ENUM} from '@enum/screen-stack-enum';

const ButtonStackNavigator = () => {
  const ButtomStack = createBottomTabNavigator();

  return (
    <ButtomStack.Navigator initialRouteName={SCREEN_STACK_ENUM.NFT}>
      <ButtomStack.Screen
        name={SCREEN_STACK_ENUM.NFT}
        component={NFT}
        options={{
          headerShown: false,

          tabBarShowLabel: false,
          tabBarBackground: () => (
            <View style={{backgroundColor: colors.dark}} />
          ),
          headerStyle: {
            backgroundColor: colors.dark,
          },
          tabBarIcon: ({color, size, focused}) => (
            <>
              {focused ? (
                <AntDesign name="home" color={colors.yellow} size={size} />
              ) : (
                <AntDesign name="home" color={color} size={size} />
              )}
            </>
          ),
        }}
      />
      <ButtomStack.Screen
        name={SCREEN_STACK_ENUM.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBackground: () => (
            <View style={{backgroundColor: colors.dark}} />
          ),
          tabBarIcon: ({size, color, focused}) => (
            <>
              {focused ? (
                <Entypo name="hand" color={colors.yellow} size={size} />
              ) : (
                <Entypo name="hand" color={color} size={size} />
              )}
            </>
          ),
        }}
      />
      <ButtomStack.Screen
        name={SCREEN_STACK_ENUM.LEADERBOARD}
        component={LeaderBoards}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBackground: () => (
            <View style={{backgroundColor: colors.dark}} />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <>
              {focused ? (
                <AntDesign name="profile" color={colors.yellow} size={size} />
              ) : (
                <AntDesign name="profile" color={color} size={size} />
              )}
            </>
          ),
        }}
      />
    </ButtomStack.Navigator>
  );
};

export default ButtonStackNavigator;
