import { createContext, useContext, useState } from 'react';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

type ChatContextType = {
  messages: Message[];
  sendMessage: (content: string) => Promise<void>;
  loading: boolean;
};

const ChatContext = createContext<ChatContextType>({
  messages: [],
  sendMessage: async () => {},
  loading: false
});

const INITIAL_MESSAGES: Message[] = [{
  id: '0',
  content: "Hi! I'm your AI fitness assistant. I can help you with workout plans, meal suggestions, and fitness advice. What would you like to know?",
  role: 'assistant',
  timestamp: new Date()
}];

// Mock responses based on keywords
const getMockResponse = (userMessage: string) => {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes('workout') || msg.includes('exercise')) {
    return "Here's a simple workout plan:\n\n1. Warm-up: 5-10 minutes cardio\n2. Push-ups: 3 sets of 10\n3. Squats: 3 sets of 15\n4. Plank: Hold for 30 seconds\n5. Cool-down stretches\n\nWould you like more specific exercises?";
  }
  
  if (msg.includes('meal') || msg.includes('food') || msg.includes('diet')) {
    return "Here's a healthy meal suggestion:\n\nBreakfast:\n- Oatmeal with berries\n- Greek yogurt\n- Banana\n\nTotal calories: ~400\nProtein: 20g\n\nWould you like more meal ideas?";
  }
  
  if (msg.includes('weight') || msg.includes('fat') || msg.includes('muscle')) {
    return "For body composition goals, focus on:\n1. Consistent strength training\n2. Protein intake (1.6-2.2g/kg)\n3. Sleep quality\n4. Progressive overload\n\nWould you like specific recommendations?";
  }

  return "I can help you with workout plans, meal suggestions, and fitness advice. What specific area would you like to focus on?";
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (content: string) => {
    setLoading(true);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = getMockResponse(content);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error. Please try again.",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loading }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext); 