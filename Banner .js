import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Banner = ({ source }) => {
  return (
    <View style={styles.bannerContainer}>
      <Image source={source} style={styles.bannerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
});

export default Banner;
