import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Product from './component/Product';
import Header from './component/Header';
import { getProductList } from './component/services/productListApi';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // ✅ Step 1: State for product list
  const [productList, setProductList] = useState([]);

  // ✅ Step 2: Fetch product list from API on mount
  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const products = await getProductList(); // API call
      setProductList(products.users); // assuming API returns an array
    } catch (error) {
      console.warn('Error fetching product list:', error);
    }
  };

  return (
    <View style={[styles.sectionContainer, backgroundStyle]}>
      <Product />
      <ScrollView>
        {productList.map((item, index) => (
          <Header key={item} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 10,
  },
});

export default App;
