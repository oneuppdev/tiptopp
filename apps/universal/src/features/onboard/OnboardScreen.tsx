import React from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Animated, {
  withSpring,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { HEIGHT, WIDTH } from '@shared/constants';
import OnBoardSlide from '@components/onBoardSlide';
import Indicator from '@components/indicator';
import { onboardingData } from '@shared/data';

const OnboardScreen = (): JSX.Element => {
  const scrollViewRef = React.useRef<Animated.ScrollView | null>(null);
  const x = useSharedValue<number>(0);

  const scrollAnimation = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value * -1 }],
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={[styles.container]}>
      <View style={[styles.skipcontainer]}>
        <Text>Skip</Text>
      </View>
      <View style={[styles.scrollViewContainer]}>
        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={scrollHandler}
          snapToInterval={WIDTH}
          scrollEventThrottle={1}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          horizontal
        >
          {onboardingData.map(({ title, imageSource }, index) => (
            <OnBoardSlide key={`${title}_${index}`} imageSource={imageSource} />
          ))}
        </Animated.ScrollView>
      </View>
      <View style={[styles.footerContainer]}>
        <Animated.View style={[styles.footerContainerMock, scrollAnimation]}>
          {onboardingData.map(({ title, description }, index) => (
            <Animated.View
              key={`${title}_${index}`}
              style={[styles.mockView, { paddingVertical: 20 }]}
            >
              <Text style={[styles.title]}>{title}</Text>
              <Text style={[styles.description]}>{description}</Text>
            </Animated.View>
          ))}
        </Animated.View>
        <View style={[styles.indicatorContainer]}>
          {onboardingData.map(({ title }, index) => (
            <Indicator
              key={`${title}_${index}`}
              index={index}
              scrollOffset={x}
            />
          ))}
        </View>
        <Animated.View style={[styles.footerContainerMock, scrollAnimation]}>
          {onboardingData.map(({ title, buttonLabel }, index) => (
            <Animated.View key={`${title}_${index}`} style={[styles.mockView]}>
              <Pressable
                style={[styles.pressable]}
                onPress={() => {
                  if (index === onboardingData.length - 1) {
                    console.log('last item');
                  } else {
                    scrollViewRef.current?.scrollTo({
                      x: WIDTH * (index + 1),
                      animated: true,
                    });
                  }
                }}
              >
                <Text
                  style={[
                    styles.description,
                    { fontSize: 16, color: '#FFFFFF' },
                  ]}
                >
                  {buttonLabel}
                </Text>
              </Pressable>
            </Animated.View>
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(4, 116, 237, 0.05)',
  },
  skipcontainer: {
    position: 'absolute',
    top: 54,
    left: 0,
    right: 0,
    height: 34,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    height: HEIGHT * 0.64,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  footerContainerMock: {
    flexDirection: 'row',
  },
  mockView: {
    width: WIDTH,
    paddingHorizontal: 20,
    gap: 20,
  },
  title: {
    fontFamily: 'LexendBold',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    color: '#13171B',
  },
  description: {
    fontFamily: 'LexendLight',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: 'center',
    color: '#A1A4A7',
  },
  pressable: {
    backgroundColor: '#0474ED',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default OnboardScreen;
