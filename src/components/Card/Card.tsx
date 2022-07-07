import React from 'react';
import {View, Text} from 'react-native';
import {cardStyle} from './style';

export const Card = () => {
  return (
    <View style={cardStyle.container}>
      <Text>Home</Text>
    </View>
  );
};
