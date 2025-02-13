import { View } from 'react-native';
import { Text, TextInput, Button, SegmentedButtons } from 'react-native-paper';
import { router } from 'expo-router';

export default function NewMeal() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="Meal Name"
        mode="outlined"
        style={{ marginBottom: 16 }}
      />
      <SegmentedButtons
        value="breakfast"
        onValueChange={() => {}}
        buttons={[
          { value: 'breakfast', label: 'Breakfast' },
          { value: 'lunch', label: 'Lunch' },
          { value: 'dinner', label: 'Dinner' },
        ]}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Calories"
        mode="outlined"
        keyboardType="numeric"
        style={{ marginBottom: 16 }}
      />
      <Button 
        mode="contained"
        onPress={() => router.back()}
      >
        Add Meal
      </Button>
    </View>
  );
} 