import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductList = () => {

  return (
    <View style={styles.container}>
    <Text>
        Product List
    </Text>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 🔑 Align items horizontally
    justifyContent: 'space-between', // 🔑 Separate title and icon
    alignItems: 'center',
    padding: 10,
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
