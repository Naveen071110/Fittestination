import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function NewWorkout() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="Workout Name"
        mode="outlined"
        style={{ marginBottom: 16 }}
      />
      <Button 
        mode="contained"
        onPress={() => router.back()}
      >
        Create Workout
      </Button>
    </View>
  );
} 