import { Stack } from 'expo-router';

export default function WorkoutLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen 
        name="new"
        options={{ 
          title: 'New Workout',
          presentation: 'modal',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen 
        name="[id]"
        options={{ 
          title: 'Workout Details',
          headerShown: true,
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff'
        }}
      />
    </Stack>
  );
} 