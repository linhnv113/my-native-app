import { Text, View } from 'react-native';
import { Button, Header, Input } from '@rneui/themed';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      alert('Đăng nhập thành công');
      router.push('/home');
    }

    return;
  };

  return (
    <View>
      <Header centerComponent={{ text: 'Đăng nhập', color: '#fff' }} />
      <View>
        <Text>Email</Text>
        <Input
          keyboardType="email-address"
          placeholder="youremail@example.com"
          onChangeText={setEmail}
        />
      </View>
      <View>
        <Text>Password</Text>
        <Input
          placeholder="*******"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      <Button onPress={handleLogin}>Đăng nhập</Button>
    </View>
  );
}
