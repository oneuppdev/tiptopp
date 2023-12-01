import React from 'react';
import { Text } from 'react-native';

interface TypographyProps {}

const Typography = ({
  children,
}: React.PropsWithChildren<TypographyProps>): JSX.Element => {
  return <Text className="text-red-500">{children}</Text>;
};

export default Typography;
