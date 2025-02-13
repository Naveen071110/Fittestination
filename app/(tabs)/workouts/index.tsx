import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Surface, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IconName } from '../../../app/types/icons';

export default function WorkoutsScreen() {
  const workouts = [
    {
      id: 1,
      name: 'Upper Body Strength',
      exercises: 8,
      duration: '45 min',
      icon: 'arm-flex' as IconName
    },
    {
      id: 2,
      name: 'Lower Body Power',
      exercises: 6,
      duration: '40 min',
      icon: 'human' as IconName
    },
    {
      id: 3,
      name: 'Core Workout',
      exercises: 5,
      duration: '30 min',
      icon: 'yoga' as IconName
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text variant="headlineMedium" style={{ color: '#fff', marginBottom: 16 }}>
            Workouts
          </Text>
          
          {workouts.map((workout) => (
            <Surface 
              key={workout.id} 
              style={{ 
                backgroundColor: '#1c1c1e',
                borderRadius: 16,
                padding: 16,
                marginBottom: 16
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name={workout.icon} size={24} color="#666" />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <Text variant="titleMedium" style={{ color: '#fff' }}>
                    {workout.name}
                  </Text>
                  <Text variant="bodyMedium" style={{ color: '#666' }}>
                    {workout.exercises} exercises • {workout.duration}
                  </Text>
                </View>
                <Button 
                  mode="text" 
                  textColor="#2ecc71"
                  onPress={() => router.push(`/workouts/${workout.id}`)}
                >
                  Start
                </Button>
              </View>
            </Surface>
          ))}

          <Button 
            mode="contained" 
            style={{ 
              marginTop: 8,
              backgroundColor: '#2ecc71'
            }}
            onPress={() => router.push('/workouts/new')}
          >
            Create New Workout
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 