import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function ProductScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.image} 
          resizeMode="contain" 
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} ₽</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>ID товара: {product.id}</Text>
          <Text style={styles.detailText}>В наличии</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
    marginBottom: 15,
  },
  details: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  detailText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
});