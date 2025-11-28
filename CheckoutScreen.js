import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { useCart } from './CartContext';
import { useState } from 'react';

export default function CheckoutScreen() {
  const { cartItems, total, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleOrder() {
    if (!name || !address || !phone || !email) {
      Alert.alert('Ошибка', 'Заполните все поля!');
      return;
    }

    Alert.alert('Заказ оформлен', `Спасибо, ${name}! Общая сумма: ${total} ₽`);
    clearCart();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ваши товары</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title} - {item.price} ₽</Text>
          </View>
        )}
      />

      <Text style={styles.header}>Введите данные</Text>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Адрес"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.total}>Итого: {total} ₽</Text>
      <Button title="Оформить заказ" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  header: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  item: { padding: 5, backgroundColor: '#fff', marginBottom: 5, borderRadius: 8 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, textAlign: 'right' },
});