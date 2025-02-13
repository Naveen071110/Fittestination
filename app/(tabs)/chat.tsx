import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, Surface, TextInput, Button } from 'react-native-paper';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '../contexts/ChatContext';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, loading } = useChat();
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const message = input;
    setInput('');
    await sendMessage(message);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16 }}
        >
          {messages.map((message) => (
            <Surface
              key={message.id}
              style={{
                backgroundColor: message.role === 'user' ? '#1c1c1e' : '#2c2c2e',
                borderRadius: 16,
                padding: 16,
                marginBottom: 16,
                marginLeft: message.role === 'user' ? 32 : 0,
                marginRight: message.role === 'assistant' ? 32 : 0,
              }}
            >
              <Text style={{ color: '#fff' }}>{message.content}</Text>
            </Surface>
          ))}
        </ScrollView>

        <Surface style={{ 
          backgroundColor: '#1c1c1e',
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8
        }}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Ask about workouts or meals..."
            mode="outlined"
            style={{ flex: 1 }}
            theme={{ colors: { background: '#1c1c1e' }}}
          />
          <Button
            mode="contained"
            onPress={handleSend}
            loading={loading}
            disabled={loading || !input.trim()}
            style={{ backgroundColor: '#2ecc71' }}
          >
            Send
          </Button>
        </Surface>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
} 