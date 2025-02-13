import { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { Link, router } from 'expo-router';
import { supabase } from '../supabase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');
    
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      router.replace('/(tabs)/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ marginBottom: 24 }}>
        Create Account
      </Text>
      <TextInput
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={{ marginBottom: 24 }}
      />
      {error ? <HelperText type="error">{error}</HelperText> : null}
      <Button 
        mode="contained" 
        style={{ marginBottom: 16 }}
        onPress={handleRegister}
        loading={loading}
        disabled={loading}
      >
        Register
      </Button>
      <Link href="/login" asChild>
        <Button mode="text">Already have an account? Login</Button>
      </Link>
    </View>
  );
} 