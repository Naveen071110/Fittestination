import { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { Link, router } from 'expo-router';
import { supabase } from '../supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
    } else {
      router.replace('/(tabs)/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
      <Text variant="headlineMedium" style={{ marginBottom: 24 }}>
        Welcome Back
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
        style={{ marginBottom: 24 }}
      />
      {error ? <HelperText type="error">{error}</HelperText> : null}
      <Button 
        mode="contained" 
        style={{ marginBottom: 16 }}
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
      >
        Login
      </Button>
      <Link href="/register" asChild>
        <Button mode="text">Don't have an account? Register</Button>
      </Link>
    </View>
  );
} 