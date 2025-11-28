import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useCart } from './CartContext';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price} ₽</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Добавить в корзину" onPress={() => addToCart(product)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});