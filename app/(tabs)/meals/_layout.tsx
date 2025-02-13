import { Stack } from 'expo-router';

export default function MealsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="new"
        options={{ 
          title: 'Add Meal',
          presentation: 'modal',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="[id]"
        options={{ 
          title: 'Meal Details',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
    </Stack>
  );
} 