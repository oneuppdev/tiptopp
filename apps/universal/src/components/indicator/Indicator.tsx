import React from 'react';
import {} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  Extrapolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { WIDTH } from '@shared/constants';

interface IndicatorProps {
  index: number;
  scrollOffset: SharedValue<number>;
}

const Indicator = ({ index, scrollOffset }: IndicatorProps): JSX.Element => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / WIDTH;
    const inputRange = [index - 1, index, index + 1];
    const animatedColor = interpolateColor(input, inputRange, [
      'rgba(161, 164, 167, 0.2)',
      '#0474ED',
      'rgba(161, 164, 167, 0.2)',
    ]);
    return {
      width: interpolate(input, inputRange, [8, 32, 8], Extrapolate.CLAMP),
      height: 8,
      borderRadius: 8,
      backgroundColor: animatedColor,
    };
  });
  return <Animated.View style={[animatedStyle]} />;
};

export default Indicator;
