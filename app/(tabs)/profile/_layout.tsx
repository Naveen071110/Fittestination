import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="notifications"
        options={{ 
          title: 'Notifications',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="privacy"
        options={{ 
          title: 'Privacy',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="support"
        options={{ 
          title: 'Help & Support',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
    </Stack>
  );
} 