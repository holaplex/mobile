import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './style';

const HomePageTitle: React.FC<{title: String; showDiscoverAll?: boolean}> = ({
  title,
  showDiscoverAll = true,
}) => {
  return (
    <>
      <View style={[styles.container]}>
        <Text style={styles.titleStyle}>{title}</Text>
        {showDiscoverAll && (
          <Text style={[styles.titleStyle, styles.discoverAllStyle]}>
            Discover all{'   '}
            <AntDesign name="right" size={16} style={styles.iconStyle} />
          </Text>
        )}
      </View>
    </>
  );
};

export default HomePageTitle;
