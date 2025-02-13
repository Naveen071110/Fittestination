import { View, ScrollView } from 'react-native';
import { Text, Card, List, Divider, Button } from 'react-native-paper';
import { useLocalSearchParams, router } from 'expo-router';

export default function MealDetails() {
  const { id } = useLocalSearchParams();
  
  // In a real app, fetch meal details using the id
  const meal = {
    id: Number(id),
    name: 'Breakfast',
    calories: 450,
    time: '8:00 AM',
    type: 'breakfast',
    items: ['Oatmeal', 'Banana', 'Protein Shake'],
    nutritionFacts: {
      protein: '20g',
      carbs: '45g',
      fats: '12g',
      fiber: '8g'
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Card style={{ margin: 16 }}>
        <Card.Content>
          <Text variant="headlineSmall">{meal.name}</Text>
          <Text variant="bodyLarge" style={{ marginTop: 8 }}>
            {meal.time} • {meal.calories} calories
          </Text>
        </Card.Content>
      </Card>

      <Card style={{ margin: 16 }}>
        <Card.Content>
          <Text variant="titleMedium" style={{ marginBottom: 8 }}>
            Nutrition Facts
          </Text>
          <List.Item title="Protein" description={meal.nutritionFacts.protein} />
          <Divider />
          <List.Item title="Carbs" description={meal.nutritionFacts.carbs} />
          <Divider />
          <List.Item title="Fats" description={meal.nutritionFacts.fats} />
          <Divider />
          <List.Item title="Fiber" description={meal.nutritionFacts.fiber} />
        </Card.Content>
      </Card>

      <Card style={{ margin: 16 }}>
        <Card.Content>
          <Text variant="titleMedium" style={{ marginBottom: 8 }}>
            Items
          </Text>
          {meal.items.map((item, index) => (
            <List.Item
              key={index}
              title={item}
              left={props => <List.Icon {...props} icon="food" />}
            />
          ))}
        </Card.Content>
      </Card>

      <Button 
        mode="contained"
        style={{ margin: 16 }}
        onPress={() => router.back()}
      >
        Done
      </Button>
    </ScrollView>
  );
} 