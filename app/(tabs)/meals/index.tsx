import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Surface, Button, Chip } from 'react-native-paper';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IconName } from '../../../app/types/icons';

export default function MealsScreen() {
  const meals = [
    {
      id: 1,
      name: 'Breakfast',
      calories: 450,
      time: '8:00 AM',
      items: ['Oatmeal', 'Banana', 'Protein Shake'],
      icon: 'food-apple' as IconName
    },
    {
      id: 2,
      name: 'Lunch',
      calories: 650,
      time: '1:00 PM',
      items: ['Grilled Chicken', 'Brown Rice', 'Vegetables'],
      icon: 'food' as IconName
    },
    {
      id: 3,
      name: 'Dinner',
      calories: 550,
      time: '7:00 PM',
      items: ['Salmon', 'Sweet Potato', 'Broccoli'],
      icon: 'food-turkey' as IconName
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text variant="headlineMedium" style={{ color: '#fff', marginBottom: 16 }}>
            Nutrition
          </Text>
          
          {meals.map((meal) => (
            <Surface 
              key={meal.id} 
              style={{ 
                backgroundColor: '#1c1c1e',
                borderRadius: 16,
                padding: 16,
                marginBottom: 16
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name={meal.icon} size={24} color="#666" />
                <View style={{ marginLeft: 12, flex: 1 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text variant="titleMedium" style={{ color: '#fff' }}>
                      {meal.name}
                    </Text>
                    <Chip textStyle={{ color: '#2ecc71' }}>{meal.calories} cal</Chip>
                  </View>
                  <Text variant="bodyMedium" style={{ color: '#666', marginTop: 4 }}>
                    {meal.items.join(', ')}
                  </Text>
                </View>
              </View>
            </Surface>
          ))}

          <Button 
            mode="contained" 
            style={{ 
              marginTop: 8,
              backgroundColor: '#2ecc71'
            }}
            onPress={() => router.push('/meals/new')}
          >
            Add Meal
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 