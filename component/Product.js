import { useNavigation } from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

const HeaderCartIcon = ({ onPress }) => {
  const cartItems = useSelector((state) => state.productReducer);
  const itemCount = Array.isArray(cartItems) ? cartItems.length : 0;
  const navigation = useNavigation()
 useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.cartWrapper} onPress={() => navigation.navigate('ProductList')}>
          <Text style={styles.cartIcon}>🛒</Text>
          {itemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{itemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      ),
      headerTitle: 'Product List',
    });
  }, [navigation, itemCount]);
};

export default HeaderCartIcon;

const styles = StyleSheet.create({
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
