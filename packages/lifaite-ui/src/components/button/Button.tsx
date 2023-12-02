import React from 'react';
import { View, Text } from 'react-native';

export interface ButtonProps {}

const Button = ({
  children,
}: React.PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <View className="p-4 bg-slate-900">
      <Text className="text-red-700">{children}</Text>
    </View>
  );
};

export default Button;
