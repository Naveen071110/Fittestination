import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Surface, Button, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '../../supabase';
import { IconName } from '../../../app/types/icons';

export default function ProfileScreen() {
  const { session } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text variant="headlineMedium" style={{ color: '#fff', marginBottom: 16 }}>
            Profile
          </Text>

          <Surface style={{ 
            backgroundColor: '#1c1c1e',
            borderRadius: 16,
            padding: 16,
            marginBottom: 24,
            alignItems: 'center'
          }}>
            <Avatar.Text 
              size={80} 
              label={session?.user?.email?.[0].toUpperCase() || 'U'} 
              style={{ marginBottom: 8, backgroundColor: '#2ecc71' }}
            />
            <Text variant="titleMedium" style={{ color: '#fff' }}>
              {session?.user?.email}
            </Text>
          </Surface>

          <Surface style={{ 
            backgroundColor: '#1c1c1e',
            borderRadius: 16,
            padding: 16,
            marginBottom: 24
          }}>
            <Text variant="titleLarge" style={{ color: '#fff', marginBottom: 16 }}>
              Settings
            </Text>
            {[
              { title: 'Notifications', icon: 'bell' as IconName },
              { title: 'Privacy', icon: 'shield' as IconName },
              { title: 'Help & Support', icon: 'help-circle' as IconName },
            ].map((item, index) => (
              <View 
                key={item.title}
                style={{ 
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  borderTopWidth: index > 0 ? 1 : 0,
                  borderTopColor: '#333'
                }}
              >
                <MaterialCommunityIcons name={item.icon} size={24} color="#666" />
                <Text variant="bodyLarge" style={{ color: '#fff', marginLeft: 12, flex: 1 }}>
                  {item.title}
                </Text>
                <MaterialCommunityIcons name={'chevron-right' as IconName} size={24} color="#666" />
              </View>
            ))}
          </Surface>

          <Button 
            mode="outlined" 
            onPress={handleLogout}
            textColor="#e74c3c"
            style={{ borderColor: '#e74c3c' }}
          >
            Logout
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 