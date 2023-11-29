import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = (): JSX.Element => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label]}>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
  },
});

export default LoginScreen;
