import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './style';

interface IProfileToFollow {
  imageUrl: string;
  avatar: string;
  collected: Number;
  Created: Number;
  name: string;
}

const ProfileToFollow: React.FC<IProfileToFollow> = (
  props: IProfileToFollow,
) => {
  const {imageUrl, avatar, name} = props;
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.imageStyle} />
      <View style={styles.subContainer}>
        <View style={styles.flexDirection}>
          <Image source={{uri: avatar}} style={styles.avatar} />

          {/* <Pressable style={styles.buttonStyle}>
            <Text>Follow</Text>
          </Pressable> */}
        </View>

        <View>
          <Text style={[styles.textStyle, styles.usernameStyle]}>@{name}</Text>
          <View style={[styles.flexDirection]}>
            <Text style={styles.textStyle}> {props.Created} Created</Text>
            <Text style={[styles.textStyle, styles.collectedStyle]}>
              {props.collected} Collected
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileToFollow;
