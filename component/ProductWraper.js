import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Product from './Product';
import Header from './Header';
import { getProductList } from './services/productListApi';

function ProductWrapper() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await getProductList();
      // Ensure the structure of API response is safe
      if (response && Array.isArray(response.users)) {
        setProductList(response.users);
      } else {
        console.warn('Unexpected response:', response);
      }
    } catch (error) {
      console.warn('Error fetching product list:', error);
    }
  };

  return (
    <View style={[styles.sectionContainer]}>
      <Product />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {productList.map((item, index) => (
          <Header key={item.id || index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default ProductWrapper;
