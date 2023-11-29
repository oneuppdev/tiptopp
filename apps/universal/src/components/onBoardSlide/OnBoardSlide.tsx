import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { HEIGHT, WIDTH } from '@shared/constants';

interface OnBoardSlideProps {
  imageSource: number;
}

const OnBoardSlide = ({ imageSource }: OnBoardSlideProps): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <ImageBackground style={[styles.imageBackground]} source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT * 0.64,
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default OnBoardSlide;
