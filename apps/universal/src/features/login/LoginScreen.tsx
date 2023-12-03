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
    <View className="flex-1 items-center justify-center gap-8">
      <View className="gap-4 bg-slate-400 p-6">
        <Text>Button from the application</Text>
        <Pressable
          className="items-center justify-center rounded bg-blue-500 px-4 py-2"
          onPress={authHandler}
        >
          <Text className="text-white">Login</Text>
        </Pressable>
      </View>
      <View className="gap-4 bg-slate-500 p-6">
        <Text>Button from the Design System</Text>
        <Button>Logout</Button>
      </View>
    </View>
  );
};

export default LoginScreen;
