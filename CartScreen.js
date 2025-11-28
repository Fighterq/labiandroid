import { View, Text, FlatList, Button, StyleSheet, Alert, Image } from 'react-native';
import { useCart } from './CartContext';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, total } = useCart();

  function handleRemove(itemId) {
    removeFromCart(itemId);
    Alert.alert("Удалено", "Товар удалён из корзины");
  }

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Ваша корзина пуста</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>{item.price} ₽</Text>
                  <Button title="Удалить" onPress={() => handleRemove(item.id)} />
                </View>
              </View>
            )}
          />
          <Text style={styles.total}>Итого: {total} ₽</Text>
          <Button title="Оформить заказ" onPress={() => navigation.navigate("Checkout")} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  empty: { fontSize: 18, textAlign: 'center', marginTop: 50 },
  item: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10, borderRadius: 10, padding: 10 },
  image: { width: 80, height: 80, borderRadius: 8 },
  details: { flex: 1, marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: '#4CAF50', marginBottom: 5 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 20, textAlign: 'right' },
});