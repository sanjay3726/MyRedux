import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const HeaderCartIcon = ({ onPress }) => {
  const cartItems = useSelector((state) => state.productReducer);
  const itemCount = Array.isArray(cartItems) ? cartItems.length : 0;

  return (
    <View style={styles.container}>
      {/* Product List Title */}
      <Text style={styles.headerText}>Product List</Text>

      {/* Cart Icon + Badge */}
      <TouchableOpacity style={styles.cartWrapper} onPress={onPress}>
        <Text style={styles.cartIcon}>🛒</Text>
        {itemCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{itemCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCartIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 🔑 Align items horizontally
    justifyContent: 'space-between', // 🔑 Separate title and icon
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#81ecec',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  cartWrapper: {
    position: 'relative',
    padding: 5,
  },
  cartIcon: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute',
    right: -4,
    top: -2,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
