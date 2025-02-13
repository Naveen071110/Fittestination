import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Card, Surface } from 'react-native-paper';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          {/* Activity Ring Summary */}
          <Surface style={{ 
            backgroundColor: '#1c1c1e',
            borderRadius: 16,
            padding: 16,
            marginBottom: 24
          }}>
            <Text variant="headlineMedium" style={{ color: '#fff', marginBottom: 16 }}>
              Activity
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text variant="titleLarge" style={{ color: '#2ecc71' }}>
                  24/300
                </Text>
                <Text variant="bodyMedium" style={{ color: '#666' }}>cal</Text>
              </View>
              <View>
                <Text variant="titleLarge" style={{ color: '#e74c3c' }}>
                  991
                </Text>
                <Text variant="bodyMedium" style={{ color: '#666' }}>steps</Text>
              </View>
              <View>
                <Text variant="titleLarge" style={{ color: '#3498db' }}>
                  0.69
                </Text>
                <Text variant="bodyMedium" style={{ color: '#666' }}>km</Text>
              </View>
            </View>
          </Surface>

          {/* Workouts Section */}
          <Surface style={{ 
            backgroundColor: '#1c1c1e',
            borderRadius: 16,
            padding: 16,
            marginBottom: 24
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text variant="headlineMedium" style={{ color: '#fff' }}>Workouts</Text>
              <Text 
                variant="bodyMedium" 
                style={{ color: '#2ecc71' }}
                onPress={() => router.push('/workouts')}
              >
                Show More
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons name="dumbbell" size={24} color="#666" />
              <View style={{ marginLeft: 12 }}>
                <Text variant="titleMedium" style={{ color: '#fff' }}>
                  Traditional Strength Training
                </Text>
                <Text variant="bodyMedium" style={{ color: '#666' }}>
                  0:02 • Today
                </Text>
              </View>
            </View>
          </Surface>

          {/* Trends Section */}
          <Surface style={{ 
            backgroundColor: '#1c1c1e',
            borderRadius: 16,
            padding: 16
          }}>
            <Text variant="headlineMedium" style={{ color: '#fff', marginBottom: 16 }}>
              Trends
            </Text>
            <Text variant="bodyMedium" style={{ color: '#666' }}>
              Keep working out to see your fitness trends
            </Text>
          </Surface>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 