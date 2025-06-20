import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from './Redux/productAction';

const Header = ({ item }) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const cartItems = useSelector((state) => state.productReducer);

  useEffect(() => {
    const found = cartItems?.some((element) => element.id === item.id);
    setIsAdded(found);
  }, [cartItems]);

  const handleAddToCart = () => dispatch(addToCart(item));
  const handleRemoveToCart = () => dispatch(removeToCart(item));

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Email: {item.email}</Text>
        <Text style={styles.details}>Phone: ₹{item.phone}</Text>

        <TouchableOpacity
          style={[styles.button, isAdded ? styles.removeButton : styles.addButton]}
          onPress={isAdded ? handleRemoveToCart : handleAddToCart}
        >
          <Text style={styles.buttonText}>
            {isAdded ? 'Remove from Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  removeButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
