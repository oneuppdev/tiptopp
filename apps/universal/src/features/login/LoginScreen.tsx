import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@oneuppdev/lifaite-ui';

const LoginScreen = (): JSX.Element => {
  const router = useRouter();

  const authHandler = React.useCallback(() => {
    router.replace('/(auth)/home');
  }, []);

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="text-purple-500 pb-2">Login Screen</Text>
      <Pressable
        className="bg-blue-500 py-2 px-4 rounded"
        onPress={authHandler}
      >
        <Text className="text-white">Authticate User</Text>
      </Pressable>
      <Button>Design System Button</Button>
    </View>
  );
};

export default LoginScreen;
