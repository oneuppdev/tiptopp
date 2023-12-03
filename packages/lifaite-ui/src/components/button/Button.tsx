import React from 'react';
import { View, Text } from 'react-native';

export interface ButtonProps {}

const Button = ({
  children,
}: React.PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <View className="items-center justify-center rounded bg-blue-400 p-2">
      <Text className="text-white">{children}</Text>
    </View>
  );
};

export default Button;
